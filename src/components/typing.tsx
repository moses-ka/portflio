import  { useState, useEffect } from 'react';

const TypingEffect = () => {
  const textToType = "Hello, I'm Moses Aljumaili junior full-stack developer";
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
    <div className="text-center text- mt-4 w-full md:w-5/6   text-purple-700  dark:text-purple-400 ">
      <h2 className="text-2xl font-bold w-full  ">{typedText}</h2>
    </div>
  );
};

export default TypingEffect;
