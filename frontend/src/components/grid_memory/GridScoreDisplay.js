import '../../styles/components/grid_memory/GridLevelDisplay.css'

function GridScoreDisplay(props) {
    return (  
        <div className="grid-memory-level-display">
            <h1>Level {props.level}</h1>
            <p>{props.incorrectGuesses}/10 incorrect</p>
        </div>
    );
}

export default GridScoreDisplay;