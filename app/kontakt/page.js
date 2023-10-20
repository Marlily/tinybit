'use client';

import Image from 'next/image'
import { useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function Contact() {

   const ref = useRef(null);
   const ref2 = useRef(null);
   const ref3 = useRef(null);
   const isInView = useInView(ref);
   const isInView2 = useInView(ref2);
   const isInView3 = useInView(ref3);
   const [activeStep, setActiveStep] = useState('step-1');

   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [about, setAbout] = useState('');
   const [type, setType] = useState('');
   const [menu, setMenu] = useState('');
   const [whatOnPage, setWhatOnPage] = useState('');
   const [style, setStyle] = useState('');

   const validateFormm = (e) => {
      

   }
   
  return (
     <>
         <header className='bg-light-gray pt-5 pb-10 lg:pt-16 lg:pb-24 shadow-2xl'>
            <div className="container flex flex-wrap">

               <div className="w-full">
                  <h1 className="text-5xl lg:text-7xl font-second font-bold uppercase">Darmowa <span className='text-orange block lg:inline text-3xl lg:text-5xl'>wycena</span></h1>

               </div>
            </div>
         </header>

         <section className="pt-20 lg:pt-28 pb-12 lg:pb-20">
            <div className={`container transition duration-400 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
               <p ref={ref} className='max-w-[46rem] mx-auto text-center text-xl'>Potrzebujesz strony internetowej? Z przyjemnością ją wykonam! :)
                  <br/><br/>
                  Proszę o wypełnienie formularza. <br/>Pozwoli mi to dokładnie zrozumieć jakiej strony potrzebujesz. 
                  <br/>
                  W ciągu kilku godzin otrzymasz wycenę i termin realizacji, a także szczegóły współpracy.
                  Wycena jest całkowicie darmowa. 
                  
               </p>
            </div>
         </section>

         <section className='pb-16 lg:pb-36'>
            <div ref={ref2} className="container  px-0 xl:px-8">
              
               <form action="/formularz" method="post" name="wycena" data-netlify="true" 
                  className={`bg-light-gray px-4 py-12 border-violet border-t-8 transition delay-200 duration-400 ${isInView2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                     <div id="step-1" className={`flex-wrap justify-between max-w-[61.25rem] mx-auto flex mb-16`}>
                        <input type="hidden" name="form-name" value="wycena" />

                        <div className="flex w-full justify-center items-center mb-10">
                              <Image 
                                 src="/1.svg"
                                 alt="ikona"
                                 width={37}
                                 height={30}
                                 className='mr-4'
                              />
                              <p className='text-lg font-medium'>Dane kontaktowe</p>
                        </div>


                        <label className='custom-width-half mb-6 xs:mb-0'>
                           Imię i nazwisko*
                           <input type="text" name="Imię i nazwisko:" className="w-full border-dark border p-3 mt-2" value={name} onChange={ (e) => { setName(e.target.value) }}/>
                        </label>

                        <label className='custom-width-half'>
                           E-mail*
                           <input type="email" name="Email:" className="w-full border-dark border p-3 mt-2" value={email} onChange={ (e) => { setEmail(e.target.value) }}/>
                        </label>                        
                     </div>

                     {/* STEP 2 */}
                     <div id="step-2" className={`flex-wrap justify-between max-w-[61.25rem] mx-auto flex mb-16`}>


                        <div className="flex w-full justify-center items-center mb-5">
                              <Image 
                                 src="/2.svg"
                                 alt="ikona"
                                 width={40}
                                 height={40}
                                 className='mr-4'
                              />
                              <p className='text-lg font-medium'>Informacje o stronie</p>
                        </div>


                        <h3 className="w-full font-medium text-md mt-10 mb-5 text-center ">Napisz proszę coś o sobie - czym zajmuje się Twoja firma?</h3>

                        <textarea name="O fimie:" className='border border-violet w-full min-w-full max-w-full min-h-[10rem] max-h-[20rem] p-3' value={about} onChange={ (e) => { setAbout(e.target.value) }}></textarea>
                        

                     </div>

                     {/* STEP 3 */}
                     <div id="step-3" className={`flex-wrap justify-between max-w-[61.25rem] mx-auto flex mb-16`}>


                        <div className="flex w-full justify-center items-center mb-10">
                              <Image 
                                 src="/3.svg"
                                 alt="ikona"
                                 width={40}
                                 height={40}
                                 className='mr-4'
                              />
                              <p className='text-lg font-medium'>Rodzaj strony internetowej</p>
                        </div>

                        <label className='w-full lg:w-1/2 mt-6 xs:mt-12 cursor-pointer text-center relative'>
                           <input type="radio" name="Rodzaj strony:" className="opacity-0 absolute" value="one page" onChange={ (e) => { setType('one page') }} /><span className='h-[1rem] w-[1rem] inline-block rounded-full border mr-3 border-violet'></span> Strona typu one page

                           <p className=' mt-5 text-base italic'>W formie jednej, długiej strony z sekcjami, bez zakładek<br/>
                           <a className="text-violet" target="_blank" href="https://marlily.github.io/foodie/">Zobacz przykład</a>
                           </p>
                        </label>

                        <label className='w-full lg:w-1/2 mt-6 xs:mt-12 cursor-pointer text-center relative'>
                           <input type="radio" name="Rodzaj strony:" className="opacity-0 absolute" value="strona z zakładkami"  onChange={ (e) => { setType('klasyczna strona') }}/><span className='h-[1rem] w-[1rem] inline-block rounded-full border border-violet mr-3'></span> Strona z zakładkami

                           <p className='mt-5 text-base italic'>Strona główna oraz podstrony<br/>
                           <a className="text-violet" target="_blank" href="https://tomekszostak.com/">Zobacz przykład</a>
                           </p>
                        </label>

                     </div>

                     {/* STEP 4 */}
                     <div id="step-4" className={`flex-wrap justify-between max-w-[61.25rem] mx-auto flex mb-16`}>


                        <div className="flex w-full justify-center items-center mb-10">
                              <Image 
                                 src="/4.svg"
                                 alt="ikona"
                                 width={40}
                                 height={40}
                                 className='mr-4'
                              />
                              <p className='text-lg font-medium'>Rodzaj menu</p>
                        </div>

                        <label className='w-full lg:w-1/2 mt-6 xs:mt-12 cursor-pointer text-center relative'>
                           <input type="radio" name="Menu:" value="brak" className="opacity-0 absolute" onChange={ (e) => { setMenu('brak') }}/><span className='h-[1rem] w-[1rem] inline-block rounded-full border mr-3 border-violet'></span> Brak (niezalecane)

                        </label>

                        <label className='w-full lg:w-1/2 mt-6 xs:mt-12 cursor-pointer text-center relative'>
                           <input type="radio" name="Menu:" value="standardowe u góry" className="opacity-0 absolute" onChange={ (e) => { setMenu('standoardowe góra') }}/><span className='h-[1rem] w-[1rem] inline-block rounded-full border mr-3 border-violet'></span> Standardowe u góry strony

                        </label>

                        <label className='w-full lg:w-1/2 mt-6 xs:mt-12 cursor-pointer text-center relative'>
                           <input type="radio" name="Menu:" value="standardowe z boku" className="opacity-0 absolute" onChange={ (e) => { setMenu('standardowe z boku') }}/><span className='h-[1rem] w-[1rem] inline-block rounded-full border mr-3 border-violet'></span> Standardowe z boku

                        </label>

                        <label className='w-full lg:w-1/2 mt-6 xs:mt-12 cursor-pointer text-center relative'>
                           <input type="radio" name="Menu:" value="hamburger" className="opacity-0 absolute" onChange={ (e) => { setMenu('hamburger') }}/><span className='h-[1rem] w-[1rem] inline-block rounded-full border mr-3 border-violet'></span> Hamburger - wysuwane po kliknięciu przycisku

                        </label>
                        

                     </div>


                     {/* STEP 5 */}
                     <div id="step-5" className={`flex-wrap justify-between max-w-[61.25rem] mx-auto flex mb-16`}>


                        <div className="flex w-full justify-center items-center mb-10">
                              <Image 
                                 src="/5.svg"
                                 alt="ikona"
                                 width={40}
                                 height={40}
                                 className='mr-4'
                              />
                              <p className='text-lg font-medium'>Podaj pozycje menu</p>
                        </div>

                        <label className='w-full lg:w-1/2 mt-6 xs:mt-12 cursor-pointer text-center relative'>
                           <input type="checkbox" name="Menu Strona główna" className="opacity-0 absolute"/><span className='h-[1rem] w-[1rem] inline-block border mr-3 border-violet'></span> Strona główna

                        </label>

                        <label className='w-full lg:w-1/2 mt-6 xs:mt-12 cursor-pointer text-center relative'>
                           <input type="checkbox" name="Menu O mnie" className="opacity-0 absolute"/><span className='h-[1rem] w-[1rem] inline-block border mr-3 border-violet'></span> O mnie/O nas

                        </label>

                        <label className='w-full lg:w-1/2 mt-6 xs:mt-12 cursor-pointer text-center relative'>
                           <input type="checkbox" name="Menu Oferta" className="opacity-0 absolute"/><span className='h-[1rem] w-[1rem] inline-block border mr-3 border-violet'></span> Oferta
                        </label>

                        <label className='w-full lg:w-1/2 mt-6 xs:mt-12 cursor-pointer text-center relative'>
                           <input type="checkbox" name="Menu Portfolio" className="opacity-0 absolute"/><span className='h-[1rem] w-[1rem] inline-block border mr-3 border-violet'></span> Portfolio
                        </label>

                        <label className='w-full lg:w-1/2 mt-6 xs:mt-12 cursor-pointer text-center relative'>
                           <input type="checkbox" name="Menu Galeria" className="opacity-0 absolute"/><span className='h-[1rem] w-[1rem] inline-block border mr-3 border-violet'></span> Galeria
                        </label>

                        <label className='w-full lg:w-1/2 mt-6 xs:mt-12 cursor-pointer text-center relative'>
                           <input type="checkbox" name="Menu Realizacje" className="opacity-0 absolute"/><span className='h-[1rem] w-[1rem] inline-block border mr-3 border-violet'></span> Realizacje
                        </label>

                        <label className='w-full lg:w-1/2 mt-6 xs:mt-12 cursor-pointer text-center relative'>
                           <input type="checkbox" name="Menu Blog" className="opacity-0 absolute"/><span className='h-[1rem] w-[1rem] inline-block border mr-3 border-violet'></span> Blog
                        </label>

                        <label className='w-full lg:w-1/2 mt-6 xs:mt-12 cursor-pointer text-center relative'>
                           <input type="checkbox" name="Menu Kontakt" className="opacity-0 absolute"/><span className='h-[1rem] w-[1rem] inline-block border mr-3 border-violet'></span> Kontakt
                        </label>

                        <h3 className="w-full font-medium text-md mt-10 mb-5 text-center ">Inne:</h3>

                        <textarea name="Menu pozycje inne:" className='border border-violet w-full min-w-full max-w-full min-h-[10rem] max-h-[20rem] p-3'></textarea>
                       

                     </div>


                  
                     {/* STEP 6 */}
                     <div id="step-6" className={`flex-wrap justify-between max-w-[61.25rem] mx-auto flex mb-16`}>


                        <div className="flex w-full justify-center items-center mb-10">
                              <Image 
                                 src="/6.svg"
                                 alt="ikona"
                                 width={40}
                                 height={40}
                                 className='mr-4'
                              />
                              <p className='text-lg font-medium'>Informacje o stronie</p>
                        </div>


                        <h3 className="w-full font-medium text-md mt-10 mb-5 text-center ">Opisz proszę swoje oczekiwania: co powinno znaleźć się na stronie?</h3>

                        <textarea name="Oczekiwania:" className='border border-violet w-full min-w-full max-w-full min-h-[10rem] max-h-[20rem] p-3' ></textarea>
                       

                     </div>



                     {/* STEP 7 */}
                     <div id="step-7" className={`flex-wrap justify-between max-w-[61.25rem] mx-auto flex mb-16`}>


                        <div className="flex w-full justify-center items-center mb-10">
                              <Image 
                                 src="/7.svg"
                                 alt="ikona"
                                 width={40}
                                 height={40}
                                 className='mr-4'
                              />
                              <p className='text-lg font-medium'>Styl i kolorystyka</p>
                        </div>


                        <h3 className="w-full font-medium text-md mt-10 mb-5 text-center ">W jakiej kolorystyce i stylu powinna być strona?</h3>

                        <textarea name="Styl strony:" className='border border-violet w-full min-w-full max-w-full min-h-[10rem] max-h-[20rem] p-3'></textarea>

                        <h3 className="w-full font-medium text-md mt-16 mb-3 text-center ">Opcjonalnie: Podaj linki do stron, którymi mogę się inspirować</h3>
                        <p className="w-full text-xs italic text-center mb-5">Polecam wejść na stronę Pinterest, wyszukać hasło "website design" - można tam zobaczyć wiele ciekawych projektów. <br/>Dzięki linkom łatwiej będzie mi zrozumieć Twoje oczekiwania</p>

                        <textarea name="Inspiracje:" className='border border-violet w-full min-w-full max-w-full min-h-[10rem] max-h-[20rem] p-3'></textarea>
                        

                     </div>



                     {/* STEP 8 */}
                     <div id="step-8" className={`flex-wrap justify-between max-w-[61.25rem] mx-auto flex`}>


                        <div className="flex w-full justify-center items-center mb-3">
                              <Image 
                                 src="/8.svg"
                                 alt="ikona"
                                 width={40}
                                 height={40}
                                 className='mr-4'
                              />
                              <p className='text-lg font-medium'>Ostatni krok - dodatkowe informacje</p>
                        </div>


                        <h3 className="w-full font-medium text-md mt-10 mb-5 text-center ">Jeśli masz dodatkowe informacje, wpisz je poniżej</h3>

                        <textarea name="Dodatkowe informacje:" className='border border-violet w-full min-w-full max-w-full min-h-[10rem] max-h-[20rem] p-3'></textarea>


                        <div className="w-full text-center mt-6">  
                           <input type="submit" value="Wyślij" className='mt-10 mx-auto bg-orange hover:bg-orange-hover hover:shadow-lg transition py-3 px-4 mr-3 text-xl font-second text-white cursor-pointer font-bold uppercase' />
                        </div>
                        

                     </div>
                  
                  
               </form>
            </div>
         </section>



     </>
  )
}
