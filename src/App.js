import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Maicon", age: 32 },
      { id: 2, name: "Maria", age: 99 },
      { id: 3, name: "Jose", age: 9999 }
    ],
    otherState: "some other value",
    showpersons: false
  };

  nameChangehandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  tooglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  deletePersonHandler = personIndex => {
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    const style = {
      backgroundColor: "green",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;
    const rnd = Math.random();
    if (rnd > 0.7) {
      throw new Error('errrroouuuu');
    }

    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return (
                <ErrorBoundary key={person.id}>
                <Person
                  name={person.name}
                  age={person.age}
                  click={() => this.deletePersonHandler(index)}
                  changed={(event)  => this.nameChangehandler(event, person.id)}
                />
                </ErrorBoundary>
              );
            })
          }
        </div>
      );
      style.backgroundColor = 'red';
    }

    return (
      <div className="App">
        <h1>Hi, i'm react App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.tooglePersonsHandler}>
         toogle persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
