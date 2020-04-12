import React from 'react';
import {Grid} from '@material-ui/core';
import VideoItem from './VideoItem';


const VideoList = (props) => {
    const ListOfVideos = props.videos.map((video, id) => <VideoItem onVideoSelect={props.onVideoSelect}  key={id} video={video}/>)

    return (
        <Grid container spacing={10}>
            {ListOfVideos}
        </Grid>
    );
}

export default VideoList;