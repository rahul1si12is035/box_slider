import React, { Component } from 'react';
import './App.css';
import Box from './components/Box/Box';
import Slider from './components/Slider/Slider';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: 40,
      value2: 40,
      value3: 40,
      value4: 40
    }

  };

  componentWillMount() {

  };

  componentDidMount() {

  };

  // --------------------------------------------------------- helper function

  // --------------------------------------------------------- Server calls

  // --------------------------------------------------------- listeners

  handleChangeSlider = (event) => {
    this.setState({
      [event.target.name]: parseInt(event.target.value) < 25 ? "25" : event.target.value
    });
  };

  // --------------------------------------------------------- views

  // --------------------------------------------------------- render
  render() {
    return (
      <div >
        <div>
          <Box width={this.state.value1} />
          <Slider
            value={this.state.value1}
            name={"value1"}
            handleChangeSlider={this.handleChangeSlider}
          />
        </div>
        <div>
          <Box width={this.state.value2} />
          <Slider
            value={this.state.value2}
            name={"value2"}
            handleChangeSlider={this.handleChangeSlider}
          />
        </div>
        <div>
          <Box width={this.state.value3} />
          <Slider
            value={this.state.value3}
            name={"value3"}
            handleChangeSlider={this.handleChangeSlider}
          />
        </div>
        <div>
          <Box width={this.state.value4} />
          <Slider
            value={this.state.value4}
            name={"value4"}
            handleChangeSlider={this.handleChangeSlider}
          />
        </div>
      </div>
    );
  }

}

export default App;
