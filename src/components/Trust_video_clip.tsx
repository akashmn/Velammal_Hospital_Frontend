import React from 'react';

const VideoComponent: React.FC = () => {
  return (
    <div className="video-container  w-full flex items-center justify-center mt-10 p-3">
      <video width="600" autoPlay loop muted className='w-fit lg:w-1/2 rounded lg:rounded-xl'>
        <source src="https://firebasestorage.googleapis.com/v0/b/qmark-website-bk.appspot.com/o/trust_video_clip.mp4?alt=media&token=ad2307d6-a386-406d-94fb-49aab8601d47" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoComponent;
