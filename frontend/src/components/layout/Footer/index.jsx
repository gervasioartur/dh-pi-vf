import { Link } from 'react-router-dom'

//css
import './styles.css'

//incons
import { FaWhatsapp } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { RiPixelfedFill } from 'react-icons/ri'
import { FaCcVisa } from 'react-icons/fa'
import { FaCcMastercard } from 'react-icons/fa'
import { FaFacebookSquare } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'
import { BsTwitter } from 'react-icons/bs'

const Footer = (props) => (
  <footer>
    <div className='contacts'>
      <h6>Atendimento</h6>
      <Link>
        <small>
          <FaWhatsapp className='icon' /> (00) 9 0000-0000
        </small>
      </Link>

      <Link>
        <small>
          <MdEmail className='icon' /> contato@email.com.br
        </small>
      </Link>
    </div>

    <div className='center'>
      <i><RiPixelfedFill /></i>
      <i><FaCcVisa /></i>
      <i><FaCcMastercard /></i>
    </div>

    <div className='solialmedias'>
      <i><FaFacebookSquare /></i>
      <i><RiInstagramFill /></i>
      <i><BsTwitter /></i>
    </div>
  </footer>
);

export default Footer