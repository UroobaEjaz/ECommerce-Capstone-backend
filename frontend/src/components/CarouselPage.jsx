import 'regenerator-runtime/runtime';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Carousel from 'react-bootstrap/Carousel';
//import Img1 from '../assets/Img1.jpg';
//import Img2 from '../assets/Img2.jpg';
//import Img3 from '../assets/Img3.jpg';
import candy1 from '../assets/candy1.jpg';
import ice from '../assets/ice.jpg';
import laysAndPepsi from '../assets/laysAndPepsi.png';
import { useSpeechRecognition } from 'react-speech-recognition';
import SpeechRecognition from 'react-speech-recognition';
import { FiMic } from 'react-icons/fi';
import { CgClose } from 'react-icons/cg';

import Card from './Cards';
import { FaSearch } from 'react-icons/fa';

function CarouselPage({ setSearchResults }) {
  const [item, setItem] = useState([]);
  const [name, setName] = useState('');
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [showCloseButton, setShowCloseButton] = useState(false);

  const handleVoiceStart = () => {
    SpeechRecognition.startListening();
  };

  const handleVoiceEnd = () => {
    SpeechRecognition.stopListening();
    if (transcript) {
      setName(transcript);
    }
  };

  const getItems = async (e) => {
    e.preventDefault();
    if (!name && !transcript) {
      alert('Please enter the name of the item or use voice input');
      return;
    }

    const searchName = transcript || name;

    try {
      const response = await fetch('/api/items/getByName', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: searchName }),
      });

      const data = await response.json();
      setItem(data);
      setSearchResults(data); // Set search results in Home component
      console.log(data);

      setShowCloseButton(true);
    } catch (error) {
      console.log('error getting items', error);
    }

    resetTranscript();
  };

  const handleClose = () => {
    setItem([]);
    setSearchResults([]); // Clear search results in Home component
    setShowCloseButton(false);
  };

  return (
    <div className='relative mx-auto overflow-hidden mt-[-100px] z-15 h-5/6'>
      <Carousel fade>
        <Carousel.Item style={{ height: '350px' }} key="1">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="d-block w-100"
            src={ice}
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
        <Carousel.Item style={{ height: '350px' }} key="2">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="d-block w-100"
            src={candy1}
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
        <Carousel.Item style={{ height: '350px' }} key="3">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="d-block w-100"
            src={laysAndPepsi}
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

      <div className="flex justify-center mt-0 mb-0 bg-gradient-to-r from-slate-200 via-red-400 to-amber-900">
        <form onSubmit={getItems} className="flex items-center justify-center mt-2">
          <input
            type="text"
            placeholder="Ask me"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="flex-1 border rounded-md border-gray-300 p-2 mt-0 mr-4 max-w-xs"
            style={{ maxWidth: '400px' }}
          />
          <button
            type="button"
            onMouseDown={handleVoiceStart}
            onMouseUp={handleVoiceEnd}
            className="bg-red-900 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            <FiMic />
          </button>
          <button
            type="submit"
            className="bg-black hover:bg-red-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2"
          >
            <FaSearch/>
          </button>
        </form>
      </div>

      {showCloseButton && (
        <button
          onClick={handleClose}
          className="fixed bottom-3 right-5"
        >
          <CgClose />
        </button>
      )}
      
    
    </div>
  );
}

export default CarouselPage;


// reference: https://chatgpt.com/c/bf0887e3-94a4-4dd0-9723-e0293b46d938