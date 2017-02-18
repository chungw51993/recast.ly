class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      current: exampleVideoData[0]
    };
  }

//Add click handler here

  currentVideo(event) {
    var target = event.target.textContent;
    for (var i = 0; i < exampleVideoData.length; i++) {
      if (exampleVideoData[i].snippet.title === target) {
        this.setState({
          current: exampleVideoData[i]
        });
      }
    }
  }

  render() {
    return (
    <div>
      <Nav />
      <div className="col-md-7">
        <VideoPlayer video={this.state.current}/>
      </div>
      <div className="col-md-5">
        <VideoList selected={this.currentVideo.bind(this)} videos={exampleVideoData}/>
      </div>
    </div>
    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

