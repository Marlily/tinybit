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
            <div ref={ref2} className="container">
               <form action="/formularz" method="post" name="wycena" data-netlify="true" 
                  className={`transition delay-200 duration-400 ${isInView2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                     <div id="step-1" className={`flex-wrap justify-between max-w-[61.25rem] mx-auto ${activeStep=="step-1" ? 'flex' : 'hidden'}`}>
                        <input type="hidden" name="form-name" value="contact" />

                        <div className="flex w-full justify-center items-center mb-10">
                              <Image 
                                 src="/1.svg"
                                 alt="ikona"
                                 width={40}
                                 height={40}
                                 className='mr-4'
                              />
                              <p className='text-lg font-medium'>Podaj proszę dane kontaktowe</p>
                        </div>


                        <label className='custom-width-half mb-6 xs:mb-0'>
                           Imię i nazwisko*
                           <input type="text" name="name" className="w-full border-dark border p-3 mt-2" required/>
                        </label>

                        <label className='custom-width-half'>
                           E-mail*
                           <input type="email" name="email" className="w-full border-dark border p-3 mt-2" required/>
                        </label>

                        <button className='mt-10 mx-auto bg-orange hover:bg-orange-hover hover:shadow-lg transition py-3 px-4 text-xl font-second text-white cursor-pointer font-bold uppercase' onClick={ () => setActiveStep('step-2') }>Dalej</button>
                        
                     </div>

                     {/* STEP 2 */}
                     <div id="step-2" className={`flex-wrap justify-between max-w-[61.25rem] mx-auto ${activeStep=="step-2" ? 'flex' : 'hidden'}`}>


                        <div className="flex w-full justify-center items-center mb-10">
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

                        <textarea name="main-info" className='border border-violet w-full min-w-full max-w-full min-h-[10rem] max-h-[20rem] p-3'></textarea>


                        <div className="w-full text-center mt-6">
                           <button className='mt-10 mx-auto bg-blue hover:bg-blue-hover hover:shadow-lg transition py-3 px-4 mr-3 text-xl font-second text-white cursor-pointer font-bold uppercase' onClick={ () => setActiveStep('step-1') }>Wróć</button>
                           <button className='mt-10 mx-auto bg-orange hover:bg-orange-hover hover:shadow-lg transition py-3 px-4 text-xl font-second text-white cursor-pointer font-bold uppercase' onClick={ () => setActiveStep('step-3') }>Dalej</button>
                        </div>
                        

                     </div>

                     {/* STEP 3 */}
                     <div id="step-3" className={`flex-wrap justify-between max-w-[61.25rem] mx-auto ${activeStep=="step-3" ? 'flex' : 'hidden'}`}>


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

                        <label className='w-full lg:w-1/2 mt-6 xs:mt-12 cursor-pointer text-center'>
                           <input type="radio" name="type" required className="hidden"/><span className='h-[1rem] w-[1rem] inline-block rounded-full border mr-3 border-violet'></span> Strona typu one page

                           <p className=' mt-5 text-base italic'>W formie jednej, długiej strony z sekcjami, bez zakładek<br/>
                           <a className="text-violet" target="_blank" href="https://marlily.github.io/foodie/">Zobacz przykład</a>
                           </p>
                        </label>

                        <label className='w-full lg:w-1/2 mt-6 xs:mt-12 cursor-pointer text-center'>
                           <input type="radio" name="type" required className="hidden"/><span className='h-[1rem] w-[1rem] inline-block rounded-full border border-violet mr-3'></span> Strona z zakładkami

                           <p className='mt-5 text-base italic'>Strona główna oraz podstrony<br/>
                           <a className="text-violet" target="_blank" href="https://tomekszostak.com/">Zobacz przykład</a>
                           </p>
                        </label>

                        <div className="w-full text-center mt-6">
                           <button className='mt-10 mx-auto bg-blue hover:bg-blue-hover hover:shadow-lg transition py-3 px-4 mr-3 text-xl font-second text-white cursor-pointer font-bold uppercase' onClick={ () => setActiveStep('step-2') }>Wróć</button>
                           <button className='mt-10 mx-auto bg-orange hover:bg-orange-hover hover:shadow-lg transition py-3 px-4 text-xl font-second text-white cursor-pointer font-bold uppercase' onClick={ () => setActiveStep('step-4') }>Dalej</button>
                        </div>

                     </div>

                     {/* STEP 4 */}
                     <div id="step-4" className={`flex-wrap justify-between max-w-[61.25rem] mx-auto ${activeStep=="step-4" ? 'flex' : 'hidden'}`}>


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

                        <label className='w-full lg:w-1/2 mt-6 xs:mt-12 cursor-pointer text-center'>
                           <input type="radio" name="menu-brak" required className="hidden"/><span className='h-[1rem] w-[1rem] inline-block rounded-full border mr-3 border-violet'></span> Brak (niezalecane)

                        </label>

                        <label className='w-full lg:w-1/2 mt-6 xs:mt-12 cursor-pointer text-center'>
                           <input type="radio" name="menu-top" required className="hidden"/><span className='h-[1rem] w-[1rem] inline-block rounded-full border mr-3 border-violet'></span> Standardowe u góry strony

                        </label>

                        <label className='w-full lg:w-1/2 mt-6 xs:mt-12 cursor-pointer text-center'>
                           <input type="radio" name="menu-side" required className="hidden"/><span className='h-[1rem] w-[1rem] inline-block rounded-full border mr-3 border-violet'></span> Standardowe z boku

                        </label>

                        <label className='w-full lg:w-1/2 mt-6 xs:mt-12 cursor-pointer text-center'>
                           <input type="radio" name="menu-hamburger" required className="hidden"/><span className='h-[1rem] w-[1rem] inline-block rounded-full border mr-3 border-violet'></span> Hamburger - wysuwane po kliknięciu przycisku

                        </label>


                        <div className="w-full text-center mt-6">
                           <button className='mt-10 mx-auto bg-blue hover:bg-blue-hover hover:shadow-lg transition py-3 px-4 mr-3 text-xl font-second text-white cursor-pointer font-bold uppercase' onClick={ () => setActiveStep('step-3') }>Wróć</button>
                           <button className='mt-10 mx-auto bg-orange hover:bg-orange-hover hover:shadow-lg transition py-3 px-4 text-xl font-second text-white cursor-pointer font-bold uppercase' onClick={ () => setActiveStep('step-5') }>Dalej</button>
                        </div>
                        

                     </div>


                     {/* STEP 5 */}
                     <div id="step-5" className={`flex-wrap justify-between max-w-[61.25rem] mx-auto ${activeStep=="step-5" ? 'flex' : 'hidden'}`}>


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

                        <label className='w-full lg:w-1/2 mt-6 xs:mt-12 cursor-pointer text-center'>
                           <input type="checkbox" name="menu-home" required className="hidden"/><span className='h-[1rem] w-[1rem] inline-block border mr-3 border-violet'></span> Strona główna

                        </label>

                        <label className='w-full lg:w-1/2 mt-6 xs:mt-12 cursor-pointer text-center'>
                           <input type="checkbox" name="menu-about" required className="hidden"/><span className='h-[1rem] w-[1rem] inline-block border mr-3 border-violet'></span> O mnie/O nas

                        </label>

                        <label className='w-full lg:w-1/2 mt-6 xs:mt-12 cursor-pointer text-center'>
                           <input type="checkbox" name="menu-offer" required className="hidden"/><span className='h-[1rem] w-[1rem] inline-block border mr-3 border-violet'></span> Oferta
                        </label>

                        <label className='w-full lg:w-1/2 mt-6 xs:mt-12 cursor-pointer text-center'>
                           <input type="checkbox" name="menu-portfolio" required className="hidden"/><span className='h-[1rem] w-[1rem] inline-block border mr-3 border-violet'></span> Portfolio
                        </label>

                        <label className='w-full lg:w-1/2 mt-6 xs:mt-12 cursor-pointer text-center'>
                           <input type="checkbox" name="menu-gallery" required className="hidden"/><span className='h-[1rem] w-[1rem] inline-block border mr-3 border-violet'></span> Galeria
                        </label>

                        <label className='w-full lg:w-1/2 mt-6 xs:mt-12 cursor-pointer text-center'>
                           <input type="checkbox" name="menu-realizations" required className="hidden"/><span className='h-[1rem] w-[1rem] inline-block border mr-3 border-violet'></span> Realizacje
                        </label>

                        <label className='w-full lg:w-1/2 mt-6 xs:mt-12 cursor-pointer text-center'>
                           <input type="checkbox" name="menu-blog" required className="hidden"/><span className='h-[1rem] w-[1rem] inline-block border mr-3 border-violet'></span> Blog
                        </label>

                        <label className='w-full lg:w-1/2 mt-6 xs:mt-12 cursor-pointer text-center'>
                           <input type="checkbox" name="menu-contact" required className="hidden"/><span className='h-[1rem] w-[1rem] inline-block border mr-3 border-violet'></span> Kontakt
                        </label>

                        <h3 className="w-full font-medium text-md mt-10 mb-5 text-center ">Inne:</h3>

                        <textarea name="menu-others" className='border border-violet w-full min-w-full max-w-full min-h-[10rem] max-h-[20rem] p-3'></textarea>


                        <div className="w-full text-center mt-6">
                           <button className='mt-10 mx-auto bg-blue hover:bg-blue-hover hover:shadow-lg transition py-3 px-4 mr-3 text-xl font-second text-white cursor-pointer font-bold uppercase' onClick={ () => setActiveStep('step-4') }>Wróć</button>
                           <button className='mt-10 mx-auto bg-orange hover:bg-orange-hover hover:shadow-lg transition py-3 px-4 text-xl font-second text-white cursor-pointer font-bold uppercase' onClick={ () => setActiveStep('step-6') }>Dalej</button>
                        </div>
                        

                     </div>



                  
                     {/* STEP 6 */}
                     <div id="step-6" className={`flex-wrap justify-between max-w-[61.25rem] mx-auto ${activeStep=="step-6" ? 'flex' : 'hidden'}`}>


                        <div className="flex w-full justify-center items-center mb-10">
                              <Image 
                                 src="/5.svg"
                                 alt="ikona"
                                 width={40}
                                 height={40}
                                 className='mr-4'
                              />
                              <p className='text-lg font-medium'>Informacje o stronie</p>
                        </div>


                        <h3 className="w-full font-medium text-md mt-10 mb-5 text-center ">Opisz proszę swoje oczekiwania: co powinno znaleźć się na stronie?</h3>

                        <textarea name="page-informations" className='border border-violet w-full min-w-full max-w-full min-h-[10rem] max-h-[20rem] p-3'></textarea>


                        <div className="w-full text-center mt-6">
                           <button className='mt-10 mx-auto bg-blue hover:bg-blue-hover hover:shadow-lg transition py-3 px-4 mr-3 text-xl font-second text-white cursor-pointer font-bold uppercase' onClick={ () => setActiveStep('step-5') }>Wróć</button>
                           <button className='mt-10 mx-auto bg-orange hover:bg-orange-hover hover:shadow-lg transition py-3 px-4 text-xl font-second text-white cursor-pointer font-bold uppercase' onClick={ () => setActiveStep('step-7') }>Dalej</button>
                        </div>
                        

                     </div>




                     {/* STEP 7 */}
                     <div id="step-7" className={`flex-wrap justify-between max-w-[61.25rem] mx-auto ${activeStep=="step-7" ? 'flex' : 'hidden'}`}>


                        <div className="flex w-full justify-center items-center mb-10">
                              <Image 
                                 src="/5.svg"
                                 alt="ikona"
                                 width={40}
                                 height={40}
                                 className='mr-4'
                              />
                              <p className='text-lg font-medium'>Styl i kolorystyka</p>
                        </div>


                        <h3 className="w-full font-medium text-md mt-10 mb-5 text-center ">W jakiej kolorystyce i stylu powinna być strona?</h3>

                        <textarea name="style" className='border border-violet w-full min-w-full max-w-full min-h-[10rem] max-h-[20rem] p-3'></textarea>

                        <h3 className="w-full font-medium text-md mt-10 mb-3 text-center ">Opcjonalnie: Podaj linki do stron, którymi mogę się inspirować</h3>
                        <p className="w-full text-xs italic text-center mb-5">Polecam wejść na stronę Pinterest, wyszukać hasło "website design" - można tam zobaczyć wiele ciekawych projektów. <br/>Dzięki linkom łatwiej będzie mi zrozumieć Twoje oczekiwania</p>

                        <textarea name="urls" className='border border-violet w-full min-w-full max-w-full min-h-[10rem] max-h-[20rem] p-3'></textarea>


                        <div className="w-full text-center mt-6">
                           <button className='mt-10 mx-auto bg-blue hover:bg-blue-hover hover:shadow-lg transition py-3 px-4 mr-3 text-xl font-second text-white cursor-pointer font-bold uppercase' onClick={ () => setActiveStep('step-6') }>Wróć</button>
                           <button className='mt-10 mx-auto bg-orange hover:bg-orange-hover hover:shadow-lg transition py-3 px-4 text-xl font-second text-white cursor-pointer font-bold uppercase' onClick={ () => setActiveStep('step-8') }>Dalej</button>
                        </div>
                        

                     </div>



                     {/* STEP 8 */}
                     <div id="step-8" className={`flex-wrap justify-between max-w-[61.25rem] mx-auto ${activeStep=="step-8" ? 'flex' : 'hidden'}`}>


                        <div className="flex w-full justify-center items-center mb-10">
                              <Image 
                                 src="/5.svg"
                                 alt="ikona"
                                 width={40}
                                 height={40}
                                 className='mr-4'
                              />
                              <p className='text-lg font-medium'>Ostatni krok - dodatkowe informacje</p>
                        </div>


                        <h3 className="w-full font-medium text-md mt-10 mb-5 text-center ">Jeśli masz dodatkowe informacje, wpisz je poniżej</h3>

                        <textarea name="others" className='border border-violet w-full min-w-full max-w-full min-h-[10rem] max-h-[20rem] p-3'></textarea>


                        <div className="w-full text-center mt-6">
                           <button className='mt-10 mx-auto bg-blue hover:bg-blue-hover hover:shadow-lg transition py-3 px-4 mr-3 text-xl font-second text-white cursor-pointer font-bold uppercase' onClick={ () => setActiveStep('step-7') }>Wróć</button>
                           <input type="submit" value="Wyślij" className='mt-10 mx-auto bg-orange hover:bg-orange-hover hover:shadow-lg transition py-3 px-4 mr-3 text-xl font-second text-white cursor-pointer font-bold uppercase' />
                        </div>
                        

                     </div>
                  
                  
               </form>
            </div>
         </section>



     </>
  )
}
