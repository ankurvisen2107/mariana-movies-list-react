import React from "react";
import ListHeader from "./ListHeader";

const MovieList = ({ movies }) => {
  return (
    <>
      <ListHeader />
      {!!movies &&
        movies.map(
          ({
            screeningDay,
            screeningMon,
            title,
            poster,
            genre,
            imdb_rating,
            year,
            meta_score,
            runtime,
            imdb_id,
          }) => (
            <div className="row-container" key={imdb_id}>
              <div >{screeningMon}</div>
              <div className="font-size-date">{screeningDay}</div>
              <img src={poster} width={90} height={90} alt={title} />
              <div className="item-name">{title}</div>
              <div>{genre.join(" | ")}</div>
              <div>{imdb_rating}</div>
              <div>{year}</div>
              <div>{meta_score==='N/A' ? meta_score : `${meta_score}%`}</div>
              <div>{runtime}</div>
            </div>
          )
        )}
    </>
  );
};

export default MovieList;
