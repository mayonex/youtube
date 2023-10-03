import React, { useEffect, useState } from "react";
import { BsYoutube } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/SearchHeader.scss";
export default function SearchHeader() {
  const navigate = useNavigate();
  const { keyword } = useParams();
  const [text, setText] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/videos/${text}`);
  };
  useEffect(() => {
    setText(keyword || "");
  }, [keyword]);
  const handleLogoClick = (event) => {
    navigate(`/`);
  };

  return (
    <header className="search">
      <div onClick={handleLogoClick}>
        <BsYoutube className="logo-icon" />
        <h1>Youtube</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          placeholder="Search..."
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">
          <CiSearch />
        </button>
      </form>
    </header>
  );
}
