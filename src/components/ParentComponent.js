import React, { Component } from 'react';
import {Button} from 'reactstrap';

export default class ParentComponent extends Component {
  constructor(props){
    super(props);

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit= this.handleSubmit.bind(this);
    //we are really in a *bind* here.... :)
    //fix it...

    //state lives here
    this.state = {
      whatToSay: "",
      whatWasSaid: "",
    }
  }

  handleInput(e) {
    e.preventDefault();
    //set the state on input change
    this.setState({whatToSay: e.target.value});

    // clear ou
  }
  handleSubmit(e){
    e.preventDefault();
    //check console to see if firing
    console.log("fired");
    //set the state for props and for value (prevents output from appearing when typing)
    this.setState({whatToSay: "", whatWasSaid: this.state.whatToSay});
    //clear our input by resetting state


  }
  render() {
    return (
      <div>
      <p>Smart Component: I have a function, but something isn't working? I also need to pass that function to the ChildComponent.</p>
      <div>
          <input onChange={this.handleInput} value={this.state.whatToSay} type="text" placeholder="Say It, Don't Spray It!" />
        </div>
        <div>
          <ChildComponent onClick={this.handleSubmit}/>
          <DisplayComponent sayWhat={this.state.whatWasSaid} />
        </div>
      </div>
    );
  }
}


class ChildComponent extends Component {
  render() {
    return (
      <div>Dumb Component receiving Props
        <div>
          <input type="submit" onClick={this.props.onClick}/>
        </div>
      </div>
    );
  }
}

class DisplayComponent extends Component {
  render() {
    return (
      <div>{this.props.sayWhat}</div>
    );
  }
}
