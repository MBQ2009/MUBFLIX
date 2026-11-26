import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { TbCircleChevronRight } from 'react-icons/tb';
import { BiMovie } from 'react-icons/bi';
import MovieCard from '../MovieCard';

const NowShowing = () => {
  const movies = [
     {
    id: 1,
    title: 'Avengers: Endgame',
    rating: '13+',
    duration: '3h 1m',
    poster: 'https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg',
  },
  {
    id: 2,
    title: 'Inception',
    rating: '13+',
    duration: '2h 28m',
    poster: 'https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg',
  },
  {
    id: 3,
    title: 'Interstellar',
    rating: '13+',
    duration: '2h 49m',
    poster: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
  },
  {
    id: 4,
    title: 'The Dark Knight',
    rating: '13+',
    duration: '2h 32m',
    poster: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
  },
  {
    id: 5,
    title: 'Spider-Man: No Way Home',
    rating: '13+',
    duration: '2h 28m',
    poster: 'https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
  },
  {
    id: 6,
    title: 'Dune: Part Two',
    rating: '13+',
    duration: '2h 46m',
    poster: 'https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg',
  },
  {
    id: 7,
    title: 'Oppenheimer',
    rating: '16+',
    duration: '3h',
    poster: 'https://image.tmdb.org/t/p/w500/ptpr0kGAckfQkJeJIt8st5dglvd.jpg',
  },
  {
    id: 8,
    title: 'Avatar: The Way of Water',
    rating: '13+',
    duration: '3h 12m',
    poster: 'https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg',
  },
  {
    id: 9,
    title: 'The Batman',
    rating: '13+',
    duration: '2h 56m',
    poster: 'https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg',
  },
  {
    id: 10,
    title: 'Top Gun: Maverick',
    rating: '13+',
    duration: '2h 10m',
    poster: 'https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg',
  },
  {
    id: 11,
    title: 'Joker',
    rating: '16+',
    duration: '2h 2m',
    poster: 'https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
  },
  {
    id: 12,
    title: 'Guardians of the Galaxy Vol. 3',
    rating: '13+',
    duration: '2h 30m',
    poster: 'https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg',
  },
  {
    id: 13,
    title: 'The Super Mario Bros. Movie',
    rating: 'PG',
    duration: '1h 32m',
    poster: 'https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg',
  },
  {
    id: 14,
    title: 'Frozen II',
    rating: 'PG',
    duration: '1h 43m',
    poster: 'https://image.tmdb.org/t/p/w500/mINJaa34MtknCYl5AjtNJzWj8cD.jpg',
  },
  {
    id: 15,
    title: 'Toy Story 4',
    rating: 'PG',
    duration: '1h 40m',
    poster: 'https://image.tmdb.org/t/p/w500/w9kR8qbmQ01HwnvK4alvnQ2ca0L.jpg',
  },
  {
    id: 16,
    title: 'The Lion King',
    rating: 'PG',
    duration: '1h 58m',
    poster: 'https://image.tmdb.org/t/p/w500/dzBtMocZuJbjLOXvrl4zGYigDzh.jpg',
  },
  {
    id: 17,
    title: 'The Matrix',
    rating: '16+',
    duration: '2h 16m',
    poster: 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
  },
  {
    id: 18,
    title: 'Pulp Fiction',
    rating: '18+',
    duration: '2h 34m',
    poster: 'https://image.tmdb.org/t/p/w500/vQWk5YBFWF4bZaofAbv0tShwBvQ.jpg',
  },
  {
    id: 19,
    title: 'La La Land',
    rating: '13+',
    duration: '2h 8m',
    poster: 'https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg',
  },
  {
    id: 20,
    title: 'Deadpool & Wolverine',
    rating: '18+',
    duration: '2h 8m',
    poster: 'https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg',
  },
  ];

  return (
    <div className='comings'>
    <section className='now-showing  text-white p-5 px-3'>
      <Container>
        <div className='para'>
          <p>Experience the Magic</p>
          <h2>Now Showing</h2>
        </div>

        <Row >
            {movies.map((movie) => (
                <Col lg={2} key={movie.id}>
                    <MovieCard movie={movie} />
                </Col>
            ))

            }
        
           
        </Row>
      </Container>
    </section>
    </div>
  );
};

export default NowShowing;
