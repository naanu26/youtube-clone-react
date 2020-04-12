import React, {Component} from 'react';
import {Grid} from '@material-ui/core';
import youtube from './api/youtube';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';
import Header from './components/Header';
import './App.css';
class App extends Component {

    state= {
        videos: [],
        selectedVideo: null
    }

    componentDidMount () {
        this.handleSubmit('BABY JUSTIN BEIBER');
    }

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video});
    }

    handleSubmit = async (searchTerm) => {
        const response = await youtube.get('search', {
            params: {
                part: 'snippet',    //will return the video
                maxResults: 5,
                key: 'AIzaSyDBZVNBw22JmnrTUwZVrMN4uxCcCXlbPcc',
                q: searchTerm
            }
        
    });

    this.setState({videos: response.data.items, selectedVideo: response.data.items[0] });

    }

    render() {
        return(
            <Grid justify="center" container spacing={10}>
                <Grid xs={12}>
                    <Header />
                </Grid>
                <Grid item  xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit={this.handleSubmit}/>
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetail video={this.state.selectedVideo} />
                        </Grid>
                        <Grid item xs={4}>
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default App;