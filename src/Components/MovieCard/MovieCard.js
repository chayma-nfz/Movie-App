import React from 'react'
import { Card } from 'react-bootstrap'
import MovieRating from '../Rating/Rating'
import ModalAddMovie from '../AddMovie/AddMovie'

import './MovieCard.css'


const MovieCard = ({ movie, addCard, AddMovie }) => {
  return (
    addCard ?
    
        
         <div>
            <ModalAddMovie AddMovie={AddMovie} />
         
            </div>
      :
      <Card className="movieCard">
        <Card.Img variant="top" src={movie.img} />
        <Card.Body>
          <Card.Title className="movieTitle">{movie.title}</Card.Title>
          <Card.Text> {movie.description} </Card.Text>
          <MovieRating  movieRating={movie.rating} />
        </Card.Body>
      </Card>
  )
}

export default MovieCard
