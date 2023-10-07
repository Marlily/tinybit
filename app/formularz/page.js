'use client';

import { motion } from "framer-motion";

export default function Contact() {

  
  return (
     <>
         <header className='bg-light-gray pt-5 pb-10 lg:pt-16 lg:pb-24 shadow-2xl'>
            <div className="container flex flex-wrap">

               <div className="w-full">
                  <h1 className="text-5xl lg:text-7xl font-second font-bold uppercase">Darmowa <span className='text-orange block lg:inline text-3xl lg:text-5xl'>wycena</span></h1>

               </div>
            </div>
         </header>

         <section className="pt-20 lg:pt-28 pb-16 lg:pb-20">
            <div className="container">
               <p className='max-w-[46rem] mx-auto text-center text-2xl'>
                  Formularz wysłany, wkrótce otrzymasz odpowiedź! :)
               </p>
            </div>
         </section>


     </>
  )
}
