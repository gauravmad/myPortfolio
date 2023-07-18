import React, {useState, useEffect} from 'react';
import CanvasBackground from '../CanvasBackground/CanvasBackground';

export default function Home() {

  const professions = ['UI/UX Designer', 'Web Developer', 'App Developer', 'Freelancer'];
  const [currentProfession, setCurrentProfession] = useState('');
  const [visibleLetters, setVisibleLetters] = useState(0);

  useEffect(() => {
    let timeout;

    if (visibleLetters < currentProfession.length) {
      timeout = setTimeout(() => {
        setVisibleLetters((prevVisibleLetters) => prevVisibleLetters + 1);
      }, 100);
    }

    return () => clearTimeout(timeout);
  }, [visibleLetters, currentProfession]);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (professions.indexOf(currentProfession) + 1) % professions.length;
      setCurrentProfession(professions[nextIndex]);
      setVisibleLetters(0);
    }, 2000);

    return () => clearInterval(interval);
  }, [currentProfession, professions]);


  return (
    <div className='home'>
      <CanvasBackground/>
      <div className='svglb'>
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="fill" x1="0%" y1="0%" x2="100%" y2="0%" gradientTransform="rotate(45 0.5 0.5)"><stop offset="0%" stop-color="#00a5bf"></stop><stop offset="100%" stop-color="#003ab5"></stop></linearGradient></defs>
          <path stroke="none" stroke-width="0" fill="url(#fill)">
            <animate attributeName="d" dur="7s" repeatCount="indefinite" 
            values="
            M83,69Q80,88,61,87.5Q42,87,30,76Q18,65,12,47Q6,29,23.5,19.5Q41,10,59.5,12.5Q78,15,82,32.5Q86,50,83,69Z;

            M86.5,68.5Q80,87,61.5,83.5Q43,80,31.5,72Q20,64,21.5,50.5Q23,37,32,24.5Q41,12,58,15Q75,18,84,34Q93,50,86.5,68.5Z;

            M78,66.5Q76,83,57.5,89.5Q39,96,29.5,80Q20,64,20.5,50Q21,36,31.5,25.5Q42,15,56.5,19.5Q71,24,75.5,37Q80,50,78,66.5Z;

            M80.5,62.5Q70,75,56.5,77.5Q43,80,24.5,75.5Q6,71,10,51.5Q14,32,26.5,17Q39,2,57,10.5Q75,19,83,34.5Q91,50,80.5,62.5Z;

            M83,69Q80,88,61,87.5Q42,87,30,76Q18,65,12,47Q6,29,23.5,19.5Q41,10,59.5,12.5Q78,15,82,32.5Q86,50,83,69Z;
            ">

            </animate>

          </path>
      </svg>
      </div>
      <div className='content'>
        <h1 className='text-3xl font-medium my-1 text-white text-center'>Gaurav Madan</h1>
        <h1 className='my-1 profession flex'>
        {currentProfession.substr(0, visibleLetters)}
          <span className={`profession1 typing-cursor ${visibleLetters === currentProfession.length ? 'blink' : ''}`}>|</span>
        </h1>
        <button className='button p-1 px-5 my-1 font-semibold text-2xl text-blue-100'>About Me</button>
      </div>
    </div>
  );
}