function GridScoreDisplay(props) {
    return (  
        <div>
            <div>{props.level}</div>
            <div>{props.incorrectGuesses}</div>
        </div>
    );
}

export default GridScoreDisplay;