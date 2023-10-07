'use client'

import Image from 'next/image'
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function Offer() {

   const ref = useRef(null);
   const ref2 = useRef(null);
   const ref3 = useRef(null);
   const isInView = useInView(ref);
   const isInView2 = useInView(ref2);
   const isInView3 = useInView(ref3);

  return (
     <>
         <header className='bg-light-gray pt-5 pb-10 lg:pt-16 lg:pb-24 shadow-2xl'>
            <div className="container flex flex-wrap">

               <div className="w-full">
                  <h1 className="text-5xl lg:text-7xl font-second font-bold uppercase">Oferta <span className='text-orange block lg:inline text-3xl lg:text-5xl'>strony internetowe</span></h1>

               </div>
            </div>
         </header>

         <section id="offer" className='pt-20 lg:pt-36 pb-16 lg:pb-28 relative'>
            <div ref={ref} className="container">
               <div className="xl:w-5/6 flex flex-wrap mx-auto">
                  <div className={`w-full lg:w-1/2 text-center lg:px-10 transition duration-300 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                     <h3 className={`uppercase text-4xl text-dark font-semibold font-second mb-7`}>Strona wizytówkowa</h3>
                     <p className="text-[2rem] mb-12">od <span className='font-bold text-violet'>1500 zł</span> netto</p>
                     <ul className="list-none p-0 m-0">
                        <li className="text-dark text-xl mb-8 before:content-[''] before:w-[0.625rem] before:h-[0.625rem] before:inline-block before:bg-orange before:rounded-full before:mr-4">Nowoczesna</li>
                        <li className="text-dark text-xl mb-8 before:content-[''] before:w-[0.625rem] before:h-[0.625rem] before:inline-block before:bg-orange before:rounded-full before:mr-4">Profesjonalna</li>
                        <li className="text-dark text-xl before:content-[''] before:w-[0.625rem] before:h-[0.625rem] before:inline-block before:bg-orange before:rounded-full before:mr-4">Łatwa w obsłudze</li>
                     </ul>
                  </div>
                  <div className={`w-full lg:w-1/2 text-center lg:px-10 mt-20 lg:mt-0 transition duration-300 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                     <h3 className="uppercase text-4xl text-dark font-semibold font-second mb-7">Opieka nad stroną</h3>
                     <p className="text-[2rem] mb-12"><span className='font-bold text-violet'>150 zł</span> netto <span className="text-xl">/miesięcznie</span></p>
                     <ul className="list-none p-0 m-0">
                        <li className="text-dark text-xl mb-8 before:content-[''] before:w-[0.625rem] before:h-[0.625rem] before:inline-block before:bg-orange before:rounded-full before:mr-4">Aktualizacja wtyczek</li>
                        <li className="text-dark text-xl mb-8 before:content-[''] before:w-[0.625rem] before:h-[0.625rem] before:inline-block before:bg-orange before:rounded-full before:mr-4">Sprawdzenie zabezpieczeń</li>
                        <li className="text-dark text-xl before:content-[''] before:w-[0.625rem] before:h-[0.625rem] before:inline-block before:bg-orange before:rounded-full before:mr-4">Szybka pomoc w razie awarii</li>
                        <li className="text-md mt-10 leading-4 lg:px-10 xl:px-20 italic">Edycja, dodawanie zmian na&nbsp;stronie wyceniane są&nbsp;dodatkowo</li>
                     </ul>
                  </div>

                  <div className={`w-full text-center mt-12 transition duration-700 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
                     <Link href="/kontakt" className="inline-block bg-orange hover:bg-orange-hover hover:shadow-lg transition py-2 px-3 text-xl font-second text-white font-bold uppercase">Poproś o darmową wycenę</Link>
                  </div>
               </div>

            </div>

            <div className="rounded-full w-[14.8rem] h-[14.3rem] bg-violet absolute -left-48 lg:-left-36 bottom-20"></div>
         </section>

         <section className='relative py-10'>

            <div className="w-full h-[8.5rem] lg:h-[15.4rem] bg-light-gray absolute top-0 left-0 -z-10"></div>

            <div className={`container transition delay-100 duration-500 ${isInView2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
               <h2 className="uppercase text-4xl lg:text-5xl font-second font-semibold w-full text-center mb-6 lg:mb-12">STRONA INTERNETOWA<br/>DOPASOWANA DO TWOJEJ FIRMY</h2>

               <div ref={ref2} className="bg-white shadow-xl py-8 px-8 lg:px-24 mb-10 lg:mb-32">
                  <p>Tworzę wizytówki internetowe dla firm z naciskiem na <span className="text-violet font-medium">ciekawy design</span>. Moja strona pozwoli na zbudowanie profesjonalnego wizerunku w sieci - wygląd będzie dostosowany do branży.
                  <br /><br />
                  Strony, które tworze <span className="text-violet font-medium">nie są</span> budowane na gotowych motywach WordPress - tworzę je od zera. Dlaczego to ważne? Taka strona pozbawiona będzie niepotrzebnego kodu, który niekorzystnie wpływa na jej działanie. Możesz więc liczyć na <span className="text-violet font-medium">szybkość</span> i najlepszą funkcjonalność.
                  <br /><br />
                  Tworząc stronę dla Ciebie będę również przykładać wagę do poprawności kodu pod względem SEO.</p>
               </div>
            </div>

         </section>

         <section className='pb-20 lg:pb-32 relative overflow-hidden'>

            <div className="rounded-full w-[9rem] h-[9rem] bg-pink absolute -right-6 top-36"></div>
            <div className="rounded-full w-[4rem] h-[4rem] bg-green absolute right-5 top-[20rem]"></div>

            <div className="container">
               <div className="lg:w-5/6 mx-auto">
               <h2 className={`uppercase text-4xl lg:text-5xl font-second font-semibold w-full text-center mb-12 lg:mb-24 transition duration-400 ${isInView3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Jak przebiega współpraca?</h2>
               <ul ref={ref3} className="list-none p-0 m-0">
                  <li className={`flex mb-8 items-center transition delay-[200ms] duration-400 ${isInView3 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                     <figure className='w-[65px] mr-5'>
                        <Image
                           src="/1.svg"
                           height={50}
                           width={43}
                           alt='number'
                           className='w-auto'
                        />
                     </figure>
                     <div className="pb-1">
                        <h3 className='text-2xl lg:text-4xl font-second font-semibold'>USTALENIE SZCZEGÓŁÓW</h3>
                        <p className='text-base'>Kontaktuję się w celu przeprowadzenia wywiadu - ustalamy szczegóły dotyczące treści i wyglądu</p>
                     </div>
                  </li>

                  <li  className={`flex mb-8 items-center transition delay-[300ms] duration-400 ${isInView3 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                     <figure className='w-[65px] mr-5'>
                        <Image
                           src="/2.svg"
                           height={50}
                           width={43}
                           alt='number'
                           className='w-auto'
                        />
                     </figure>
                     <div className="pb-1">
                        <h3 className='text-2xl lg:text-4xl font-second font-semibold uppercase'>Indywidualny projekt</h3>
                        <p className='text-base'>Przygotowuję projekt graficzny, a następnie dokonuję poprawek po Twoich uwagach</p>
                     </div>
                  </li>

                  <li className={`flex mb-8 items-center transition delay-[400ms] duration-400 ${isInView3 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                     <figure className='w-[65px] mr-5'>
                        <Image
                           src="/3.svg"
                           height={50}
                           width={43}
                           alt='number'
                           className='w-auto'
                        />
                     </figure>
                     <div className="pb-1">
                        <h3 className='text-2xl lg:text-4xl font-second font-semibold uppercase'>Realizacja</h3>
                        <p className='text-base'>To etap programowania - tworzę stronę według zaakceptowanego projektu</p>
                     </div>
                  </li>

                  <li className={`flex mb-8 items-center transition delay-[500ms] duration-400 ${isInView3 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                     <figure className='w-[65px] mr-5'>
                        <Image
                           src="/4.svg"
                           height={50}
                           width={43}
                           alt='number'
                           className='w-auto'
                        />
                     </figure>
                     <div className="pb-1">
                        <h3 className='text-2xl lg:text-4xl font-second font-semibold uppercase'>Publikacja</h3>
                        <p className='text-base'>Publikuję stronę umieszczając ją na wybranym hosingu, podpinam domenę</p>
                     </div>
                  </li>

                  <li className={`flex mb-8 items-center transition delay-[600ms] duration-400 ${isInView3 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                     <figure className='w-[65px] mr-5'>
                        <Image
                           src="/5.svg"
                           height={50}
                           width={43}
                           alt='number'
                           className='w-auto'
                        />
                     </figure>
                     <div className="pb-1">
                        <h3 className='text-2xl lg:text-4xl font-second font-semibold uppercase'>Gotowe!</h3>
                        <p className='text-base'>Każdy klient może już wejść na Twoją stronę :)</p>
                     </div>
                  </li>
               </ul>

               <div className="w-full text-center mt-10 lg:mt-24">
                     <Link href="/kontakt" className="inline-block bg-green hover:bg-green-hover hover:shadow-lg transition py-2 px-3 text-xl font-second text-white font-bold uppercase">Poproś o darmową wycenę</Link>
                  </div>
            </div>
            </div>
         </section>
     </>
  )
}
