import React from 'react'

const ComingSoon = () => {
  return (
    <section className='now-showing bg-dark text-white p-5 px-3'>
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
  );
};

export default ComingSoon
