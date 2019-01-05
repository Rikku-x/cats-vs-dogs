import React, { Component } from 'react';
import logo from './cat.png';
import logo2 from './dog.png';
import './App.css';

class App extends Component {
  nextVideoCat() {
    let url = "https://www.googleapis.com/youtube/v3/search?maxResults=25&q=cats&part=snippet&key=AIzaSyA6Rl6pARvhfnZ-HN8YLzETjxujdcTov9g"
    let self = this;

    fetch(url).then((response) => {
      return response.json();
    }).then((data) => {
      let randomID = Math.floor(Math.random() * 25);

      let videoId = data.items[randomID].id.videoId;
      let videoUrl = "https://www.youtube.com/embed/" + videoId + "?autoplay=1";
      self.setState({ videoUrl: videoUrl });
    })
  }

  nextVideoDog() {
    let url = "https://www.googleapis.com/youtube/v3/search?maxResults=25&q=dogs&part=snippet&key=AIzaSyA6Rl6pARvhfnZ-HN8YLzETjxujdcTov9g"
    let self = this;

    fetch(url).then((response) => {
      return response.json();
    }).then((data) => {
      let randomID = Math.floor(Math.random() * 25);

      let videoId = data.items[randomID].id.videoId;
      let videoUrl = "https://www.youtube.com/embed/" + videoId + "?autoplay=1";
      self.setState({ videoUrl: videoUrl });
    })

  }

  constructor(props) {
    super(props);
    this.nextVideoCat = this.nextVideoCat.bind(this);
    this.nextVideoDog = this.nextVideoDog.bind(this);
    this.state = { isToggleOn: true, videoUrl: "https://www.youtube.com/embed/JiyMaWOZGoA?autoplay=1" };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="logos">
            <ChangeButton onClick={this.nextVideoDog} />
            <img onClick={this.nextVideoCat} src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="Player">
            <iframe
              width="560"
              height="315"
              src={this.state.videoUrl}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>
          </div>
        </header>
      </div>
    );
  }
}

class ChangeButton extends Component {

  render() {
    return (
      <img onClick={this.props.onClick} src={logo2} className="Dog-logo" />
    );
  }
}

export default App;
