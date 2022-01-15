import React from "react";

function Note(props) {
  return (
    <div className="home-word-box">
      <h1 className="word-title">{props.title}</h1>

      <p className="word-detail">
        <i className=" word-icon fas fa-long-arrow-alt-right"></i>
        {props.pos}{" "}
      </p>
      <p className="word-detail">
        <i className=" word-icon fas fa-long-arrow-alt-right"></i>
        {props.englishMeaning}{" "}
      </p>
      <p className="word-detail">
        <i className=" word-icon fab fa-canadian-maple-leaf"></i>
        {props.kashmiriMeaning}{" "}
      </p>
      <p className="word-detail">
        <i className=" word-icon fas fa-long-arrow-alt-right"></i>
        {props.englishExample}{" "}
      </p>
      <p className="word-detail">
        <i className=" word-icon fab fa-canadian-maple-leaf"></i>
        {props.kashmiriExample}{" "}
      </p>
    </div>
  );
}
export default Note;
