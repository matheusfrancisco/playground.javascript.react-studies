import React, { Component } from 'react';

class TechList extends Component{
  state = {
      techs: [
        'Node.js',
        'ReactJs',
        'React Native'
      ]
  };

  render() {
    return (
      <ul>
        <li>ReactJs</li>
        <li>Nodejs</li>
        <li>ReactNative</li>
      </ul>
    );
  }
}

export default TechList;
