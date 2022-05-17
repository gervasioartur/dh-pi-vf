import './styles.css'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'


//components
import CardContainer from '../../components/CardContainer'

//api
import api from '../../services/api'

function Cart(props) {
  const [products, setProdutos] = useState([])
  const [carts, setCarts] = useState([])
  const [images, setImages] = useState([])
  const [selectImage, setSelectImage] = useState('')
  const [token, setToken] = useState(localStorage.getItem('token') || '')

  const [product, setProduct] = useState({})
  

  const history = useHistory()
  useEffect(() => {
    setToken(localStorage.getItem('token'))

    api.get('/products/')
      .then(response => setProdutos(response.data.products))

    api.get('/carts/', {
      headers: {
        Authorization: `Bearer ${JSON.parse(token)}`,
      }
    })
      .then(response => console.log(response.data))

  }, [token])

  { token ? history.push('/cart') : history.push('/login') }

  return (
    <>
      <div className='cart-content'>
        <h2>Carinho de compras</h2>
        {carts.length > 0 ? (
          <div className='cart-itens'>

          </div>
        ) : (
          <div className='cart-itens nothing'>
            <h1>Sem nenhum produto no carinho</h1>
          </div>
        )}

      </div>
      <h4>Destaque</h4>
      {products.length == 0 ? (
        <h1>Sem produtos cadastrados</h1>
      ) : (
        <div className='cart-content-down'>
          <CardContainer cards={products} />
        </div>
      )}
    </>



  )
}


export default Cart