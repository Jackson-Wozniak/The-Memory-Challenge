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

    function updateLevel(level){
        setLevel(level);
    }

    function incrementIncorrectGuesses(){
        setIncorrectGuesses(incorrectGuesses + 1);
    }

    return (  
        <div>
            <GridScoreDisplay level={level} incorrectGuesses={incorrectGuesses}/>
            <Grid updateLevel={updateLevel} incrementIncorrectGuesses={incrementIncorrectGuesses}/>
        </div>
    );
}

export default GridMemory;