import React from "react";

function TopComponent() {
  const uploaded = {
    padding: "5px",
    backgroundColor: "black",
    color: "white",
    fontSize: "1.2rem",
    borderRadius: "5px",
  };
  const popular = {
    backgroundColor: "#ccc",
    borderRadius: "5px",
    padding: "5px 7px 7px 5px",
  };

  return (
    <div
      style={{
        display: "flex",
        width: "30%",
        gap: "5px",
        margin: "50px 50px 0px 80px",
      }}
    >
      <div style={uploaded}>Recently uploded</div>
      <div style={popular}>Popular</div>
    </div>
  );
}

export default TopComponent;
