"use client";
import { useState, useEffect } from 'react';
import Sidebar from '../../components/sidebar';

export default function Home() {
  const [randomWords, setRandomWords] = useState(['', '', '']);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  
  useEffect(() => {
    const stats = ['heartrate', 'blood pressure', 'temperature', 'oxygen level', 'respiration rate', 'weight', 'height', 'BMI', 'age'];
    
    const intervalId = setInterval(() => {
      const newCurrentWordIndex = (currentWordIndex + 1) % stats.length;
      setCurrentWordIndex(newCurrentWordIndex);

      const newRandomWords = randomWords.map((_, index) => {
        const newIndex = (newCurrentWordIndex + index) % stats.length;
        return stats[newIndex];
      });
      setRandomWords(newRandomWords);
    }, 5000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [currentWordIndex, randomWords]);

  return (
    <main className="flex flex-row min-h-screen">
      <Sidebar className="order-1" />
      <div className="container mx-auto flex-none order-2">
        <div className="w-max m-auto pt-6 pb-6">
          <h1>WELCOME</h1>
        </div>
        <div className="flex flex-row flex-wrap justify-around w-full">
          {randomWords.map((word, index) => (
            <div key={index} className="size-40 bg-white text-cyan-300 flex">
              <h1 className='m-auto'>{word}</h1>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
