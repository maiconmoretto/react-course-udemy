import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Maicon", age: 32 },
      { name: "Maria", age: 99 },
      { name: "Jose", age: 9999 }
    ],
    otherState: "some other value",
    showpersons: false
  };

  swithNameHandler = newName => {
    this.setState({
      persons: [
        { name: newName, age: 10 },
        { name: "Maria2", age: 20 },
        { name: "jose3", age: 30 }
      ]
    });
  };

  nameChangehandler = event => {
    this.setState({
      persons: [
        { name: event.target.value, age: 10 },
        { name: "Maria2", age: 20 },
        { name: "jose3", age: 30 }
      ]
    });
  };

  tooglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map(person => {
              return <Person name={person.name} age={person.age} changed={this.nameChangehandler}/>
            })
          }
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, i'm react App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.tooglePersonsHandler}>
          switch name
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
