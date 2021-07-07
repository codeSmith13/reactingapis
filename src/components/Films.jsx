import React from "react";

let Films =({ film }) =>{
    return (
      <>
       
            <div key={film.id} className="card col-4 g-3  ">
              <div className="card-body ">
                <h6 className="card-title text-center">
                  {film.original_title}
                </h6>
                <h5 className="card-title text-center">{film.title}</h5>
                <p className="card-text"> {film.description}</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Director: {film.director}</li>
                <li className="list-group-item">Producer: {film.producer}</li>
                <li className="list-group-item">
                  Release date: {film.release_date}
                </li>
                <li className="list-group-item">
                  Rotten Tomatoes Score: {film.rt_score}%
                </li>
              </ul>
              <div className="card-body">
                <a href={film.url} className="card-link">
                  Film Api
                </a>
                <a href={film.people} className="card-link">
                  People Api
                </a>
              </div>
            </div>
        
      </>
    );
}

export default Films