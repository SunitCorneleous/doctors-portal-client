import React from "react";

const InfoCard = ({ card }) => {
  const { title, details, icon, bgColor } = card;
  return (
    <div
      className={`card card-side ${bgColor} shadow-xl text-white p-6 mx-3 md:mx-0`}
    >
      <figure>
        <img src={icon} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{details}</p>
      </div>
    </div>
  );
};

export default InfoCard;
