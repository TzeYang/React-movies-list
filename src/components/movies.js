import React, {Component} from 'react';
import {getMovies} from '../services/fakeMovieService';
import {getGenres} from '../services/fakeGenreService';
import {paginate} from '../utils/paginate';
import Pagination from './common/pagination';
import NavBar from './common/navBar';
import MoviesTable from './moviesTable';
import '../style.css';
import _ from 'lodash';

class Movies extends Component {
    state = {
      movies: [],
      genres: [],
      pageSize: 4,
      currentPage: 1,
      sortColumn: {path: '', order: ''}
    }
  
  componentDidMount() {
    const genres = [{_id: '', name: 'All Genres'}, ...getGenres()];
    this.setState({movies: getMovies(), genres});
  }
  
  handleDelete = (movie) => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({movies});
  }

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = {...this.state.movies[index]};
    movies[index].like = !movies[index].like;
    this.setState({movies});
  }

  handlePageChange = (page) => {
    this.setState({currentPage: page});
  }

  handleGenreSelect = (genre) => {
    this.setState({selectedGenre: genre, currentPage: 1});
  }

  handleSort = (sortColumn) => {
    this.setState({sortColumn})
  }

  render() {
    const {movies: allMovies,
      pageSize, 
      currentPage, 
      genres, 
      selectedGenre,
      sortColumn
    } = this.state;

    const filtered = selectedGenre && selectedGenre._id
      ? allMovies.filter(m => m.genre._id === selectedGenre._id)
      : allMovies;
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const movies = paginate(sorted, currentPage, pageSize);
    
    return(
      <section>
        <h1>Movies List</h1>
        <NavBar
          items={genres}
          onGenreSelect={this.handleGenreSelect}
          selectedGenre={selectedGenre}
        />
        <MoviesTable 
          movies={movies}
          onLike={this.handleLike}
          onDelete={this.handleDelete}
          onSort={this.handleSort}
          sortColumn={sortColumn}
        />
        <Pagination
          itemsCount={filtered.length}
          pageSize={pageSize}
          onPageChange={this.handlePageChange}
          currentPage={currentPage}
        />
      </section>
    );
  }
}

export default Movies;