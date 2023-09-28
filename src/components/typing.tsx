import  { useState, useEffect } from 'react';

const TypingEffect = () => {
  const textToType = "Hello, I'm Aljumaili Moses. full-stack developer and Design Enthusiast";
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (currentIndex < textToType.length) {
        setTypedText((prevText) => prevText + textToType[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(typingInterval);
      }
    }, 75); // Adjust typing speed as needed

    return () => {
      clearInterval(typingInterval);
    };
  }, [currentIndex]);

  return (
    <div className="text-center mt-4 md:w-4/6 ">
      <h1 className="text-2xl font-bold text-purple-700">{typedText}</h1>
    </div>
  );
};

export default TypingEffect;
