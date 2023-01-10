import { useState } from "react";
import '../../styles/components/letter_mapping/LetterMapping.css'
import SelfAssessment from "../SelfAssessment";
import LetterDisplay from "./LetterDisplay";
import LetterMappingGame from "./LetterMappingGame";

function LetterMapping() {
    const [selfAssessmentGrade, setSelfAssessmentGrade] = useState(null);
    const [gameValidated, setGameValidated] = useState(false);

    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    const [letterMap, setLetterMap] = useState(setMap());

    function setMap(){
        return new Map([
            ["1", assignRandomCharacters()],
            ["2", assignRandomCharacters()],
            ["3", assignRandomCharacters()],
        ]);
    };
    
    function assignRandomCharacters(){
        let assignedCharacters = [];
        for(let i = 0; i < 2; i++){
            assignedCharacters.push(characters.charAt(Math.floor(Math.random() * characters.length)));
            characters = characters.replace(assignedCharacters[i], '');
        }
        return assignedCharacters;
    }

    let gameWindow;
    if(selfAssessmentGrade == null){
        gameWindow = <SelfAssessment setSelfAssessmentGrade={setSelfAssessmentGrade} memoryCategory="visual"/>;
    }else{
        gameWindow = <LetterDisplay 
                        map={letterMap}  
                        setGameValidated={setGameValidated} 
                        gameAlreadyValidated={false}
                    />;
    }

    if(gameValidated){
        return(
            <div className="letter-mapping">
                <LetterMappingGame map={letterMap} mappingKey={gameWindow}/>
            </div>
        );
    }else{
        return(
            <div className="letter-mapping">
                {gameWindow}
            </div>
        );
    }
}

export default LetterMapping;