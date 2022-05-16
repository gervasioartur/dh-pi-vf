import './styles.css'
//components
import Card from '../Card';

const CardContainer = (props) => (
    <div className="cards-container">
        {
            props.cards.map((card) => (
                <Card key={card.id}
                    id={card.id}
                    title={`R$ ${card.price}`}
                    content={card.description}
                    imgUrl={card.images} />
            ))
        }

    </div>
);

export default CardContainer