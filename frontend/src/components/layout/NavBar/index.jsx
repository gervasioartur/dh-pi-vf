import './styles.css'
import { useEffect, useState, useContext } from 'react'

import { Link } from 'react-router-dom'

//icons
import { FaSearch } from 'react-icons/fa'
import { FaUserAlt } from 'react-icons/fa'
import { BsFillHandbagFill } from 'react-icons/bs'
import { BiLogOut } from 'react-icons/bi'
import { IoLogIn } from 'react-icons/io5'

//
import { Context } from '../../../context/UserContext'
import api from '../../../services/api'

function NavBar() {
    const [categories, setCategories] = useState([])
    const [token] = useState(localStorage.getItem('token') || '')


    useEffect(() => {
        api.get('/categories')
            .then(response => setCategories(response.data.categories))
    }, [token])

    console.log(categories)

    const { authenticated, logout } = useContext(Context)
    return (
        <nav className='header'>
            <div className='logo'>
                <h1>
                    <Link to='/'>
                        <span id='first'>L</span>O<span id='first'>G</span>O
                    </Link>
                </h1>
            </div>
            {authenticated ? (

                <>
                    <div className='menu'>
                        <ul>
                            <li>
                                <Link to='/'>
                                    Home
                                </Link>
                            </li>
                            {
                                categories.length > 0 && (
                                    categories.map(category => (
                                        <li>
                                            <Link to='#'>
                                                {category.name}
                                            </Link>
                                        </li>
                                    ))
                                )
                            }
                            <li>
                                <Link to='#'>
                                    Outros
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='search-form'>
                        <form action="">
                            <input type='search'
                                placeholder='O que você esta procurando ?'
                            />
                            <i>
                                <Link>
                                    <FaSearch />
                                </Link>
                            </i>
                        </form>
                    </div>

                    <div className='userLogged'>
                        <i>
                            <Link>
                                <FaUserAlt />
                            </Link>
                        </i>
                        <i>
                            <Link to='/cart'>
                                <BsFillHandbagFill />
                            </Link>
                        </i>
                        <i>
                            <Link onClick={logout}>
                                <BiLogOut />
                            </Link>
                        </i>
                    </div>
                </>
            ) :
                <>
                    <div className='menu'>
                        <ul>
                            <li>
                                <Link to='/'>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to='#'>
                                    Outros
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='search-form'>
                        <form action="">
                            <input type='search'
                                placeholder='O que você esta procurando ?'
                            />
                            <i>
                                <Link>
                                    <FaSearch />
                                </Link>
                            </i>
                        </form>
                    </div>

                    <div className='userLogged'>
                        <i>
                            <Link to="/login">
                                <IoLogIn />
                            </Link>
                        </i>
                    </div>
                </>
            }
        </nav>
    )
}

export default NavBar