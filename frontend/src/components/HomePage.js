import {getAllCurrentGames} from '../classes/Games.js'
import GameCard from './GameCard.js' 
import '../styles/components/HomePage.css'

function HomePage() {
    const games = getAllCurrentGames();
    return ( 
        <div className="home-page">
            {games.map(game => (
                <GameCard description={game.description} name={game.name} path={game.path}/>
            ))}
        </div>
    );
}

export default HomePage;