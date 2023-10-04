// import React from 'react';
import { createClient } from "@supabase/supabase-js";
import { useQuery } from '@tanstack/react-query';
import {AiOutlineLoading} from 'react-icons/ai'
type Project = {
  id: number;
  name: string;
  description: string;
  photo: string;
  url: string;
  created_at: string;
};

export default function Projects() {
  const supabaseUrl = 'https://pkhdfkdxmhhrvkxglbhv.supabase.co';
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBraGRma2R4bWhocnZreGdsYmh2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NTY3NDY1OCwiZXhwIjoyMDExMjUwNjU4fQ.eGvQt8K9BIpbV9PUX_w4kT7rUFMHSIZ697j58uCYsr0'; // Replace with your actual key
  const supabase = createClient(supabaseUrl, supabaseKey);

  const { data: projects = [], isLoading, isError } = useQuery<Project[]>(
    ["projects"], // Corrected query key to be an array of strings
    async () => {
      const { data, error } = await supabase.from('projects').select('*');
      if (error) {
        throw error;
      }
      return data || [];
    }
  );

  if (isLoading) {
    return <div className="flex justify-center items-center ">
    <AiOutlineLoading className="animate-spin w-10 h-10" />
    </div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <section id='projects' className=' mt-6 p-6 dark:bg-dark dark:text-gray-200 text-center'>
      <h2 className="text-2xl font-bold w-full mb-6">My Projects</h2>
      <div className='flex flex-col justify-center items-center md:flex-row gap-6 drop-shadow-md  '>
        {projects.map((project) => (
          <div
            key={project.id}
            id='card'
            className="w-[300px] 
            md:w-[400px] lg:w-[400px]
              h-[600px] flex flex-col justify-center items-center gap-6
               bg-white  rounded-lg  dark:bg-dark
               dark:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,4px_4px_8px_#A94CFF,0_0_10px_#A94CFF,0_0_40px_#A94CFF]
                drop-shadow-md
                border border-neon-purple
                "
          >
            <img
              className="rounded-t-lg w-fit h-fit mb-4"
              src={project.photo}
              alt={project.name}
            />
            <div className="p-4  h-full flex flex-col justify-center items-center    ">
              <h5 className="p-4 h-18 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white ">{project.name}</h5>
              <p className="mb-2  h-56 p-2 font-normal text-gray-700 dark:text-gray-200">{project.description}</p>
              <a
                href={project.url}
                className="inline-flex items-center p-2 text-sm font-medium text-center text-white bg-purple-700 rounded-lg  hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 duration-500 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
              >
                GitHub
                <svg className="w-4 h-4 ml-2" aria-label="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
