import React from "react";
import "./VideoRow.css";

function VideoRow({
  views,
  subs,
  description,
  timestamp,
  channel,
  title,
  image,
  vid,
}) {
  return (
    <div className="videoRow">
      <img
        src={image}
        onMouseOver={(e) => (e.currentTarget.src = vid)}
        onMouseOut={(e) => (e.currentTarget.src = image)}
        alt=""
      />
      <div className="videoRow__text">
        <h3>{title}</h3>
        <p className="videoRow__headline">
          {channel} •{" "}
          <span className="video_Row__subs">
            <span className="videoRow__subsNumber">{subs}</span> Subscribers
          </span>{" "}
          {views} views • {timestamp}
        </p>
        <p className="videoRow__description">{description}</p>
      </div>
    </div>
  );
}

export default VideoRow;
