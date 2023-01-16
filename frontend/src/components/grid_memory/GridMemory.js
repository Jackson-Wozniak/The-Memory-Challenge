import { useEffect, useState } from "react";
import Grid from "./Grid";
import GridScoreDisplay from "./GridScoreDisplay";
import '../../styles/components/grid_memory/GridMemory.css'
import SelfAssessment from "../SelfAssessment";
import ShowResults from "../ShowResults";

function GridMemory() {
    const [level, setLevel] = useState(1);
    const [incorrectGuesses, setIncorrectGuesses] = useState(0);
    const [grade, setGrade] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        if(incorrectGuesses >= 1){
            setGameOver(true);
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

    if(gameOver){
        window = <ShowResults name="grid-memory" score={level} grade={grade}/>
    }

    return (  
        <div>
            {window}
        </div>
    );
}

export default GridMemory;