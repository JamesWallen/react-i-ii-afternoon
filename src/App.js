import React, { Component } from 'react';
import data from './Components/data.js';
import Display from './Components/Display';
import Cycle from './Components/Cycle';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      info: data.data,
      currentIndex: 0
    }
  }

  previous = () => {
    let previousIndex = --this.state.currentIndex;
    console.log(previousIndex);
    if (this.state.currentIndex === -1) {
      this.setState({currentIndex: this.state.info.length - 1})
    }
    else {
      this.setState({currentIndex: previousIndex});
    }
  }

  next = () => {
    let nextIndex = ++this.state.currentIndex;
    console.log(nextIndex);
    if (this.state.currentIndex === this.state.info.length) {
      this.setState({currentIndex: 0})
    }
    else {
      this.setState({currentIndex: nextIndex});
    }
  }

  deleteUser = () => {
    let users = this.state.info;
    users.splice(this.state.currentIndex, 1);
    this.setState({info: users});
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Home</h1>
        </header>
        <section className='main-section'>
          <div className='display-info'>
            <Display userInfo={this.state.info} currentUser={this.state.currentIndex}/>
          </div>
          <Cycle nextUser={this.next} previousUser={this.previous} delete={this.deleteUser}/>
        </section>
      </div>
    );
  }
}

export default App;