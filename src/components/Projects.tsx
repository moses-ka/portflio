import React,{useEffect} from 'react'
import { createClient } from "@supabase/supabase-js"
import { useQuery } from '@tanstack/react-query'
export default function Projects() {
 
  const  supabaseUrl= 'https://pkhdfkdxmhhrvkxglbhv.supabase.co'

  const supabaseKey='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBraGRma2R4bWhocnZreGdsYmh2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NTY3NDY1OCwiZXhwIjoyMDExMjUwNjU4fQ.eGvQt8K9BIpbV9PUX_w4kT7rUFMHSIZ697j58uCYsr0'
  const supabase = createClient(supabaseUrl, supabaseKey);
  const {
    data: projects,isLoading,
  } = useQuery(
    ["projects"], // Specify a unique query key
    async () => {
      
        let { data: projects, error } = await supabase
        .from('projects')
        .select('*')

      // console.log("fetched been called");
      return projects;
    },
    {
      refetchOnMount: false,
      staleTimeout: 1000 * 60 * 60,
      refetchOnWindowFocus: false,
    }
  );

// console.log(projects);
 return (
     <section id='projects' className=' mt-6'>
         <div className='flex flex-col justify-center items-center md:flex-row gap-4'>
             {projects && projects.map((project) => {
                 return (
                     <div id='card' className="max-w-sm  max-h-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                         <img className="rounded-t-lg" src={project.photo} alt="" />
                         <div className="p-5">
                             <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.name}</h5>
                             <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{project.description}</p>
                             <a href={project.url} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-pruple-800 focus:ring-4 focus:outline-none focus:ring-pruple-300 dark:bg-pruple-600 dark:hover:bg-pruple-700 dark:focus:ring-pruple-800">
                                 Read more
                                 <svg className="w-3.5 h-3.5 ml-2" aria-label="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                 </svg>
                             </a>
                         </div>
                     </div>
                 )
             })}
         </div>
     </section>
  )}
