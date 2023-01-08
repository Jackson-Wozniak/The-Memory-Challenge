import '../../styles/components/letter_mapping/LetterKey.css';
import LetterMappingGame from './LetterMappingGame';

function LetterDisplay(props) {
    
    let button;
    if(!props.gameAlreadyValidated){
        button = <button onClick={(e) => props.setGameValidated(true)}>I Understand</button>
    }
    return (  
        <div className="letter-mapping">
            <div className="number-to-letter-div">
                <h1 className="numbers">1.</h1>
                <hr />
                <div className="letters">
                    <h1>{props.map.get("1")[0]}</h1>
                    <h1>{props.map.get("1")[1]}</h1>
                </div>
            </div>
            <div className="number-to-letter-div">
                <h1>2</h1>
                <br />
                <p>{props.map.get("2")[0]}</p>
                <br />
                <p>{props.map.get("2")[1]}</p>
            </div>
            <div className="number-to-letter-div">
                <h1>3</h1>
                <br />
                <p>{props.map.get("3")[0]}</p>
                <br />
                <p>{props.map.get("3")[1]}</p>
            </div>
            {button}
        </div>
    );
}

export default LetterDisplay;