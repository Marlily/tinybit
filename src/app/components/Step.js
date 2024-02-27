import Image from 'next/image';
import { motion } from "framer-motion"
  
export default function Step(props) {


    return (

        <motion.li className={`w-full lg:w-[17%] mx-auto flex flex-col ${props.customClass}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: props.delay }}
        >
        <figure className="h-[3rem] max-h-[3rem] min-h-[3rem] lg:h-[3rem] lg:max-h-[5.625rem] lg:min-h-[5.625rem] flex justify-center items-end mb-8">
            <Image
            src={props.img}
            width={87}
            height={90}
            alt="współpraca"
            className='max-h-full w-[54px] lg:w-[87px]'
          />
        </figure>

        <div className="h-full border-t-[0.125rem] border-b-[0.125rem] border-main text-center pt-4 pb-8 px-1 sm:px-2">
          <h3 className="text-base mb-4 font-deco font-bold">{props.title}</h3>
          <p className="text-xs sm:text-sm">{props.text}</p>
        </div>
      </motion.li>
 
    ); 
  }
  