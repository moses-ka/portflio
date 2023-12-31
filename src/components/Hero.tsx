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
    <section id='hero-section' className='h-full overflow-hidden mt-4 dark:bg-dark dark:text-gray-200 p-6 text-center'>
    <div className=" flex flex-col justify-center items-center  md:flex-row">
      <div ref={introduction} className="transform -translate-x-full text-container flex flex-col justify-center items-center text-center h-1/2 md:w-1/2 ">
        <TypingEffect />
    <span className="text-lg mt-2 w-5/6 md:w-4/6 ">
      I'm all about the web  and delightful user experiences! <br /> As a web developer
       I turn ideas into digital <strong className='text-purple-700 dark:text-purple-400'>magic  ,</strong> I enjoy every 
       <strong className='text-purple-700 dark:text-purple-400'> pixel  ,</strong> line of code, 
       and the thrill of seeing projects come to <strong className='text-purple-700 dark:text-purple-400'>life .</strong>
      </span>

      </div>
      <div ref={illustration} className="transform translate-x-full text-container flex flex-col justify-center items-center text-center h-1/2 md:w-1/2 ">
        <img className='w-full md:w-5/6' src="https://pkhdfkdxmhhrvkxglbhv.supabase.co/storage/v1/object/public/photos/Application%20programming%20interface-cuate.png" alt="Vector Illustration" />
      </div>
    </div>
    </section>
  );
};

export default PortfolioPage;
