import { motion } from 'framer-motion';
import Carousel from 'react-bootstrap/Carousel';
import Img1 from '../assets/Img1.jpg';
import Img2 from '../assets/Img2.jpg';
import Img3 from '../assets/Img3.jpg';

function CarouselPage() {
    return (
      <Carousel fade>
        <Carousel.Item style={{ height: '450px' }}>
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="d-block w-100"
            src={Img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <motion.h3 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
              First slide label
            </motion.h3>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </motion.p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: '450px' }}>
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="d-block w-100"
            src={Img2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <motion.h3 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
              Second slide label
            </motion.h3>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </motion.p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: '450px' }}>
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="d-block w-100"
            src={Img3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <motion.h3 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
              Third slide label
            </motion.h3>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </motion.p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
}

export default CarouselPage;
