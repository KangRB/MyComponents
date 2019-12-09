import React, { Component } from 'react';

export default class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    //
  }

  render() {
    return (
      <div>
        <h1>DEMO</h1>
        <h2>{this.props.title}</h2>
      </div>
    );
  }
}
