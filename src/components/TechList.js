import React, { Component } from 'react';

class TechList extends Component{
  state={
    techs: [
      'NodeJs',
      'ReactJs',
      'React Native'
    ]
  };

  render(){
    console.log(this.state);
    return (
      <ul>
        <li>NodeJs</li>
        <li>ReactJs</li>
        <li>React Native</li>
      </ul>
    )
  }
}

export default TechList;