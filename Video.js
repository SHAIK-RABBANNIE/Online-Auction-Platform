import React from 'react';
import { useNavigate } from 'react-router-dom';

const VideoPage = () => {
    const navigate = useNavigate();

    // Function to handle the end of the video
    const handleVideoEnd = () => {
        navigate('/home'); // Redirect to the home page after the video ends
    };

    return (
        <div className="video-page-container">
            <video
                width="100%"
                height="100%"
                controls={false}  // Remove controls
                autoPlay
                onEnded={handleVideoEnd}
            >
                <source src="https://cdn.pixabay.com/video/2021/07/07/80533-572349550_tiny.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoPage;

