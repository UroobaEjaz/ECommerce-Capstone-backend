import Carousel from 'react-bootstrap/Carousel';
import Img1 from '../assets/Img1.jpg';
import Img2 from '../assets/Img2.jpg';
import Img3 from '../assets/Img3.jpg';

function CarouselPage() {
    return (
      <Carousel fade>
        <Carousel.Item style={{ height: '450px' }}>
          <img
            className="d-block w-100 "
            src={Img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: '450px' }}>
          <img
            className="d-block w-100"
            src={Img2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: '450px' }}>
          <img
            className="d-block w-100"
            src={Img3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
}

export default CarouselPage;
