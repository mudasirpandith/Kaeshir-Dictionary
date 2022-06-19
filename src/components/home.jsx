import React, { useState } from "react";
import data from "./data";
import homeImage from "../images/homeImage.jpg";
import { NavLink } from "react-router-dom";
import Note from "./createbox";
export default function Home() {
  const rindex = Math.floor(Math.random() * 3000);
  const [index, setIndex] = useState(rindex);
  function changeIndex() {
    const nindex = Math.floor(Math.random() * 3000);

    setIndex(nindex);
  }
  const url = "/search/" + data[index].englishExample;
  return (
    <>
      <h1 style={{ visibility: "hidden" }}>#</h1>
      <NavLink className="nav-link" to="/search">
        <p className="button-link">
          <i class="fas fa-search"></i>
        </p>
      </NavLink>
      <div>
        <NavLink className="nav-link" to={url}>
          <div>
            <center>
              <img src={homeImage} alt="d" />
            </center>

            <hr />
            <Note
              key={index}
              id={index}
              title={data[index].title}
              pos={data[index].pos}
              englishMeaning={data[index].englishMeaning}
              kashmiriMeaning={data[index].kashmiriMeaning}
              englishExample={data[index].englishExample}
              kashmiriExample={data[index].kashmiriExample}
            />
          </div>{" "}
        </NavLink>
        <p className="home-index-change-btn" onClick={changeIndex}>
          <i class="fas fa-redo-alt"></i>
        </p>{" "}
      </div>{" "}
    </>
  );
}
