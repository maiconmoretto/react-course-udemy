import React from "react";

const person = (props) => {
  return <p onClick={props.click}> i am {props.name}, and have {props.age} age</p>;
};

export default person;
