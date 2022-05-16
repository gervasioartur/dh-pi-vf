const router = require('express').Router()

//middleware
const productFormValidation = require('../app/validations/product/register-validations')
const { imageUpload } = require('../app/middlewares/image-upload');
const Category = require('../app/models/Category');
const Product = require('../app/models/Product');

router.post('/add', imageUpload.array('images'), productFormValidation, async (req, res) => {
  const { name, price, description, categoriesId, amount } = req.body;
  const images = req.files

  //verificar se a categoria do product é valida
  const checkCategory = await Category.findByPk(categoriesId)
  if (!checkCategory) return res.status(404).json({ message: 'Categoria não encontrada!' })

  const builProduct = new Product({ name, price, description, categoriesId, amount, images: [] });
  images.map((image) => {
    builProduct.images.push(image.filename)
  })

  try {
    const product = await builProduct.save()
    return res.status(201).json({ message: 'Prouct adicionado com sucesso!', product })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Ocoreu um erro ao tentar pressistir os dados!', error })
  }
})

router.get('/', async (req, res) => {
  const products = await Product.findAll({ raw: true })
  return res.status(200).json({ message: 'OK', products })
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  const product = await Product.findByPk(id)
  if (!product) return res.status(404).json({ message: 'Produto não encontrado!' })
  return res.status(200).json({ message: 'OK', product })
})
module.exports = router
