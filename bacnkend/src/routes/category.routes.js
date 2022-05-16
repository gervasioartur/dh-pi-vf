const router = require('express').Router()

//models
const Category = require('../app/models/Category')

router.post('/add', async (req, res) => {
  const { name } = req.body

  if (!name) return res.status(422).json({ message: 'O digite nome da categiria!' })

  //vericando se categoria ja foi criada
  const checkCategory = await Category.findOne({
    raw: true,
    where: { name }
  })
  if (checkCategory) return res.status(201).json({ message: 'Created', checkCategory })
  try {
    const buildCategory = new Category({ name })
    const category = await buildCategory.save()
    return res.status(201).json({ message: 'Created', category })
  } catch (error) {
    return res.status(500).json({ message: 'Um erro ocoreu ao pressistir os dados!' })
  }
})

router.get('/', async (req, res) => {
  const categories = await Category.findAll()
  return res.status(200).json({ message: "ok", categories })
})
module.exports = router
