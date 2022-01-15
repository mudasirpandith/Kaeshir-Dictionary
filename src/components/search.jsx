import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import data from "./data";
export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  function Note(props) {
    return (
      <div className="home-word-box">
        <h1
          className="word-title"
          style={{ textAlign: "left", paddingLeft: "30px" }}
        >
          {props.title}
        </h1>

        <p className="word-detail">
          <i className=" word-icon fas fa-long-arrow-alt-right"></i>
          {props.englishMeaning}{" "}
        </p>
      </div>
    );
  }
  return (
    <div className="search">
      <h1 style={{ visibility: "hidden" }}>#</h1>
      <center>
        <input
          autoFocus="true"
          className="searchbar"
          type="text"
          placeholder="search..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </center>

      {data
        .filter((val) => {
          if (searchTerm === "") {
            return (val = 0);
          } else if (
            val.title.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          } else {
            return 0;
          }
        })
        .map((val, index) => {
          return (
            <div>
              {" "}
              <NavLink
                className="nav-link"
                style={{ textDecoration: "none" }}
                to={val.englishExample}
              >
                <Note
                  key={index}
                  id={index}
                  title={val.title}
                  englishMeaning={val.englishMeaning}
                />
              </NavLink>
            </div>
          );
        })}
    </div>
  );
}
