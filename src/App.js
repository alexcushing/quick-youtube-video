import React, {Component} from 'react';
import ReactPlayer from 'react-player'
import FontAwesome from 'react-fontawesome'

class App extends Component {
  state = {
    current: "",
    lockedin: "",
    search: false,
    theme: "Main"
  };

  onChange = (e) => {
    this.setState({current: e.target.value});
  }

  submit = (e) => {
    e.preventDefault();
    this.setState({search: true, lockedin: this.state.current});
  }

  toggleTheme = () => {
    if (this.state.theme === "Main") {
      this.setState({theme: "Alt"});
    } else {
      this.setState({theme: "Main"});
    }
  }

  render() {
    return (
      <div className={this.state.theme}>
        <button className='lighten' type="submit" onClick={this.toggleTheme}>
          {this.state.theme === 'Main'
            ? <FontAwesome name="sun-o"/>
            : <FontAwesome name="moon-o"/>
}
        </button>
        <div className="App">
          <form action="submit" onSubmit={this.submit}>
            <input
              type="text"
              onChange={this.onChange}
              value={this.state.current}
              className="input"
              placeholder="video URL"/>
            <button type="submit" onClick={this.submit}>
              <FontAwesome name="search"/>
            </button>
          </form>
        </div>
        {this.state.search
          ? <div className="video">
              <ReactPlayer url={this.state.lockedin} frameborder="0" controls="true"/>
            </div>
          : ''
}
      </div>
    );
  }
}

export default App;
