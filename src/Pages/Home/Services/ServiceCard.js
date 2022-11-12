import React from "react";

const ServiceCard = ({ service }) => {
  const { title, description, icon } = service;
  return (
    <div className="p-8 rounded shadow-md text-center flex flex-col items-center mx-5">
      <img src={icon} alt={title} className="w-24" />
      <h2 className="font-semibold text-xl mt-8">{title}</h2>
      <p className="font-normal text-base mt-4">{description}</p>
    </div>
  );
};

export default ServiceCard;
