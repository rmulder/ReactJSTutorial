import React from 'react';
import * as Babel from 'babel-standalone';

export default class BabelTransformer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputJSX: '/* Write some awesome JSX! */',
      outputJS: '',
      error: ''
    }
    this.transformJSX = this.transformJSX.bind(this);
  }
  transformJSX(event) {
    let code = event.target.value;
    try {
      this.setState({
        outputJS: Babel.transform(code, { presets: ['es2015', 'react'] }).code,
        error: ''
      });
    }
    catch(error) {
      this.setState({
        error: error.message
      });
    }
  }
  render() {
    return (
      <div>
        <div className="container">
          <textarea id="input" onChange={this.transformJSX} defaultValue={this.state.inputJSX}></textarea>
          <div id="output" ><pre>{this.state.outputJS}</pre></div>
        </div>
        <footer>{this.state.error}</footer>
      </div>
    )
  }
}
