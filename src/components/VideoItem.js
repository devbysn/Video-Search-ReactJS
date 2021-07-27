import "./VideoItem.css";
import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  console.log(video.snippet.channelTitle);
  return (
    <div
      onClick={() => onVideoSelect(video)}
      className="video-item item ui segment inverted"
    >
      <img
        alt={video.snippet.title}
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content color">
        <div className="header color">{video.snippet.title}</div>
        <div className="Subheader channel">{video.snippet.channelTitle}</div>
      </div>
    </div>
  );
};

export default VideoItem;
