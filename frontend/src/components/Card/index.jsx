import { Link } from 'react-router-dom';
import './styles.css'
const Card = (props) => (
    
   <Link className='anchor' to={`/productdetails/${props.id}`}>
     <div className="card">
        <img  src={`${process.env.REACT_APP_API}/images/products/${props.imgUrl[0]}`}
            alt={props.alt || 'Image'} />
        <div className="card-content">
            <h2>{props.title}</h2>
            <p>{props.content}</p>
        </div>
    </div>
   </Link>
);

export default Card