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
              We offer you the best products
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
              JK Convenience Store
            </motion.h3>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
              Offers you Icecream
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
              This Summer!
            </motion.h3>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
              Beat the heat at our store!
            </motion.p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
}

export default CarouselPage;
