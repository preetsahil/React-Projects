import React, { useEffect, useState } from "react";
import Video from "./Video";
import TopComponent from "./TopComponent";
function Videos() {
  const [videoList, setVideoList] = useState([]);

  const apiUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=US&key=[YOUR_API_KEY]`;

  async function fetchData() {
    try {
      const response = await fetch(apiUrl);
      const jsonData = await response.json();
      setVideoList(jsonData.items);
    } catch (e) {
      console.log(e + " error occured");
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  const mystyle = {
    display: "grid",
    width: "90%",
    gridTemplateColumns: "repeat(4,24%)",
    justifyContent: "space-between",
    rowGap: "20px",
    marginInline: "auto",
    marginBlock: "5px",
  };
  return (
    <div>
      <TopComponent />
      <div style={mystyle}>
        {videoList.map((video) => {
          return <Video key={video.id} video={video} />;
        })}
      </div>
    </div>
  );
}

export default Videos;
