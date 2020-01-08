import React from "react";
import './Person.css';

const person = (props) => {
  // return <p onClick={props.click}> i am {props.name}, and have {props.age} age</p>;
  return (
    <div className="Person">
      <p onClick={props.click}> i am {props.name}, and have {props.age} age</p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
    )
};

export default person;
