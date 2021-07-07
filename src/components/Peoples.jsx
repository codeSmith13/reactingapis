import React from "react";

let Peoples = ({ people }) => {
  return (
    <>
      <div key={people.id} className="card col-4 g-3  ">
        <div className="card-body">
          <h5 className="card-title text-center">{people.name}</h5>
          
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Gender: {people.gender}</li>
          <li className="list-group-item"> Age: {people.age}</li>
          <li className="list-group-item">Eye Color: {people.eye_color}</li>
          <li className="list-group-item">Hair Color: {people.hair_color}</li>
        </ul>
        <div className="card-body">
          <a href={people.url} className="card-link">
            People Api
          </a>
          <a href={people.films} className="card-link">
            People Films Api
          </a>
        </div>
      </div>
    </>
  );
};

export default Peoples;
