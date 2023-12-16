import React, { useState, useEffect } from 'react';
import './Home.scss';

const Home = () => {
  const [text, setText] = useState('');
  const messages = ['frontend developer', 'React enthusiast'];

  useEffect(() => {
    let currentMessageIndex = 0;
    let currentCharIndex = 0;

    const intervalId = setInterval(() => {
      if (currentCharIndex <= messages[currentMessageIndex].length) {
        setText(messages[currentMessageIndex].slice(0, currentCharIndex));
        currentCharIndex++;
      } else {
        currentMessageIndex = (currentMessageIndex + 1) % messages.length;
        currentCharIndex = 0;
      }
    }, 200); // Adjust the interval time as needed

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="main">
        {/* Your main content */}
      </div>
      <div className="text">
        <h2>Hello, it's me</h2>
        <h1>Davit Bayadyan</h1>
        <h2>AND I'm a <span>{text}</span></h2>
      </div>
    </>
  );
};

export default Home;
