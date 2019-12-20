import React from "react";
import "./menu-item.styles.scss";
import { withRouter } from "react-router-dom";

export default withRouter(function MenuItem({
  title,
  imageUrl,
  linkUrl,
  size,
  history,
  match
}) {
  console.log(linkUrl);
  return (
    <div
      className={`menu-item ${size}`}
      onClick={() => history.push(match.url + linkUrl)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="content">
        <div className="title">{title.toUpperCase()}</div>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
});
