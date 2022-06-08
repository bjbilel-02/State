
import React, { Component } from 'react'
import Counter from './components/Counter';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={show:false}
  }
  handelclick=()=>this.setState({show:!this.state.show})
  render() {
    return (
      <div >
        <h1>State Checkpoint</h1>
        <button onClick={this.handelclick}>show/hide</button>
        {this.state.show?<Counter/>:null}
      </div>
    );
  }
}

