import React from 'react';

const Like = ({ movie, onLike }) => {
  return (
    <span
      className={`fa fa-heart${!movie.liked ? '-o' : ''}`}
      style={{ cursor: 'pointer' }}
      onClick={() => onLike(movie)}
    />
  );
};

export default Like;
