import '../styles.css'
import { useHistory } from 'react-router-dom'
import { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'


function Recovery() {
    const [user, setUser] = useState({})
    const [token, setToken] = useState('')
    const history = useHistory()

    { token ? history.push('/home') : history.push('/recovery') }

    useEffect(() => {
        setToken(localStorage.getItem('token'))
    }, [])

    function handleChange(e) {
        console.log(e.target.value)
    }

    return (
        <section className="content">
            <section className='auth-content'>
                <h1>Restuarção de senha</h1>
                <section className='auth-form'>
                    <label>Email</label>
                    <input
                        type='email'
                        placeholder='Digite seu email'
                        onChange={handleChange}
                    />
                    <input type='submit' value='enviar' />
                    <div className='auth-footer'>
                        <Link to='/login'>Voltar para o login</Link>
                    </div>
                </section>
            </section>
        </section>
    )
}

export default Recovery