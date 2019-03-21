import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushi: [],
    eaten: [],
    startIndex: 0,
    budget: 50
  }

  fetchSushi = () => {
    fetch(API)
    .then(r => r.json())
    .then(s => {
      this.setState({sushi: s})
    })
  }

  componentDidMount = () => {
    this.fetchSushi()
  }

  getSushi = (id) => {
    let eat = this.state.sushi.find(s => s.id == id)
    this.setState({budget: this.state.budget - eat.price, eaten: [...this.state.eaten, eat]})
  }

  addSushi = () => {
    this.setState({startIndex: this.state.startIndex+4})
  }

  render() {
    console.log(this.state.eaten);
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushi} getSushi={this.getSushi}
          startIndex={this.state.startIndex} addSushi={this.addSushi}
          eaten={this.state.eaten} budget={this.state.budget}/>
        <Table budget={this.state.budget} eaten={this.state.eaten}/>
      </div>
    );
  }
}

export default App;
