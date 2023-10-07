'use client'

import Image from 'next/image'
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function Home() {

  const ref = useRef(null);
  const ref2 = useRef(null);
  const isInView = useInView(ref);
  const isInView2 = useInView(ref2);

  return (
     <>
      <header className='bg-light-gray pt-4 lg:pt-24 pb-28 shadow-2xl'>
        <div className="container flex flex-wrap">

          <motion.div className="w-full lg:w-1/2 order-1 lg:order-none"
                    initial={{ x: "50%", opacity: 0 }}
                    animate={{ x: "0", opacity: 1 }}
          >
            <h1 className="text-4xl md:text-7xl font-second font-bold mb-5 mt-6 md:mt-0">Cześć!<br />Jestem Martyna</h1>
            <p className="text-2xl md:text-3xl max-w-[35.6rem] mb-5">Stworzę dla Ciebie <span className="text-pink font-medium">oryginalną</span> stronę internetową - od projektu po publikację strony w sieci.</p>
            {/* <p className="text-xl md:text-2xl max-w-[35.6rem]">Wybierz jedną z <span className="font-medium">gotowych stron internetowych</span> lub&nbsp;<span className="font-medium">stworzenie indywidualnego projektu.</span></p> */}

            <Link href="/oferta" className="inline-block bg-orange hover:bg-orange-hover hover:shadow-lg transition py-2 px-3 text-xl font-second mr-5 text-white font-bold uppercase mt-12">Oferta</Link>
            <Link href="/#realizacje" className="inline-block bg-green hover:bg-green-hover hover:shadow-lg transition py-2 px-3 text-xl font-second text-white font-bold uppercase mt-6">Realizacje</Link>
          </motion.div>

          <motion.div className="w-1/2 ml-auto -mb-10"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            <Image
              src="/logo-circle.png"
              height={417}
              width={385}
              alt='image'
              className='mx-auto'
            />
          </motion.div>
        </div>
      </header>

      <section className="pt-20 lg:pt-28 pb-20 lg:pb-24 relative">

        <div className="rounded-full w-[14.8rem] h-[14.3rem] bg-violet absolute -left-48 lg:-left-40 top-14"></div>

        <div ref={ref} className={`container flex flex-wrap transition duration-300 delay-500 ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="font-second uppercase text-5xl font-semibold w-full text-center mb-6 lg:mb-32" 
              initial={{ y: "50%", opacity: "0" }}
              animate={{ y: "0", opacity: "1" }}
            >Firmowe wizytówki dla&nbsp;firm</h2>
            <div className="w-full lg:w-1/2 mt-12 lg:mt-0 mb-20 lg:mb-0">
              <p className="text-xl font-light mb-6">Tworzę wizytówki internetowe dla firm z naciskiem na ciekawy design. Taka strona pomoże Ci budować profesjonalny wizerunek w sieci.</p>
              <h3 className="text-xl font-semibold mb-3">Nowoczesny design</h3>
              <p className="text-xl font-light mb-6">Projektuję oryginalne rozwiązania dostosowane do  potrzeb i gustu.</p>
              <h3 className="text-xl font-semibold mb-3">Prosta obsługa w WordPress</h3>
              <p className="text-xl font-light">Otrzymasz stronę wykonaną na najpopularniejszym systemie CMS - WordPress, co pozwoli na łatwą i intuicyjną edycję treści.</p>
              <Link href="/oferta" className="inline-block bg-orange hover:bg-orange-hover hover:shadow-lg transition py-2 px-3 text-xl font-second mr-5 text-white font-bold uppercase mt-12">Sprawdź ofertę</Link>
            </div>

            <ul className="w-full lg:w-1/2 p-0 m-0 flex flex-wrap items-start gap-y-12 lg:gap-y-0">
              <li className='w-1/2 text-center'>
                <figure className="h-[3.5rem] lg:h-[5rem] relative mb-4">
                <Image 
                  src="/1.svg"
                  alt="ikona"
                  fill
                  className='mx-auto mb-6 h-full w-auto'
                />
                </figure>

                <h3 className="font-second uppercase font-medium text-xl">Nowoczesny<br />design</h3>
              </li>

              <li className='w-1/2 text-center'>
              <figure className="h-[3.5rem] lg:h-[5rem] relative mb-4">
                <Image 
                  src="/2.svg"
                  alt="ikona"
                  fill
                  className='mx-auto mb-6 h-full w-auto'
                />
                </figure>
                <h3 className="font-second uppercase font-medium text-xl">Szybkość<br />działania</h3>
              </li>

              <li className='w-1/2 text-center'>
              <figure className="h-[3.5rem] lg:h-[5rem] relative mb-4">
                <Image 
                  src="/3.svg"
                  alt="ikona"
                  fill
                  className='mx-auto mb-6 h-full w-auto'
                />
                </figure>
                <h3 className="font-second uppercase font-medium text-xl">Na wszystkie<br />urządzenia</h3>
              </li>

              <li className='w-1/2 text-center'>
              <figure className="h-[3.5rem] lg:h-[5rem] relative mb-4">
                <Image 
                  src="/4.svg"
                  alt="ikona"

                  fill
                  className='mx-auto mb-6 h-full w-auto'
                />
                </figure>
                <h3 className="font-second uppercase font-medium text-xl">Łatwa<br />w zarządzaniu</h3>
              </li>
            </ul>

        </div>

      </section>

      <section ref={ref2} className="py-14 relative mb-5 lg:mb-16" id="realizacje">

        <div className="absolute w-full h-[20.3rem] bg-light-gray top-0 -z-10 "></div>

        <div className="container flex flex-wrap">

          <h2 className="uppercase font-second text-5xl font-semibold w-full text-center mb-20">Ostatnie realizacje</h2>

          <figure className={`lg:w-1/2 lg:pr-4 transition duration-500 delay-500 ${isInView2 ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
            <Image 
              src="/project1.png"
              alt="project"
              height={519}
              width={519}
              className='p-6 bg-white shadow-xl mx-auto w-full'
            />
          </figure>

          <figure className={`lg:w-1/2 lg:pl-4 mt-5 lg:mt-0 transition duration-500 delay-700 ${isInView2 ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
            <Image 
              src="/project2.png"
              alt="project"
              height={519}
              width={519}
              className='p-6 bg-white shadow-xl mx-auto w-full'
            />
          </figure>

          

        </div>
      </section>
     </>
  )
}
