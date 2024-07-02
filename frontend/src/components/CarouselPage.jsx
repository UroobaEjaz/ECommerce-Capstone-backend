import 'regenerator-runtime/runtime';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Carousel from 'react-bootstrap/Carousel';
import Img1 from '../assets/Img1.jpg';
import Img2 from '../assets/Img2.jpg';
import Img3 from '../assets/Img3.jpg';
import { useSpeechRecognition } from 'react-speech-recognition';
import SpeechRecognition from 'react-speech-recognition';
import { VscDebugStart, VscDebugStop } from 'react-icons/vsc';
import { CgClose } from 'react-icons/cg';
import Card from './Cards';

function CarouselPage() {
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
      console.log(data);

      setShowCloseButton(true);
    } catch (error) {
      console.log('error getting items', error);
    }

    resetTranscript();
  };

  const handleClose = () => {
    setItem([]);
    setShowCloseButton(false);
  };

  return (
    <div>
      <Carousel fade>
        <Carousel.Item style={{ height: '500px' }} key="1">
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
        <Carousel.Item style={{ height: '450px' }} key="2">
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
        <Carousel.Item style={{ height: '450px' }} key="3">
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

      <div className="flex justify-center mt-3">
        <form onSubmit={getItems} className="flex items-center justify-center">
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
            onClick={handleVoiceStart}
            className="bg-red-900 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            <VscDebugStart />
          </button>
          <button
            type="button"
            onClick={handleVoiceEnd}
            className="bg-red-900 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2"
          >
            <VscDebugStop />
          </button>
          <button
            type="submit"
            className="bg-black hover:bg-red-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2"
          >
            Search
          </button>
        </form>

        {item.length > 0 ? <Card items={item} /> : <p> </p>}

        {showCloseButton && (
          <button
            onClick={handleClose}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
          >
            <CgClose />
          </button>
        )}
      </div>
    </div>
  );
}

export default CarouselPage;
