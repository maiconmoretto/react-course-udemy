import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import person from "./Person/Person";

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

  nameChangehandler = event => {
    this.setState({
      persons: [
        { id: '1', name: event.target.value, age: 10 },
        { id: '2', name: "Maria2", age: 20 },
        { id: '3', name: "jose3", age: 30 }
      ]
    });
  };

  tooglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

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
            this.state.persons.map((person, index) => {
              return <Person 
                name={person.name} 
                age={person.age} 
                click={() => this.deletePersonHandler(index)}
                key={person.id}
              />
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
