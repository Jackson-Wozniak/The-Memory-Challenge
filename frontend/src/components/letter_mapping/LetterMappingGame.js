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
            currentChar : props.lettersMapped[Math.floor(Math.random() * props.lettersMapped.length)],
            secondsRemaining: 90,
            gameStarted : false,
            gameOver : false,
            onPause : false,
            showKey : false
        }
        this.lettersMapped = props.lettersMapped;
        this.map = props.map;
        //this.startTimer = this.startTimer.bind(this);
    }
    
    componentDidMount() {
        this.startTimer();
        window.addEventListener('keydown', this.handleKey);
    }
    
    componentWillUnmount() {
        window.removeEventListener('keyup', function(){});
    }

    checkIfAnswerIsCorrect(key){
        if(this.state.gameOver){
            return;
        }
        if(this.map.get(key).includes(this.state.currentChar)){
            this.setState({points : this.state.points + 1});
        }
    }

    handleButton = e => {
        if(this.state.onPause){
            return;
        }
        /*
        the game is paused for 500ms, to avoid button spamming. Once 500ms timer is done, 
            buttons can be clicked again
        */
        this.setState({onPause : true});
        this.sleep(500).then(() => {
            this.setState({onPause : false});
            this.checkIfAnswerIsCorrect(e.target.value);
            this.setState({currentChar : this.lettersMapped[Math.floor(Math.random() * this.lettersMapped.length)]});
        });
    }

    handleKey = e => {
        if(e.repeat || this.state.onPause){
            return;
        }
        //the game is paused for 500ms, to avoid button spamming. Once 500ms timer is done, buttons can be clicked again
        this.setState({onPause : true});
        this.sleep(500).then(() => {
            this.setState({onPause : false});
            this.checkIfAnswerIsCorrect(e.key);
            this.setNewCurrentChar();
        });
    }

    setNewCurrentChar(){
        let randomChar = this.lettersMapped[Math.floor(Math.random() * this.lettersMapped.length)];
        if(randomChar !== this.state.currentChar){
            this.setState({currentChar : randomChar});
            return;
        }
        this.setNewCurrentChar();
    }

    sleep (time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }

    startTimer(){
        let interval = setInterval(() => {
            this.setState({secondsRemaining : this.state.secondsRemaining - 1});
            if(this.state.secondsRemaining <= 0){
                clearInterval(interval);
                this.setState({gameOver : true});
            }
        }, 1000);
    }

    render(){
        let keyDiv;
        //when key is shown, fill the key div with data
        if(this.state.showKey){
            keyDiv = this.props.mappingKey;
        }else{
            keyDiv = <div></div>;
        }

        return (
            <div className="letter-mapping-game">
                <input type="checkbox" onChange={(e) => this.setState({showKey : e.target.checked})} value="Hello"/>
                {keyDiv}
                <button onClick={this.startTimer}></button>
                <h1>{this.state.points}</h1>
                <h1>{this.state.currentChar}</h1>
                <h3>{this.state.secondsRemaining > 0 ? this.state.secondsRemaining + " seconds left" : "Game Over!"}</h3>
                <button onClick={(e) => this.handleButton(e)} value="1">1</button>
                <button onClick={(e) => this.handleButton(e)} value="2">2</button>
                <button onClick={(e) => this.handleButton(e)} value="3">3</button>
            </div>
    );
    }
}

export default LetterMappingGame;