import React from "react";
import { Link } from "react-router-dom";
import Datas from "../Data";
import "./Albums.css";

const Albums = () => {
  return (
    <>
      <div className="albums">
        {Datas.map((data, index) => {
          return (
            <Link to={`/album/${data.id}`} key={index} className="card-link">
              <div className="card">
                <img src={data.mainimg} alt="mytitle" />
                <p>{data.title}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Albums;
