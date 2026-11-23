import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

const MovieCard = ({movie}) => {
  return (
   
    <Card className='movie-card position-relative border-0  '>
            {/* movie poster */}
      <Card.Img variant="top" src={movie.poster}  />

      {/* top-right age ratings Badge */}
      <Badge bg="dark" className='movie-raiting position-absolute top-0 end-0 m-2 p-3'>{movie.rating}</Badge>

      
        {/* overlday content */}
        

        <div className='movie-overlay'>

<div className='text-center'>
            <Button className='butt' variant="danger" size='sm' >
                <span>►</span> Play Trailer
            </Button>
</div>
        
           <div className='blac'>
              <div className='bg-black text-light mt-2' style={{paddingl: '2px', height:"180px", width:"190px", }}>
                    <Card.Title>
                        {movie.title}
                    </Card.Title>
        
    
                    {/* Duration and Rating now */} 
                    <div>
                        <span>⏱ {movie.duration}</span>
                        <span>{movie.rating}</span>
                    </div>
        <div className="mt-3 py-4"
      style={{ borderTop: "1px solid #8B2BFF", borderBottom:"", }}>
          
                    {/* buy Ticket */}
                 <div className='boy'>
                      <div>  <button>Buy Ticket</button></div>
            
                        {/* more info */}
                       <div className='bug'> <a href="">More Info ➔</a></div>
                       
                 </div>
                 </div>
           </div >
            </div>
         



        </div>
    </Card>
  )
}

export default MovieCard
