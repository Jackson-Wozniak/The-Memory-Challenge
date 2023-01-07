import '../styles/GameCard.css'
import { useNavigate } from 'react-router-dom';

function GameCard(props) {
    const navigate = useNavigate();
    return ( 
        <button className="game-card" onClick={() => navigate(props.path)}>
                <h1>{props.name}</h1>
                <hr />
                <h3>{props.description}</h3>
        </button>
    );
}

export default GameCard;