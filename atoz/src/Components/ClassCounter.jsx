import React, { Component } from 'react'

export default class ClassCounter extends Component {
    constructor(props){
        super(props);
        this.state = {
            count : 0
        }
        this.inc = this.inc.bind(this)
        this.dec = this.dec.bind(this)
    }
    inc(){
        this.setState({count: this.state.count + 1})
      }
    
    dec(){
        this.setState({count: this.state.count - 1})
      }

  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={this.inc}>Инкремент</button>
        <button onClick={this.dec}>Декремент</button>
      </div>
    )
  }
}
