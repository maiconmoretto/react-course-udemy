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

  console.log(personsState)

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
          age={personsState.persons[1].age}>
        </Person>
        <Person 
          name={personsState.persons[2].name} 
          age={personsState.persons[2].age}>
        </Person> 
    </div>
  );
}

export default App;
