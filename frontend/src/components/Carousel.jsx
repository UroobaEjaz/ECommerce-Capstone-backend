import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

export default function Carousel({ data }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
    };

    return (
        <div className="relative">
            <BsArrowLeftCircleFill
                className='absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-8 text-white cursor-pointer z-10'
                onClick={prevSlide}
            />
            <div className="relative flex justify-center items-center w-[600px] h-[400px]">
                <img src={data[currentIndex].src} alt={data[currentIndex].alt} />
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute top-0 left-0 right-0 text-white text-center z-20 pointer-events-none"
                >
                    Welcome to JK Convenience
                </motion.h2>
            </div>
            <BsArrowRightCircleFill
                className='absolute right-0 top-1/2 transform -translate-y-1/2 w-8 h-8 text-white cursor-pointer z-10'
                onClick={nextSlide}
            />
        </div>
    );
}


// install framer-motion