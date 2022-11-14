import React from 'react'
import ReactPlayer from 'react-player'
import VideoUploading from '../components/VideoUploading';


const Home = () => (
  <div className="Home">
    <ReactPlayer url='https://hello-tomi.s3.eu-central-1.amazonaws.com/IMG_7318.MOV' controls="True" />
    <VideoUploading />
  </div>
)

export default Home