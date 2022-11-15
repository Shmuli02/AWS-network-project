import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import VideoUploading from '../components/VideoUploading';
import uploadService from '../services/uploads';


const Home = () => {
  const [videos, setVideos] = useState([])

  async function getVideos() {
    const videos = await uploadService.getAll()
    setVideos(videos)
  }

  useEffect( () => {
    getVideos()
  },[])
  console.log(videos)
  return (
    <div className="Home">
      <VideoUploading />
      {videos.map(video =>
        <div>
          <ReactPlayer url={video.url} controls="True" />
        </div>
      )}
      
    </div>
    )
  }

export default Home