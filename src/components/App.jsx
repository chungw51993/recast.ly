class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      current: exampleVideoData[0]
    };
  }

  getVideos(event) {
    var options = {
      key: YOUTUBE_API_KEY,
      query: event,
      max: 5
    }
    searchYouTube(options, (videos) => {
      this.setState({
        videos: videos,
        current: videos[0]
      })
    });
  }

  currentVideo(event) {
    var target = event.target.textContent;
    for (var i = 0; i < videos.length; i++) {
      if (this.state.videos.snippet.title === target) {
        this.setState({
          current: videos[i]
        });
      }
    }
  }

  render() {
    return (
    <div>
      <Nav handleSearch={this.getVideos.bind(this)} />
      <div className="col-md-7">
        <VideoPlayer video={this.state.current}/>
      </div>
      <div className="col-md-5">
        <VideoList selected={this.currentVideo.bind(this)} videos={this.state.videos}/>
      </div>
    </div>
    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

