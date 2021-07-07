import React from "react";
import { useEffect, useState } from "react";
import Films from "./components/Films";
import Peoples from "./components/Peoples";
const App = () => {
  let [films, setFilms] = useState([]);
  let [peoples, setPeople] = useState([]);
  let [showFilms, setShowFilms] = useState();
  let [showPeople, setShowPeople] = useState();
  
const handleFilmState = () => {
   setShowFilms(false);
   setShowPeople(true);
 }

 const handlePeopleState = () => {
   setShowFilms(true);
   setShowPeople(false);
 };
  
  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((allFilms) => setFilms(allFilms));
    // console.log({ films });
  }, [showFilms]);

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then((res) => res.json())
      .then((allPeople) => setPeople(allPeople));
   
  }, [showPeople]);

   
  if (!showFilms && !showPeople) {
    return (
      <>
        <div className="logo d-flex justify-content-center  col-12">
          <img
            className="border 4px warning"
            src="https://tinyurl.com/y7a82hjm"
            alt=""
          />
        </div>
        <div className="d-flex justify-content-center">
          <button
            onClick={() => handleFilmState(false)}
            type="button"
            className="btn btn-warning m-2"
          >
            Load Films
          </button>
          <button
            onClick={() => handlePeopleState(true)}
            type="button"
            className="btn btn-warning m-2"
          >
            Load People
          </button>
        </div>
        
      </>
    );
  } else if (!showFilms) {
    return (
      <>
        <div className="logo d-flex justify-content-center mb-3 mt-1 col-12">
          <img
            className="border 4px warning"
            src="https://tinyurl.com/y7a82hjm"
            alt=""
          />
        </div>
        <div className="d-flex justify-content-center">
          <button
            onClick={() => handleFilmState(false)}
            type="button"
            className="btn btn-warning m-2"
          >
            Load Films
          </button>

          <button
            onClick={() => handlePeopleState(true)}
            type="button"
            className="btn btn-warning m-2"
          >
            Load People
          </button>
        </div>
        <div className="container d-flex ">
          <div className="row col-10 m-3  justify-content-center ">
            {films.map((film, id) => (
              <Films key={id} film={film} />
            ))}
          </div>
        </div>
      </>
    );
  } else if (!showPeople) {
    return (
      <>
        <div className="logo d-flex justify-content-center mb-3 mt-1 col-12">
          <img
            className="border 4px warning"
            src="https://tinyurl.com/y7a82hjm"
            alt=""
          />
        </div>
        <div className="d-flex justify-content-center">
          <button
            onClick={() => handleFilmState(false)}
            type="button"
            className="btn btn-warning m-2"
          >
            Load Films
          </button>

          <button
            onClick={() => handlePeopleState(true)}
            type="button"
            className="btn btn-warning m-2"
          >
            Load People
          </button>
        </div>
        <div className="container d-flex ">
          <div className="row col-10 m-3  justify-content-center ">
            {peoples.map((people, id) => (
              <Peoples key={id} people={people} />
            ))}
          </div>
        </div>
      </>
    );
  }
};
export default App;

// fetch("https://ghibliapi.herokuapp.com/films")
//   .then((response) => {
//     console.log(response);
//     return response.json();
//   })
//


