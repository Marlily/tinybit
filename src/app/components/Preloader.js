import { motion } from "framer-motion"

export default function Preloader(props) {


    return (

        <div 
            className={`w-full h-full bg-main fixed top-0 left-0 z-50 flex justify-center items-center transition-opacity duration-500 ${props.pageLoading ? 'opacity-0 preloader-hide' : ''}`} 
        >
                
                <p className="text-3xl lg:text-5xl font-deco text-white">TinyBitCreations</p>

        </div>
 
    ); 
  }
   