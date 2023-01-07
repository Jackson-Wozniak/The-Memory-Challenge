import React from "react";

class LetterMappingGame extends React.Component {
    /*
        add "keyShown" boolean, where users can choose to display the mapped chars->numbers
        but will only receive 1/2 points when key is shown.
        The timer will reward those that do not need to turn the key on
    */
    constructor(props){
        super(props);
        this.state = {
            points : 0,
            currentChar : props.lettersMapped[Math.floor(Math.random() * props.lettersMapped.length)]
        }
        this.lettersMapped = props.lettersMapped;
        this.map = props.map;
    }
    
    componentDidMount() {
        window.addEventListener('keydown', this.handleKey);
    }
    
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKey);
    }

    checkIfAnswerIsCorrect(key){
        if(this.map.get(key).includes(this.state.currentChar)){
            this.setState({points : this.state.points + 1});
        }
        this.setState({currentChar : this.lettersMapped[Math.floor(Math.random() * this.lettersMapped.length)]}); 
    }

    handleKey = e => {
        this.checkIfAnswerIsCorrect(e.key);
    }

    render(){
        return (
            <div className="letter-mapping-game">
                <h1>{this.state.points}</h1>
                <h1>{this.state.currentChar}</h1>
                <button onClick={() => this.checkIfAnswerIsCorrect("1")}>1</button>
                <button onClick={() => this.checkIfAnswerIsCorrect("2")}>2</button>
                <button onClick={() => this.checkIfAnswerIsCorrect("3")}>3</button>
            </div>
    );
    }
}

export default LetterMappingGame;