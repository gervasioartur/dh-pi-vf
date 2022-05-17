const route = require('express').Router()

//helps
const verifyToken = require('../app/helpers/verify-token')
const getUserByToken = require('../app/helpers/get-user-by-token')
const getToken = require('../app/helpers/get-token')

//models
const Cart = require('../app/models/Cart')
const { Router, raw } = require('express')
const Cart_user = require('../app/models/Cart_User')
const Cart_Product = require('../app/models/Cart_Product')
const Product = require('../app/models/Product')

route.get('/', verifyToken, async (req, res) => {
  const token = getToken(req)
  const user = await getUserByToken(token)

  const cartsUser = await Cart_user.findAll({
    raw: true,
    where: { UserId: user.id }

  })




  let listproducts = []
  for (cTU of cartsUser) {
    let cartProduct = await Cart_Product.findAll({
      raw: true,
      where: { CartId: cTU.CartId }
    })
    listproducts.push(cartProduct)
  }

  console.log(listproducts.length)

  return res.status(200).json({ message: 'ok', carts })
})

route.post('/add/:id', verifyToken, async (req, res) => {
  const token = getToken(req)
  const user = await getUserByToken(token)
  const productId = req.params.id


  //verificando se o producto existe
  const checkproduct = await Product.findByPk(productId)
  if (!checkproduct) return res.status(404).json({ message: 'Produto nao encontrado!' })

  try {
    const buildCart = new Cart()

    const cart = await buildCart.save()
    const buildCartUser = new Cart_user({ UserId: parseInt(user.id), CartId: parseInt(cart.id) })

    const cartUser = await buildCartUser.save()

    const buildCartProduct = new Cart_Product({ ProductId: parseInt(productId), CartId: parseInt(cart.id) })
    const cartProduct = await buildCartProduct.save()


    return res.status(201).json({ message: 'Producto adicionado ao carinho com sucesso!', cart, cartUser, cartProduct })

  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Ocorreu um erro ao tentar adicionar o produto no carrinho!' })
  }

})



module.exports = route
