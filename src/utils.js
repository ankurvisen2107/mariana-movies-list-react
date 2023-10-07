export const getMovies = async () => {
  const movieUrl = "http://localhost:8000/movies/";
  const response = await fetch(movieUrl);
  return await response.json();
};

export const groupMoviesByDay = (moviesData) => {
  const normalizedMoviesData = [];
  [...moviesData].forEach(({ date, movies }) => {
    const movieDate = new Date(date);
    const movieDay = movieDate.getDate();
    const movieMonth = movieDate.toLocaleString("default", { month: "short" });
    movies.forEach((movie) => {
      normalizedMoviesData.push({
        ...movie,
        screeningDay: movieDay,
        screeningMon: movieMonth,
      });
    });
  });
  return normalizedMoviesData;
};

export const getAllGenres = moviesData => {
  const genreNames = moviesData.reduce((acc, { genre }) => {
    genre.forEach((gen) => {
      if (!acc.includes(gen)) {
        acc.push(gen);
      }
    });
    return acc;
  }, []);
  const genreData = genreNames.map((genre, index) => {
    return { name: genre, id: index + 1 };
  });
  return genreData;
};

export const filterByGenreAndTitle = (movies, selectedGenres, searchText) => {
  let filteredMovies = [...movies];
  if(selectedGenres.length){
    filteredMovies = filteredMovies.filter(({genre}) => {
      return selectedGenres.some(selectedGenre => genre.includes(selectedGenre));
    })
  }
  if(searchText){
    filteredMovies = filteredMovies.filter(({title}) => title.toLowerCase().startsWith(searchText.toLowerCase()));
  }
  return filteredMovies;
}

