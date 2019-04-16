import React, { Component } from 'react';
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Row from "./components/Row";
import cards from "./cards.json";
import "./App.css";

function shuffleCards(array) {
  for (let i = array.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


class App extends Component {

  state = {
    cards,
    score: 0,
    highscore: 0,
    clicked: [],
    winState: ""
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      alert("You have failed!");
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.score +1;
    this.setState({
      score: newScore,
      winState: ""
    });
    if (newScore >= this.state.highscore) {
      this.setState({ highscore: newScore });
    }
    else if (newScore === 12) {
      console.log("You got them all correct")
      this.setState({ winState: "You got them all correct "});
    }
    
    this.handleShuffle();
    
  };

    
  handleReset = () => {
    this.setState({
      score: 0,
      highscore: this.state.highscore,
      clicked: [],
      winState: "Play Again"
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledCards = shuffleCards(cards);
    this.setState({ cards: shuffledCards });
  };
  

  

  render() {
    return (
      <Wrapper>
          <Navbar 
          score = {this.state.score} highscore = {this.state.highscore}>May the Clicks Be With You</Navbar>
          <Container>
            <Row>
            {this.state.cards.map(card => (
            <Card 
              handleClick={this.handleClick}
              handleIncrement={this.handleIncrement}
              id ={card.id}
              key ={card.id}
              image = {card.image}
              />
          ))}
          </Row>
          </Container>
      </Wrapper>
    );
  }
};

export default App;

