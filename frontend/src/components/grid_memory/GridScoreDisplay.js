function GridScoreDisplay(props) {
    return (  
        <div>
            <div>Level {props.level}</div>
            <div>{props.incorrectGuesses}/10 incorrect</div>
        </div>
    );
}

export default GridScoreDisplay;