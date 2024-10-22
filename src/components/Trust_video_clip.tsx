import React from 'react';

const VideoComponent: React.FC = () => {
  return (
    <div className="video-container">
      <video width="600" autoPlay loop muted>
        <source src="../public/trust_video_clip.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoComponent;
