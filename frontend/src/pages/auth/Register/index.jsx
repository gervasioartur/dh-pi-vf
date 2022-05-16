import './styles.css'
import { useHistory } from 'react-router-dom'
import { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'


// contenxt
import { Context } from '../../../context/UserContext'

function Register() {
    const [user, setUser] = useState({})
    const { register } = useContext(Context)
    const [token, setToken] = useState('')
    const history = useHistory()

    { token ? history.push('/home') : history.push('/register') }
    useEffect(() => {
        setToken(localStorage.getItem('token'))
    }, [])

    function handleChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        register(user)
    }

    return (
        <section className="content">
            <h1>Rgister</h1>
            <form onSubmit={handleSubmit} className='content-inner'>
                <section className='user-data'>
                    <label>Nome</label>
                    <input
                        name='name'
                        type='text'
                        placeholder='Digite seu nome'
                        onChange={handleChange}
                    />

                    <label>Email</label>
                    <input
                        name='email'
                        type='email'
                        placeholder='Digite seu email'
                        onChange={handleChange}
                    />
                    <label>Phone</label>
                    <input
                        name='phone'
                        type='text'
                        placeholder='Digite seu número de celular'
                        onChange={handleChange}

                    />
                    <label>Senha</label>
                    <input
                        name='password'
                        type='password'
                        placeholder='Digite uma senha'
                        onChange={handleChange}
                    />
                    <label>Confirmar senha</label>
                    <input
                        name='confirmPassword'
                        type='password'
                        placeholder='Comfirme a sua senha'
                        onChange={handleChange}
                    />
                     <input type='submit' value='enviar' />
                    <div className='user-data-footer '>
                        <Link to='/login'>Já tem uma conta?</Link>
                    </div>
                </section>
            </form>
        </section>
    )
}

export default Register