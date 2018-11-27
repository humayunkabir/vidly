import React, { Component } from 'react';

class Movie extends Component {
  state = {};
  render() {
    const { movieId } = this.props.match.params;
    return (
      <div>
        <h1>Movie from {movieId}</h1>
        <button
          className="btn btn-primary"
          onClick={() => this.props.history.push('/movies')}
        >
          Save
        </button>
      </div>
    );
  }
}

export default Movie;
