import React, { Component } from 'react';
import '../../styles/components/grid_memory/Grid.css'

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: [...this.createArrayOfButtons(36)],
      buttonsDisabled : false,
      correctGuessCount : 0,
      currentLevelIndexes : [],
      level : 1,
      buttonsShown : 7
    };
  }

  componentDidMount(){
    this.displayNewLevelButtons();
  }

  //on each level start, render the updated buttons with default boolean field values
  startNewLevel(){
    //if past level 15, render 49 buttons, otherwise render 36
    this.setState({buttons : this.createArrayOfButtons(this.state.level <= 15 ? 36 : 49), correctGuessCount : 0, buttonsShown : this.getCountOfButtonsShown()}, function(){
        this.displayNewLevelButtons();
    });
  }

  incrementCorrectGuess(){
    this.setState({correctGuessCount : this.state.correctGuessCount + 1}, () => {
        if(this.state.correctGuessCount >= this.state.buttonsShown){
            //when correct guesses reaches the # of buttons shown, start a new level
            this.setState({level : this.state.level + 1, buttonsDisabled : true}, function(){
                this.props.updateLevel(this.state.level);
                this.startNewLevel();
            });
        }
    });
  }

  //from the buttonsShown state variable, find that many random numbers to flash on screen for 1.5 seconds
  //these random numbers are the indexes of the buttons the user must click for a correct answer
  displayNewLevelButtons(){
    let indexesToLightUp = [];
    //set current indexes to empty array to avoid giving correct answers while loading
    this.setState({currentLevelIndexes : []});

    for(let i = 0; i < this.state.buttonsShown; i++){
        let rand = Math.floor(Math.random() * 35);
        if(indexesToLightUp.includes(rand)){
            i--;
            continue;
        }
        indexesToLightUp.push(rand);
    }
    let newButtons = [...this.state.buttons];
    //delay between rounds, to give user time to prepare for new round
    this.delay(1000).then(() => {
        this.activateButtonsOnLevelStart(indexesToLightUp, newButtons, true);
        //1.5 second delay to keep buttons displayed before giving user the chance to click the shown buttons
        this.delay(1500).then(() => {
            this.activateButtonsOnLevelStart(indexesToLightUp, newButtons, false);
            this.setState({currentLevelIndexes : indexesToLightUp, buttonsDisabled : false});
        });
    });
  }

  //as the levels increase, the buttons shown should scale up as well
  getCountOfButtonsShown(){
    if(this.state.level <= 5){
        return 7;
    }else if(this.state.level <= 10){
        return 12;
    }else if(this.state.level <= 15){
        return 15;
    }else{
        return 20;
    }
  }

  //when new level starts, each number in the indexesToLightUp will light up the button matching that index
  //actived boolean value will alter whether the color is default or lighten up
  activateButtonsOnLevelStart(indexesToLightUp, newButtons, activated){
    indexesToLightUp.forEach(function(i){
        newButtons[i].includedInLevel = activated;
    });
    this.setState({buttons : newButtons});
  }

  delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  //creates an array of default button objects to be used as comparisons for user guesses on the grid,
  //these button objects also affect the class label (and therefore the appearance) of each button on the grid
  createArrayOfButtons(amountOfButtons){
    let buttonsArr = [];
    for(let i = 0; i < amountOfButtons; i++){
        buttonsArr.push({correct : false, incorrect : false, includedInLevel : false, disabled : false});
    }
    return buttonsArr;
  }

  //handler for button click event
  //Checks if the index of the button is currently one of the buttons that lit up at the beginning of the level
  //Update correct/incorrect guesses and all related actions
  handleGuess(index) {
    let copiedButtonArr = [...this.state.buttons];
    copiedButtonArr[index].disabled = true;
    if(this.state.currentLevelIndexes.includes(index)){
        copiedButtonArr[index].correct = true;
        copiedButtonArr[index].incorrect = false;
        this.incrementCorrectGuess();
    }else{
        copiedButtonArr[index].incorrect = true;
        copiedButtonArr[index].correct = false;
        this.props.incrementIncorrectGuesses();
    }
    this.setState({ buttons: copiedButtonArr});
  }

  render() {
    return (
      <div className="grid-memory-grid">
        {this.state.buttons.map((button, index) => (
          <button
            key={index}
            onClick={() => this.handleGuess(index)}
            disabled={this.state.buttonsDisabled || button.disabled}
            className={button.includedInLevel ? 'flash-buttons' : button.correct ? 'correct' : button.incorrect ? 'incorrect' : ''}>
          </button>
        ))}
      </div>
    );
  }
}

export default Grid;
