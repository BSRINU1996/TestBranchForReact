import React, { Component } from 'react';
import { SolarEnergy } from './project.js';

export default class Graduation extends Component {

  state = {
    name: "Mechanical Branch",
    percentage: 70
  }

  // chnage = () => {
  //   this.setState({
  //     id: 874634
  //   })
  // }

  render() {
    return (
      <div>
        <h1>
          {/* {this.props.myAddress} AND
          {this.props.favSubject} */}

        </h1>
        <h1>{this.state.name}</h1>
        {/* <button onClick={this.chnage}>change</button> */}
        {/* <h1> {this.state.name} </h1> */}
        <h1>my graduation was done at  {this.props.clgName} my id in college was {this.props.id}</h1>
        <SolarEnergy relatedBranch={this.state.name} marksObtained={this.state.percentage} />
        <h1>{this.props.myState} & {this.props.myAddress}</h1>
      </div>
    )
  }
}
