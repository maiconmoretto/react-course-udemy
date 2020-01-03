import React from "react";

const person = (props) => {
  // return <p onClick={props.click}> i am {props.name}, and have {props.age} age</p>;
  return (
    <div>
      <p onClick={props.click}> i am {props.name}, and have {props.age} age</p>
      <p>props.children</p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
    )
};

export default person;
