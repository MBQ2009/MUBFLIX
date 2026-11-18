import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { TbCircleChevronRight } from 'react-icons/tb';
import { BiMovie } from 'react-icons/bi';
import MovieCard from './MovieCard';

const ComingSoon = () => {

 const movies = [
  {
    id: 21,
    title: 'Children of Blood and Bone',
    rating: '13+',
    duration: 'TBA',
   poster: 'https://image.tmdb.org/t/p/original/kya5EdbhrWg9A6iHXXHlQn4UbRQ.jpg'
  },
  {
  id: 20,
  title: 'The Beekeeper 2',
  rating: 'TBA',
  duration: 'TBA',
  poster: 'https://image.tmdb.org/t/p/original/zvCaJaJl1xzdnbFmF1gonMB4Znt.jpg'
},
{
  id: 22,
  title: 'Ice Age: Boiling Point',
  rating: 'PG',
  duration: 'TBA',
  poster: 'https://mediaaws-live.almasryalyoum.com/almasryalyoum/uploads/images/2026/06/07/1826384.webp'
},
{
  id: 23,
  title: "Narnia: The Magician's Nephew",
  rating: 'PG',
  duration: 'TBA',
  poster: 'https://d6isf1yxni2j5.cloudfront.net/large_Narnia_d134949864.jpg'
},
{
  id: 24,
  title: 'Sonic the Hedgehog 4',
  rating: 'PG',
  duration: 'TBA',
  poster: 'https://image.tmdb.org/t/p/original/vAQO6QBus6M5TSD0uf8XqSrmDx4.jpg'
},
{
  id: 25,
  title: 'The Legend of Zelda',
  rating: 'PG',
  duration: 'TBA',
  poster: 'https://contents.oricon.co.jp/upimg/news/2377000/2376723/20250328_234635_p_o_97546170.jpg'
},
{
  id: 26,
  title: 'Spider-Man: Beyond the Spider-Verse',
  rating: 'PG',
  duration: 'TBA',
  poster: 'https://www.newdvdreleasedates.com/images/posters/large/spider-man-beyond-the-spider-verse-2027-06.jpg'
},
{
  id: 28,
  title: 'Frozen III',
  rating: 'PG',
  duration: 'TBA',
  poster: 'https://jadwalnonton.com/data/upload/movies/2024/Poster-frozen-III.jpg'
},
];

  return (
    <div className='coming'>
    <section className='now-showing text-white p-5 px-3'>
      <Container>
        <div className='para'>
       
          <h2>Coming Soon</h2>
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

export default ComingSoon
