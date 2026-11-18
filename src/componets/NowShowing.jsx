import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { TbCircleChevronRight } from 'react-icons/tb';
import { BiMovie } from 'react-icons/bi';
import MovieCard from './MovieCard';

const NowShowing = () => {
  const movies = [
    {
      id: 1,
      title: 'Avenger',
      rating: '16+',
      duration: '3h 00min',
      poster: 'https://m.media-amazon.com/images/M/MV5BNGEwYWZkN2UtOTQ5Mi00MGQzLWEzNjYtMWMyNDBkMTkzMWNkXkEyXkFqcGc@._V1_.jpg',
    },
    {
      id: 2,
      title: 'Solo Levelling',
      rating: '18+',
      duration: '2h 00min',
      poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT007OpNV34Wm0s4SLi3J8B2_s-g_1c_FKG_hC_n8HUe8foKoIcnon1hI0t&s=10',
    },
    {
      id: 3,
      title: 'Spider Man',
      rating: '16+',
      duration: '3h 00min',
      poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRlwlRcdHIDVihdm4cbh55FYdwmGjOZQOdeGVoR4GvSw&s=10',
    },
    {
      id: 4,
      title: 'Avenger',
      rating: '16+',
      duration: '3h 00min',
      poster: 'https://m.media-amazon.com/images/M/MV5BNGEwYWZkN2UtOTQ5Mi00MGQzLWEzNjYtMWMyNDBkMTkzMWNkXkEyXkFqcGc@._V1_.jpg',
    },
  ];

  return (
    <section>
      <Container>
        <div className='para'>
          <p>Experience the Magic</p>
          <h2>Now Showing</h2>
        </div>

        <Row >
            {movies.map((movie) => (
                <Col key={movie.id}>
                    <MovieCard movie={movie} />
                </Col>
            ))

            }
        
           
        </Row>
      </Container>
    </section>
  );
};

export default NowShowing;
