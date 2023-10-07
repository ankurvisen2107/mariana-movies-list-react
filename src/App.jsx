import { useEffect, useState, useMemo } from 'react';
import './App.css';
import { getMovies, groupMoviesByDay, getAllGenres, filterByGenreAndTitle} from './utils';
import MultiselectFilter from './components/MultiSelectFilter';
import MovieList from './components/MovieList';
import SearchFilter from './components/SearchFilter';

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [searchText, setSearchText] = useState('');
  useEffect(() => async () => {
    const moviesData = await getMovies();
    setMovies(groupMoviesByDay(moviesData));
  }, []);
  const allGenres = getAllGenres(movies);
  const handleSelectChange = selectedData => setSelectedGenres(selectedData.map(({name}) => name));
  const handleInputChange = inputText => setSearchText(inputText);
  const filteredMovies = useMemo(
    () => filterByGenreAndTitle(movies, selectedGenres, searchText),
    [movies, selectedGenres, searchText]
);

  return (
    <div className="App">
      <div className="filter-row-container">
      <div><MultiselectFilter options={allGenres} onChange={handleSelectChange}/></div>
      <div><SearchFilter onChange={handleInputChange}/></div>
      </div>
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
