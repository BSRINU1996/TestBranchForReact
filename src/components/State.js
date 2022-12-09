import React, { Component } from 'react';
import Grade from './graduation';
import Madhu from './madhu.jsx';


class StateComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myName: "srinu",
            myAge: 18,
            myAddress: "plot.no:10, Bollaram",
            myCity: "Hyderabad",
            myState: "Telangana",
            myZip: 12345,
            myBoolean: true,
            myArray: [1, 2, 3, 4, 5, 6, 7, 8],
            myObject: {
                name: "Rakesh",
                test: [1, 2, 3, 4,]
            },
            myCollege: "gudlavalleru engineering college",
            myId: 134810313,
        }
    }

    changeHandler = () => {
        this.setState({
            myName: "srinuVasuDev"
        })
        console.log("srinuVasuDev")
    }

    updateMyNativeState = () => {
        this.setState({
            myState: "Andhra Pradesh"
        })
        console.log("AndhraPradesh")
    }
    // setState is an method 


    // chnageThisAddress = () => {
    //     this.setState({
    //         myAddress: "Kompally"
    //     })
    //     console.log("Adrees button")
    // }


    render() {
        let favSubject = "FLUID DYNAMICS";
        let occupation = "SoftwareENgineer";
        return (
            <div>
                <h1 style={{ color: "blue" }}>
                    {this.state.myName}
                </h1>
                <button onClick={this.changeHandler}> Click me to change the State Value of myName</button>
                {/* <button onClick={this.chnageThisAddress}> to change address</button> */}

                <Grade myState={this.state.myState} myAddress={this.state.myAddress} clgName={this.state.myCollege} id={this.state.myId} favSubject="FLUID DYNAMICS" />
                <Madhu occupation="SoftwareENgineer" myAge={this.state.myAge} />
                {/* eventhough we don't use this prop in the MadhuSudhanaHari component, in react developer tools  this prop will be reflected.  */}
                <h1 style={{ color: "orange" }}>{this.state.myState}</h1>
                <button onClick={this.updateMyNativeState}>click me get my native state!</button>

            </div>
        )
    }
}



export default StateComponent;