import Carousel from 'react-bootstrap/Carousel';
import exampleImage from '../Images/Untitled-1.png';
import exampleImage2 from '../Images/Untitled-2.png';
import exampleImage3 from '../Images/Untitled-3.png';
import exampleImage4 from '../Images/Untitled-4.png';

function HomeBanner() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={exampleImage} 
          alt="First slide"
          style={{ width: '100%', height: '500px'}}
        />
        <Carousel.Caption>
          <h3>Newpath</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={exampleImage2} 
          alt="Second slide"
          style={{ width: '100%', height: '500px'}}
        />

        <Carousel.Caption>
          <h3>Newpath</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={exampleImage3} 
          alt="Thired slide"
          style={{ width: '100%', height: '500px'}}
        />

        <Carousel.Caption>
          <h3>Newpath</h3>
          <p>
            
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={exampleImage4} 
          alt="Forth slide"
          style={{ width: '100%', height: '500px'}}
        />

        <Carousel.Caption>
          <h3>Newpath</h3>
          <p>
            
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeBanner;