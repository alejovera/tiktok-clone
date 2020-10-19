import React, { useRef, useState } from 'react'
import VideoFooter from './VideoFooter'
import VideoSidebar from './VideoSidebar'
import nba from './nba.MP4'
import './Video.css'

function Video({
    channel,
    description,
    song, 
    likes,
    messages,
    shares
}) {
    const [playing, setPlaying] = useState(false)
    const videoRef = useRef(null)
    
    const onVideoPress = () => {
        if(playing){
            videoRef.current.pause()
            setPlaying(false)
        } else {
            videoRef.current.play();
            setPlaying(true)
        }
    }

    return (
        <div className="video">
            <video 
                className="video__player" 
                loop
                onClick={onVideoPress}
                ref={videoRef}
                src={nba}
            >
            </video>

            {/* Footer de Video */}
            <VideoFooter channel={channel} description={description} song={song} />
            {/* Sidebar de Video */}
            <VideoSidebar likes={likes} shares={shares} messages={messages} />
        </div>
    );
}

export default Video
