import '../styles.css'
import { useHistory } from 'react-router-dom'
import { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'

// ƈontext
import { Context } from '../../../context/UserContext'

function Login() {
    const [user, setUser] = useState({})
    const { login } = useContext(Context)
    const [token, setToken] = useState('')
    const history = useHistory()

    { token ? history.push('/home') : history.push('/login') }

    useEffect(() => {
        setToken(localStorage.getItem('token'))
    }, [])

    function handleChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        login(user)
    }

    return (
        <section className="content">
            <form onSubmit={handleSubmit} className='auth-content'>
                <h1>Login</h1>
                <section className='auth-form'>
                    <label>Email</label>
                    <input
                        name='email'
                        type='email'
                        placeholder='Digite seu email'
                        onChange={handleChange}
                    />
                    <label>senha</label>
                    <input
                        name='password'
                        type='password'
                        placeholder='Digite sua senha'
                        onChange={handleChange}
                    />
                    <input type='submit' value='logar' />
                    <div className='auth-footer'>
                        <Link to='/Recovery'>Esqueceu sua senha?</Link>
                        <Link to='/register'>Não tem um conta  ?</Link>
                    </div>
                </section>
            </form>
        </section>
    )
}

export default Login