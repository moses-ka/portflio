import  { useEffect,useRef } from 'react';
import TypingEffect from './typing';

const PortfolioPage = () => {
  const illustration = useRef<HTMLDivElement | null>(null);
  const introduction = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    // Use JavaScript to add transition classes after the component mounts
    // const textElement = document.querySelector('.text-container');
    // const illustrationElement = document.querySelector('.illustration-container');
    // Add a delay before adding the animation classes
    setTimeout(() => {
      introduction.current?.classList?.add('translate-x-0', 'transition-transform', 'duration-1000', 'ease-in-out');
      illustration.current?.classList?.add('-translate-x-0', 'transition-transform', 'duration-1000', 'ease-in-out');
      illustration.current?.classList?.remove('translate-x-full')
    }, 100); // Adjust the delay as needed
  }, []);

  return (
    <section id='hero-section' className='h-full overflow-hidden mt-4'>
    <div className=" flex flex-col justify-evenly items-center p-6 md:flex-row">
      <div ref={introduction} className="transform -translate-x-full text-container flex flex-col justify-center items-center text-center h-1/2 md:w-1/2 ">
        <TypingEffect />
    <span className="text-sm mt-2 md:w-4/6 ">
      I'm all about the web,  and delightful user experiences! As a web developer, I turn ideas into digital <strong>magic</strong>. I enjoy every <strong>pixel</strong>, line of code, and the thrill of seeing projects come to <strong>life</strong>
      </span>

      </div>
      <div ref={illustration} className="transform translate-x-full text-container flex flex-col justify-center items-center text-center h-1/2 md:w-1/2 ">
        <img className='' src="https://imgtr.ee/images/2023/09/22/a10a26fc5f5e4f7b8157aa23c8208d13.gif" alt="Vector Illustration" />
      </div>
    </div>
    </section>
  );
};

export default PortfolioPage;
