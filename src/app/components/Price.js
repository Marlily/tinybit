import Image from 'next/image';
import { motion } from "framer-motion"
  
export default function Price(props) {


    return (

        <motion.li className={`w-full lg:w-[28%] mx-auto ${props.customClass}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: props.delay }}
        >

        <div className="h-full border-[0.125rem] border-main text-center px-6 md:px-10 py-8  flex flex-col">
          <h3 className="text-xl mb-4 font-deco font-bold">{props.title}</h3>
          <p className="text-xs sm:text-sm">{props.text}</p>

          <ul class={`list-disc text-xs sm:text-sm text-left mt-8 ml-3 mb-4 ${props.hideList == "true" ? 'hidden' : ''}`}>
            <li class="mb-2">Indywidualny projekt graficzny</li>
            <li class="mb-2">Łatwa edycja - strona wykonana w WordPress</li>
            <li class="mb-2">Przygotowana pod SEO</li>
            <li class="mb-2">Szybka w działaniu</li>
          </ul>

          <ul class={`list-disc text-xs sm:text-sm text-left mt-8 ml-3 mb-4 ${props.hideList !== "true" ? 'hidden' : ''}`}>
            <li class="mb-2">Aktualizacja Wtyczek</li>
            <li class="mb-2">Sprawdzenie zabezpieczeń</li>
            <li class="mb-2">Wprwowadzenie poprawek</li>
            <li class="mb-2">Naprawa w razie awarii</li>
          </ul>

          <p class="text-2xl mt-auto ">od <span class="font-bold text-main text-3xl">{props.price}</span></p>
        </div>
      </motion.li>
 
    ); 
  }
  