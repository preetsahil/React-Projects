import React from "react";

function Video({ video }) {
  let publishedAt = video.snippet.publishedAt;
  const date = publishedAt.substring(0, 10);
  let fullduration = video.contentDetails.duration;
  const duration = fullduration.substring(2, 8);
  return (
    <div>
      <img
        style={{ borderRadius: "20px" }}
        src={video.snippet.thumbnails.medium.url}
        alt=""
      />
      <div style={{ position: "relative" }}>
        <p
          style={{
            textAlign: "right",
            position: "absolute",
            right: "15px",
            bottom: "-3px",
            backgroundColor: "black",
            color: "white",
            fontSize: "bold",
            padding: "4px",
            borderRadius: "30px",
          }}
        >
          {duration}
        </p>
      </div>
      <h3>{video.snippet.title}</h3>
      <div style={{ display: "flex", gap: "5px" }}>
        <div style={{ color: "#555" }}>
          {video.statistics.viewCount / 1000}K views
        </div>
        <div style={{ color: "#555" }}>{date}</div>
      </div>
    </div>
  );
}
export default Video;
