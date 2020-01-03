import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App  = props => {
const [ personsState, setPersonsState ] = useState({
    persons: [
      { name:'Maicon', age:32 },
      { name:'Maria', age:99 },
      { name:'Jose', age:9999 }
    ]
  })

  const swithNameHandler = (newName) =>  {
    setPersonsState({
        persons: [
          { name:  newName, age:10 },
          { name:'Maria2', age:20 },
          { name:'jose3', age:30 }
        ]
    })
  }

  const nameChangeHandler = (event) => {
    setPersonsState({
      persons: [
        { name:  'Maicon', age:10 },
        { name:'Maria2', age:20 },
        { name: event.target.value, age:30 }
      ]
  })
  }

  return (
    <div className="App ">
      <button onClick={swithNameHandler}>click me ;)</button>
        <Person   
          name={personsState.persons[0].name} 
          age={personsState.persons[0].age}
          click={ () => swithNameHandler('Joseeeee')}>
        </Person>
        <Person 
          name={personsState.persons[1].name} 
          age={personsState.persons[1].age}
          click={swithNameHandler.bind(this, 'MAX')}>
        </Person>
        <Person 
          name={personsState.persons[2].name} 
          age={personsState.persons[2].age}
          changed={nameChangeHandler}>
        </Person> 
    </div>
  );
}

export default App;
