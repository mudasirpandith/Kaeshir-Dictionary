import React from "react";
import { useParams } from "react-router-dom";
import data from "./data";

import image1 from "../images/image1.png";

import bottomImage from "../images/bottomimage.jpg";
import Note from "./createbox";
export default function Word() {
  const { word } = useParams();
  return (
    <>
      {" "}
      <h1 style={{ visibility: "hidden" }}>#</h1>
      {data
        .filter((val) => {
          if (val.englishExample.toLowerCase().includes(word.toLowerCase())) {
            return val;
          } else {
            return 0;
          }
        })
        .map((val, index) => {
          return (
            <div>
              <center>
                <img src={image1} alt="image1" />
              </center>
              <hr />
              <Note
                key={index}
                id={index}
                title={val.title}
                pos={val.pos}
                englishMeaning={val.englishExample}
                kashmiriMeaning={val.kashmiriExample}
                englishExample={val.englishExample}
                kashmiriExample={val.kashmiriExample}
              />
              <center>
                <img src={bottomImage} alt="image1" />
              </center>
            </div>
          );
        })}
    </>
  );
}
