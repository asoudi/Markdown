import React from 'react'
import ProcessorForm from './ProcessorForm'
import Preview from './Preview';

import raw from '../cases/case.txt'


export class Intial extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rawData: ""
        };

        this.LoadText = this.LoadText.bind(this);
        this.GetChanges = this.GetChanges.bind(this);

    }

    LoadText(){

        fetch(raw)
        .then(r => r.text() )
        .then( (mytxt) => {
            this.setState({rawData: mytxt});
        });
    }

    GetChanges(data){
        this.setState({rawData: data.rawData});
    }

    componentDidMount(){
        this.LoadText(); 
    }

    render() {
        return (
            <div id='main'>
                <ProcessorForm rawData={this.state.rawData} onChange={this.GetChanges}></ProcessorForm>
                <Preview rawData={this.state.rawData}></Preview>
            </div>
        )
    }
}

export default Intial

