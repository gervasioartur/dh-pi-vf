require('dotenv/config');
const cors = require('cors');
const express = require('express');

//configuring express and cors
const app = express();
app.use(express.json());
app.use(express.static('public'))
app.use(cors());

//importing routes
const authRoutes = require('./routes/auth.routes');
const productsRoues = require('./routes/product.routes')
const categoriesRoutes = require('./routes/category.routes')
const cartRoutes =  require('./routes/cart.routes')

// configuring roures
app.get('/', (req, res) => {
  res.send({ message: 'Olá seja bem vindo a api do projeto pi' });
});
app.use('/auth', authRoutes);
app.use("/products", productsRoues)
app.use('/categories', categoriesRoutes)
app.use('/carts', cartRoutes)

app.get('*', (req, res) => {
  return res.status(404).json({ message: 'Página não encontrada!' });
});
module.exports = app;
