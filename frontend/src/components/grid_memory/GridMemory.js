import { useEffect, useState } from "react";
import Grid from "./Grid";
import GridScoreDisplay from "./GridScoreDisplay";

function GridMemory() {
    const [level, setLevel] = useState(1);
    const [incorrectGuesses, setIncorrectGuesses] = useState(0);
    const [gameStarted, setGameStarted] = useState(false);
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        if(incorrectGuesses >= 1){
            console.log("Game Over");
        }
    }, [incorrectGuesses]);

    function generateNewLevel(){
        setLevel(level + 1);
    }

    function incrementIncorrectGuesses(){
        setIncorrectGuesses(incorrectGuesses + 1);
    }

    return (  
        <div>
            <GridScoreDisplay level={level} incorrectGuesses={incorrectGuesses}/>
            <Grid generateNewLevel={generateNewLevel} incrementIncorrectGuesses={incrementIncorrectGuesses}/>
        </div>
    );
}

export default GridMemory;