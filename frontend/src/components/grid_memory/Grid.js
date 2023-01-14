import React, { Component } from 'react';
import '../../styles/components/grid_memory/Grid.css'
import { callApiWithData } from '../../classes/ApiCall';

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: [...this.createArrayOfButtons(36)],
      correctGuessCount : 0,
      currentLevelIndexes : [],
      level : 1
    };
  }

  componentDidMount(){
    this.displayNewLevelButtons();
  }

  startNewLevel(){
    //if past level 15, render 49 buttons
    this.setState({buttons : this.createArrayOfButtons(this.state.level <= 15 ? 36 : 49), correctGuessCount : 0}, function(){
        this.displayNewLevelButtons();
    });
  }

  incrementCorrectGuess(){
    this.setState({correctGuessCount : this.state.correctGuessCount + 1}, () => {
        if(this.state.correctGuessCount >= this.state.currentLevelIndexes.length){
            //when correct guesses reaches the # of buttons shown, start a new level
            this.setState({level : this.state.level + 1}, function(){
                this.props.updateLevel(this.state.level);
                this.startNewLevel();
            });
        }
    });
  }

  displayNewLevelButtons(){
    let tempArr = [];
    //set current indexes to empty array to avoid giving correct answers while loading
    this.setState({currentLevelIndexes : []});
    for(let i = 0; i < 9; i++){
        let rand = Math.floor(Math.random() * 35);
        if(tempArr.includes(rand)){
            i--;
            continue;
        }
        tempArr.push(rand);
    }
    let newButtons = [...this.state.buttons];
    this.delay(1000).then(() => {
        this.activateButtonsOnLevelStart(tempArr, newButtons, true);
        this.delay(1000).then(() => {
            this.activateButtonsOnLevelStart(tempArr, newButtons, false);
            this.setState({currentLevelIndexes : tempArr});
        });
    });
  }

  getAmountOfButtonsShownByLevel(){
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

  activateButtonsOnLevelStart(tempArr, newButtons, activated){
    tempArr.forEach(function(i){
        newButtons[i].includedInLevel = activated;
    });
    this.setState({buttons : newButtons});
  }

  delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  createArrayOfButtons(amountOfButtons){
    let buttonsArr = [];
    for(let i = 0; i < amountOfButtons; i++){
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
            className={button.includedInLevel ? 'flash-buttons' : button.correct ? 'correct' : button.incorrect ? 'incorrect' : ''}>
          </button>
        ))}
      </div>
    );
  }
}

export default Grid;
