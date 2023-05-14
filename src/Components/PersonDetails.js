import React from "react";
const PersonDetails = ({ person }) => {
  return (
    <div className="card">
      <img src={person.picture} alt="Person" />
      <div className="card-body">
        <h5 className="card-title">{person.name}</h5>
        <p className="card-text">Gender: {person.gender}</p>
        <p className="card-text">Location: {person.location.city}, {person.location.country}</p>
        <p className="card-text">Email: {person.email}</p>
        <p className="card-text">Phone: {person.phone}</p>
      </div>
    </div>
  );
};

export default PersonDetails;
