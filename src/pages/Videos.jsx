import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import SearchHeader from "../components/SearchHeader";
import VideoCard from "../components/VideoCard";
import "../styles/Videos.scss";
export default function Videos() {
  const { keyword } = useParams();
  const videoType = keyword ? "popular" : "search";
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", keyword], async () => {
    return fetch(`/videos/${keyword ? "search" : "popular"}.json`)
      .then((res) => res.json())
      .then((json) => json.items);
  });
  return (
    <div className="page">
      <div className="page-area">
        <SearchHeader />
        <section className="video-area">
          <ul className="videos">
            {!isLoading &&
              videos.map((data) => <VideoCard key={data.id} data={data} />)}
          </ul>
        </section>
      </div>
    </div>
  );
}
