import '../../styles/components/letter_mapping/LetterDisplay.css';
import LetterMappingGame from './LetterMappingGame';

function LetterDisplay(props) {
    
    return (  
        <div className="letter-display">
            <div className="explanation-div">
                <h2>Welcome to the Letter Mapping Challenge!</h2>
                <h3 id="explanation">
                    Below, there is a key with 3 numbers, each with
                    2 corresponding letters. When the game starts, 
                    one of these six letters will be shown on screen.
                    Press the key and/or button that corresponds to that letter to gain  2 points. 
                    1 points is given while the key is visible.
                </h3>
                <h5>Press "I Understand" to start the 90 second timer</h5>
            </div>
            <div className="map-container">
                <div className="number-to-letter-div">
                    <h1 className="numbers">1</h1>
                    <hr />
                    <div className="letters">
                        <h1>{props.map.get("1")[0]}</h1>
                        <h1>{props.map.get("1")[1]}</h1>
                    </div>
                </div>
                <div className="number-to-letter-div">
                    <h1 className="numbers">2</h1>
                    <hr />
                    <div className="letters">
                        <h1>{props.map.get("2")[0]}</h1>
                        <h1>{props.map.get("2")[1]}</h1>
                    </div>
                </div>
                <div className="number-to-letter-div">
                    <h1 className="numbers">3</h1>
                    <hr />
                    <div className="letters">
                        <h1>{props.map.get("3")[0]}</h1>
                        <h1>{props.map.get("3")[1]}</h1>
                    </div>
                </div>
            </div>
            <button onClick={(e) => props.setGameValidated(true)}>I Understand</button>
        </div>
    );
}

export default LetterDisplay;