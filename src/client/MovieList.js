import React, { Component } from 'react';
// import the Link component to handle React Router
import { Link } from 'react-router-dom';
import Movie from './Movie';
// Axios is a lightweight HTTP client based on the $http service within Angular.js
// Axios provides support for request and response interceptors, transformers and auto-conversion to JSON
// Use "npm install axios" command to install
import axios from 'axios';
import './app.css';
// import stylesheet 
// MAKE SURE TO INSTALL USING npm install bulma
import 'bulma/css/bulma.css';

// this component will handle all elements in the Movies array
class MovieList extends Component {
  constructor(props) {
    super(props);
    // store the Movies array in the state
    this.state = { movies: [] };

    // this binding is necessary to make `this` work in the callback
    // generally, if you refer to a method without () after it, such as onClick={this.handleClick}, you should bind that method
    this.updateMovies = this.updateMovies.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  // fetch all Movie data from the server when the component mounts
  componentDidMount() {
    this.updateMovies();
  }

  //
  updateMovies() {
    // get the Movies API using axios GET request to the server
    axios.get('movies')
      .then(response => {
        // store the response in the state
        this.setState({ movies: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleDelete(movieId) {
    // make a DELETE request to the server which will handle the removal of the Movie with the specific MovieId
    axios
      .delete('movies', {
        data: {
          id: movieId
        }
      })
      .then(response => {
        // if the deletion was successful then re-render the list of Movies
        this.updateMovies();
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    // produce a Movie component for each Movie object
    const MovieList = this.state.movies.map(u => (
      // map through each element in the array and set to the value received from the server
      <Movie
        key={u._id}
        id={u._id}
        title={u.title}
        year={u.year}
        director={u.director}
        american={u.american}
        poster={u.poster}
        // you must include the handleDelete method to use in child components
        handleDelete={this.handleDelete}
      />
    ));

    // return the list of Movies
    return (
      <div className="is-fluid">
        {/* Navigation bar*/}
        <nav className="navbar">
          <h1 className="navbar-item title is-1 has-text-info is-uppercase has-text-weight-bold has-text-centered">List of Movies</h1>
          {/* when this button is pressed, CreateMovie component will be rendered by using React Router*/}
          <Link to={'/create-movie'} className="navbar-item navbar-end">
            <button className="button is-link is-uppercase has-text-weight-bold" type="button">Add a new movie</button>
          </Link>
        </nav>
        <hr />
        {/* Movie LIST*/}
        <div>
          <div className="columns is-multiline">
            {MovieList}
          </div>
        </div>

      </div>

    );
  }
}

export default MovieList;
