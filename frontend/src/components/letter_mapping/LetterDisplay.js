import '../../styles/LetterMapping.css';
import LetterMappingGame from './LetterMappingGame';

function LetterDisplay(props) {
    return (  
        <div className="letter-mapping">
            <div>
                <h1>1</h1>
                <br />
                <p>{props.map.get("1")[0]}</p>
                <br />
                <p>{props.map.get("1")[1]}</p>
            </div>
            <div>
                <h1>2</h1>
                <br />
                <p>{props.map.get("2")[0]}</p>
                <br />
                <p>{props.map.get("2")[1]}</p>
            </div>
            <div>
                <h1>3</h1>
                <br />
                <p>{props.map.get("3")[0]}</p>
                <br />
                <p>{props.map.get("3")[1]}</p>
            </div>
            <LetterMappingGame map={props.map} lettersMapped={props.lettersMapped}/>
        </div>
    );
}

export default LetterDisplay;