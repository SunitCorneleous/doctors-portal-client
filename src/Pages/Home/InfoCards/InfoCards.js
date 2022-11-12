import React from "react";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";

const InfoCards = () => {
  const cards = [
    {
      id: 1,
      title: "Opening Hours",
      details: "Open at 10 am in the morning and close at 5pm",
      icon: clock,
      bgColor: "bg-gradient-to-r from-secondary to-primary",
    },
    {
      id: 2,
      title: "Visit our location",
      details: "Brooklyn, NY 10036, United States",
      icon: marker,
      bgColor: "bg-accent",
    },
    {
      id: 3,
      title: "Contact us now",
      details: "+000 123 456789",
      icon: phone,
      bgColor: "bg-gradient-to-r from-secondary to-primary",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10">
      {cards.map(card => (
        <InfoCard key={card.id} card={card}></InfoCard>
      ))}
    </div>
  );
};

export default InfoCards;
