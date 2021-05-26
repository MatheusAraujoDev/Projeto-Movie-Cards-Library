// implement MovieCard component here
import React from 'react';
import Data from '../data'

class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, storyline, imagePath, rating } } = this.props;
    
    return (
      <div>
        <img src={imagePath} alt="Movie"></img>
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
      </div>
    );
  }
}

export default MovieCard;