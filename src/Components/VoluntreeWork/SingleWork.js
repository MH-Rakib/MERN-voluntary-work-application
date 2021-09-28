import React from "react";
import "./SingleWork.css";
import { Link } from "react-router-dom";

const SingleWork = ({ work }) => {
  return (
    <Link to={`/volunteer/${work.id}`} style={{ TextDecoration: "none" }}>
      <div>
        <img src={work.image} className="singleWork-image" alt="" />
        <h3 className="singleWork-name">{work.name} </h3>
      </div>
    </Link>
  );
};

export default SingleWork;
