import '../styles/GameCard.css'

function GameCard(props) {
    return ( 
        <div className="game-card">
            <h1>{props.name}</h1>
            <hr />
            <h3>{props.description}</h3>
        </div>
    );
}

export default GameCard;