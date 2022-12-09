import React, { Component } from 'react';
import Graduation from './graduation.jsx';

export default class Srinu extends Component {
  state = {
    name: "sreenuVasuDev",
    id: 1234
  }

  render() {
    let schoolName = "Bhashyam Public School";

    return (
      <div>
        <center>
          <h1>i ID is  {this.state.id}</h1>
          <Graduation school={schoolName} Id={this.state.id} clgName="GudlavalleruengineeringCollege" />
        </center>

      </div>
    )
  }
}
