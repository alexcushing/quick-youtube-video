import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import './App.css';

class App extends Component {
  state = {current : "", search: false};

    onChange = (e) => {
      this.setState({current: e.target.value});
    }

    submit = (e) => {
      e.preventDefault();
      this.setState({search: true});
    }

  render() {
    return (
      <div className="App">
        <input
          type="text"
          onChange={this.onChange}
          value={this.state.current}
          className="input"
          placeholder="video URL"
        />
        <button type="submit" onClick={this.submit}> search </button>
        {
          this.state.search ? 
          <div>
            <ReactPlayer url={this.state.current} frameborder="0" className="video" controls="true" />
          </div>
          :
          ''
        }
      </div>
    );
  }
}

export default App;
