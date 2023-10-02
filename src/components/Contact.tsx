import {useRef} from 'react'
import emailjs from '@emailjs/browser';
export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (form.current) {
      emailjs.sendForm('service_wp9iwbd', 'template_mcr4zhc', form.current, 'Vf_kZW2iWy8ca97Hb')
        .then(() => {
        window.alert('Message Sent')
        }, (error) => {
          console.log(error.text);
        });
        form.current.reset();
    }
  };
  return (
    <>
    <section id='contact' className='h-full overflow-hidden mt-4 p-6 dark:bg-gray-900 dark:text-gray-200'>
      <div className='flex flex-col justify-center items-center '>
      
<form ref={form} onSubmit={sendEmail} className="w-full md:w-5/6">
    <div  className="grid md:grid-cols-2 md:gap-6 w-full">
    <div  className="relative z-0 w-full mb-6 group">
        <input type="text" name="first_name" id="first_name"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " required />
        <label htmlFor="first_name"  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
    </div>
    <div  className="relative z-0 w-full mb-6 group">
        <input type="text" name="last_name" id="last_name"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " required />
        <label htmlFor="last_name"  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
    </div>
    </div>
  <div  className="relative z-0 w-full mb-6 group">
      <input type="email" name="email" id="email"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " required />
      <label htmlFor="email"  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
  </div>
  <div  className="relative z-0 w-full mb-6 group">
      <textarea name="message" id="message" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-purple-500 focus:outline-none focus:border-purple-600 peer" placeholder=" " required></textarea>
      <label htmlFor="message"  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">message</label>
  </div>
  
  
  
  
  <button type="submit"  className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">Send</button>
</form>

      </div>
    </section>
    <section id='footer'>
      
<footer className="bg-white dark:bg-gray-900 p-6 dark:text-gray-200">
    <div className=" w-full ">
        <div className="flex flex-col justify-center md:justify-center md:flex-row items-center gap-4 px-2">
      <div className='flex flex-col justify-center items-center gap-2 text-center p-2 md:w-1/2'>
      <img className='w-36 ' src="https://pkhdfkdxmhhrvkxglbhv.supabase.co/storage/v1/object/public/photos/logo%20black.png" alt="logo" />

      </div>
          <div className="flex justify-center items-center gap-4  h-36 md:w-1/2">
              <div className='flex flex-col justify-center items-center gap-2 text-center  h-28 p-2 w-1/2'>
                  <h2 className=" text-sm font-semibold text-gray-900 uppercase dark:text-white mb-2">Resources</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="">
                          <a href="https://flowbite.com/" className="hover:underline">Flowbite</a>
                      </li>
                      <li>
                          <a href="https://storyset.com/" className="hover:underline">Storyset</a>
                      </li>
                      <li className='w-full'>
                          <a href="https://tailwindcss.com/" className="hover:underline">Tailwind Css</a>
                      </li>
                  </ul>
              </div>
              <div className='flex flex-col justify-center items-center gap-2 text-center h-28 p-2 w-1/2'>
                  <h2 className=" text-sm font-semibold text-gray-900 uppercase dark:text-white mb-2">Follow me</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="">
                          <a href="https://github.com/moses-ka" className="hover:underline ">Github</a>
                      </li>

                      <li>
                          <a href="https://www.linkedin.com/in/moses-ka-989b1819a/" className="hover:underline">Linkedin</a>
                      </li>
                      <li>
                          <span  className=" text-center text-sm  ">ji.moses.ka@gmail.com</span>
                      </li>
                      
                  </ul>
              </div>
              
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="flex justify-center items-center md:justify-center md:flex-col ">
          
          <div className="flex justify-center items-center  flex-col md:flex-row md:gap-4 h-12 flex-wrap w-full  ">
          <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="16" height="16">
                        <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                    </svg>
              <span  className="text-gray-600 hover:text-gray-900 dark:hover:text-white text-center text-sm"> Moses.ka
                 
             
              </span>
         
            
              <a href="https://github.com/moses-ka" className="  text-gray-600 hover:text-gray-900 dark:hover:text-white">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="16" height="16" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                  </svg>
                 
              </a>
                  <span className='text-gray-600 hover:text-gray-900 dark:hover:text-white text-center text-sm'>Moses-ka</span>
                  <a href="https://www.linkedin.com/in/moses-ka-989b1819a">
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" data-supported-dps="24x24" fill="currentColor" width="16" height="16" focusable="false">
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                  </svg>
                  
                  </a>
                  <span className='text-gray-600 hover:text-gray-900 dark:hover:text-white text-center text-sm'>Moses<span className='hidden md:inline '>(Aljumaili)</span>Ka</span>
          </div>
      </div>
    </div>
</footer>
    </section>
  </>)
}
