import '../../styles/components/letter_mapping/LetterKey.css'

function LetterKey(props) {
    return (  
        <div className="letters-key">
            <div className="div">
                <h1 className="numbers">1.</h1>
                <hr />
                <div className="letters">
                    <h1>{props.map.get("1")[0]}</h1>
                    <h1>{props.map.get("1")[1]}</h1>
                </div>
            </div>
            <div className="div">
                <h1 className="numbers">2.</h1>
                <hr />
                <div className="letters">
                    <h1>{props.map.get("2")[0]}</h1>
                    <h1>{props.map.get("2")[1]}</h1>
                </div>
            </div>
            <div className="div">
                <h1 className="numbers">3.</h1>
                <hr />
                <div className="letters">
                    <h1>{props.map.get("3")[0]}</h1>
                    <h1>{props.map.get("3")[1]}</h1>
                </div>
            </div>
        </div>
    );
}

export default LetterKey;