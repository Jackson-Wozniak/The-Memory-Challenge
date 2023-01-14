import { useEffect, useState } from "react";
import Grid from "./Grid";
import GridScoreDisplay from "./GridScoreDisplay";
import '../../styles/components/grid_memory/GridMemory.css'
import SelfAssessment from "../SelfAssessment";

function GridMemory() {
    const [level, setLevel] = useState(1);
    const [incorrectGuesses, setIncorrectGuesses] = useState(0);
    const [grade, setGrade] = useState(null);
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

    function setSelfAssessmentGrade(grade){
        setGrade(grade);
    }

    let window;
    if(grade == null){
        window = <SelfAssessment setSelfAssessmentGrade={setSelfAssessmentGrade} memoryCategory="visual"/>
    }else{
        window = <div className="grid-memory-container">
                    <GridScoreDisplay level={level} incorrectGuesses={incorrectGuesses}/>
                    <Grid updateLevel={updateLevel} incrementIncorrectGuesses={incrementIncorrectGuesses}/>
                 </div>
    }

    return (  
        <div>
            {window}
        </div>
    );
}

export default GridMemory;