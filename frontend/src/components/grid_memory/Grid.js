import React, { Component } from 'react';
import '../../styles/components/grid_memory/Grid.css'

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: [...this.createArrayOfButtons()],
      correctGuessCount : 0,
      currentLevelIndexes : []
    };
  }

  startNewLevel(){
    this.setState({buttons : this.createArrayOfButtons(), correctGuessCount : 0}, function(){
        this.displayNewLevelButtons();
    });
  }

  componentDidMount(){
    this.displayNewLevelButtons();
  }

  incrementCorrectGuess(){
    this.setState({correctGuessCount : this.state.correctGuessCount + 1}, () => {
        console.log(this.state.correctGuessCount);
    if(this.state.correctGuessCount >= 2){
        //when correct guesses reaches the # of buttons flashed, start a new level
        this.props.generateNewLevel();
        this.startNewLevel();
        console.log('completed');
    }
    });
  }

  displayNewLevelButtons(){
    let tempArr = [];
    //set current indexes to empty array to avoid giving correct answers while loading
    this.setState({currentLevelIndexes : []});
    for(let i = 0; i < 9; i++){
        let rand = Math.floor(Math.random() * (35 + 1));
        if(tempArr.includes(rand)){
            i--;
            continue;
        }
        tempArr.push(rand);
    }
    let newButtons = [...this.state.buttons];
    this.activateButtonsOnLevelStart(tempArr, newButtons, true);
    this.delay(1000).then(() => {
        this.activateButtonsOnLevelStart(tempArr, newButtons, false);
        this.setState({currentLevelIndexes : tempArr});
    });
  }

  activateButtonsOnLevelStart(tempArr, newButtons, activated){
    tempArr.forEach(function(i){
        newButtons[i].includedInLevel = activated;
    });
    this.setState({buttons : newButtons});
  }

  delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  createArrayOfButtons(){
    let buttonsArr = [];
    for(let i = 0; i < 36; i++){
        buttonsArr.push({correct : false, incorrect : false, includedInLevel : false});
    }
    return buttonsArr;
  }

  handleGuess(index) {
    let newButtons = [...this.state.buttons];
    if(this.state.currentLevelIndexes.includes(index)){
        newButtons[index].correct = true;
        newButtons[index].incorrect = false;
        this.incrementCorrectGuess();
    }else{
        newButtons[index].incorrect = true;
        newButtons[index].correct = false;
        this.props.incrementIncorrectGuesses();
    }
    this.setState({ buttons: newButtons });
  }

  render() {
    return (
      <div>
        {this.state.buttons.map((button, index) => (
          <button
            key={index}
            onClick={() => this.handleGuess(index)}
            disabled={button.disabled}
            className={button.includedInLevel ? 'flash-buttons' : button.correct ? 'correct' : button.incorrect ? 'incorrect' : ''}
          >
            {index}
          </button>
        ))}
      </div>
    );
  }
}

export default Grid;
