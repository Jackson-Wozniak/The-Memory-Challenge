import {getAllCurrentGames} from '../classes/Games.js'
import GameCard from '../components/GameCard.js' 

function HomePage() {
    const games = getAllCurrentGames();
    return ( 
        <div className="home-page">
            {games.map(game => (
                <GameCard description={game.description} name={game.name} />
            ))}
        </div>
    );
}

export default HomePage;