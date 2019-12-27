import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name:'Maicon', age:32 },
      { name:'Maria', age:99 },
      { name:'Jose', age:9999 }
    ]
  }

  swithNameHandler = () =>  {
    this.setState(
      {
        persons: [
          { name:'Maicon1', age:10 },
          { name:'Maria2', age:20 },
          { name:'jose3', age:30 }
        ]
      }
    )
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.swithNameHandler}>click me ;)</button>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person> 
      </div>
    );
  }
}


export default App;