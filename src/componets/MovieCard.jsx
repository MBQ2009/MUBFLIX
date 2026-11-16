import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

const MovieCard = ({movie}) => {
  return (
   
    <Card style={{ width: '18rem' }}>
            {/* movie poster */}
      <Card.Img variant="top" src={movie.poster} />

      {/* top-right age ratings Badge */}
      <Badge bg="dark">New</Badge>
      
        {/* overlday content */}
        

        <div className=''>


            <button>
                <span>►</span> Play Trailer
            </button>

            <Card.Title>
                {movie.title}
            </Card.Title>

            {/* Duration and Rating now */}
            <div>
                <span>⏱ {movie.duration}</span>
                <span>{movie.rating}</span>
            </div>

            {/* buy Ticket */}
            <button>Buy Ticket</button>

            {/* more info */}
            <a href="">More Info ➔</a>



        </div>
    </Card>
  )
}

export default MovieCard
