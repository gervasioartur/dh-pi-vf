import './styles.css'
import { useEffect, useState } from 'react'
import useFlashMessage from '../../hooks/useFlashMessage'
import { useHistory } from 'react-router-dom'


//api
import api from '../../services/api'

function ProductDetails(props) {
    const [selectImage, setSelectImage] = useState('')
    const [images, setImages] = useState([])
    const { setFlashMessage } = useFlashMessage()
    const history = useHistory()
    const [product, setProduct] = useState({})
    const [token] = useState(localStorage.getItem('token') || '')

    useEffect(() => {

        const { pathname } = window.location
        const id = parseInt(pathname.split('/')[2])
        api.get('/products/' + id)
            .then(response => {
                setSelectImage(`${process.env.REACT_APP_API}/images/products/${response.data.product.images[0]}`)
                setImages(response.data.product.images)
                setProduct(response.data.product)
            })
    }, [token])

    function handleclick(e) {
        setSelectImage(e.target.src)
    }

    async function handleAddToCart() {
        const { pathname } = window.location
        const id = parseInt(pathname.split('/')[2])
        let msgText = 'Cadastro realizado com sucesso!'
        let msgType = 'success'

        try {
            const data = await api.post('/carts/add/' + id)
            msgType = 'success'
            msgText = data.data.message
            history.push('/cart')
        } catch (error) {
            msgType = 'error'
            msgText = error.response.data.message
            console.log(error.response.data)
        }

        if (msgType != 'error') {
            setFlashMessage(msgText, msgType)
            history.push('/cart')
        }
        setFlashMessage(msgText, msgType)

    }



    return (
        <div className='product-details-content'>
            <div className='left'>
                <div className='up'>
                    <img src={selectImage} alt="" />
                </div>

                <div className='down'>
                    {images.map(img => (
                        <div
                            className='each-img'
                            onClick={handleclick}
                        >
                            <img src={`${process.env.REACT_APP_API}/images/products/${img}`} alt="" />
                        </div>
                    ))}


                </div>
            </div>
            <div className='rigth'>
                <h3>{product.name}</h3>
                <h2>R$ {product.price}</h2>
                <input className='buynow' type='button' value='Comprar agora' />
                <input onClick={handleAddToCart} className='addcart' type='button' value='Adcicionar ao carrinho' />

            </div>
        </div>
    );
}


export default ProductDetails