import React from "react";
import ClampLines from "react-clamp-lines";
import "../styles/VideoCard.scss";
import { formatAgo } from "../util/date";

export default function VideoCard({ data }) {
  const { id, snippet } = data;
  const { title, description, publishedAt, thumbnails, channelTitle } = snippet;
  return (
    <li>
      <div className="item-img">
        <img src={thumbnails.medium.url} alt="thumbnail" />
      </div>
      <div className="item-text">
        <ClampLines
          text={title}
          lines={2}
          innerElement={"h2"}
          buttons={false}
        />
        <span>{channelTitle}</span>
        <p>{formatAgo(publishedAt, "ko")}</p>
      </div>
    </li>
  );
}
