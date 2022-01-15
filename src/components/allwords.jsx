import React from "react";
import data from "./data";
import { NavLink } from "react-router-dom";
export default function AllWords() {
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
    <>
      {" "}
      <h1 style={{ visibility: "hidden" }}>#</h1>
      {data.map((dataItem, index) => {
        const url = "/search/" + dataItem.englishExample;
        return (
          <NavLink className="nav-link" to={url}>
            <Note
              key={index}
              id={index}
              title={dataItem.title}
              englishMeaning={dataItem.englishExample}
            />
          </NavLink>
        );
      })}
    </>
  );
}
