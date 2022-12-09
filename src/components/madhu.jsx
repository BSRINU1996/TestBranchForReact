import React from 'react';

class MadhuSudhanaHari extends React.Component {
    render() {
        return (
            <div>
                <h1>I am MadhuSudhana!  i am an {this.props.occupation}</h1>
                <h1>i am madhuSudhana and my age is {this.props.myAge}</h1>
                <h1>my fav subject is {this.props.favSubject}</h1>
            </div>
        )
    }
}
export default MadhuSudhanaHari;
//for export default components...........
//in reactdeveloper tools, this component name will be MadhuSudhanaHari only i.e with which name it is being exported .
// but it is never an Madhu i.e with which it is being imported.