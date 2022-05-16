const router = require('express').Router()
const bcrypt = require('bcrypt')

//models
const User = require('../app/models/User')

//helpers
const createUserToken = require('../app/helpers/create-user-token')

//middlewares
const registerValidation = require('../app/validations/user/register-validations')

router.post('/register', registerValidation, async (req, res) => {
  const { name, email, phone, password } = req.body

  //vereficando se email ja foi usado
  const checkUser = await User.findOne({
    raw: true,
    where: { email }
  })

  if (checkUser) {
    return res.status(401).json({ message: 'Por favor utlize outro email ou faça login!' })
  }
  try {
    const salt = await bcrypt.genSalt(12)
    const passwordHashed = await bcrypt.hash(password, salt)
    const buildUser = new User({ name, email, phone, password: passwordHashed })
    const user = await buildUser.save()
    await createUserToken(user, req, res)
  } catch (error) {
    return res.status(500).json({ message: 'Aconteu um erro ao tentar presistir os dados!F' })
  }
})

router.post('/login', async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(422).json({ message: 'Preencha o email e a senha!' })
  }

  //verificando o usario no bancos
  const checkUser = await User.findOne({
    raw: true,
    where: { email }
  })
  if (!checkUser) return res.status(404).json({ message: 'Usuário não encontrado!' })

  //verificando a passwordf
  const checkPassword = await bcrypt.compare(password, checkUser.password)
  if (!checkPassword) return res.status(422).json({ message: 'Senha inválida!' })
  await createUserToken(checkUser, req, res)
})

module.exports = router
