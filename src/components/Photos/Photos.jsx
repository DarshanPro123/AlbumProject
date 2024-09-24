import React from "react";
import Datas from "../Data";
import "./Photos.css";
import { useParams } from "react-router-dom";

const Photos = () => {
  const { id } = useParams();
  const data = Datas.find((data) => data.id === parseInt(id));

  if (!data) {
    return <h1>Album not found</h1>;
  }
  return (
    <>
      <div className="imgs">
        <h1>{data.description}</h1>
        <hr />
        <div className="images">
          {data.images.map((img, index) => {
            return (
              <div key={index} className="img">
                <img src={img} alt="mytitle" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Photos;
