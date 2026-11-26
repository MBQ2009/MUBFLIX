import Carousel from 'react-bootstrap/Carousel';
import mov1 from '../../assets/slider/mov1.jpg'
import mov2 from '../../assets/slider/mov2.webp'
import mov3 from '../../assets/slider/mov3.jpg'
import mov4 from '../../assets/slider/mov4.webp'
import mov5 from '../../assets/slider/mov5.jpeg' 
import mov6 from '../../assets/slider/mov6.jpg'

function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={mov1} alt="" />
      </Carousel.Item>

      <Carousel.Item>
        <img src={mov2} alt="" />
      </Carousel.Item>

      <Carousel.Item>
       <img src={mov3} alt="" />
      </Carousel.Item>

      <Carousel.Item>
       <img src={mov4} alt="" />
      </Carousel.Item>

      <Carousel.Item>
       <img src={mov5} alt="" />
      </Carousel.Item>

      <Carousel.Item>
       <img src={mov6} alt="" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;