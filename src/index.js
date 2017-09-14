// import _ from 'lodash';
import './style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
import YTSearch from 'youtube-api-search'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {videos : [], selectedVideo : null};
  }

  videoSearch(term){
    YTSearch ({key : 'AIzaSyAUJS_na-gmfK1dC1wolcWRE6tJCXrgr0A', term: term}, (videos) => {
      this.setState({videos : videos, selectedVideo : videos[0]});
    });
  }

  getAPIKey(){
    return "AIzaSyAUJS_na-gmfK1dC1wolcWRE6tJCXrgr0A";
  }

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})} videos={this.state.videos}/>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));