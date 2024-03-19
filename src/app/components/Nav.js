export default function Nav(props) {


    return (

        <nav className="w-full flex justify-between px-9 py-8 z-50 flex-wrap">
            <p className="text-3xl text-center lg:text-4xl lg:text-left font-deco w-full lg:w-auto mb-6 lg:mb-0">TinyBitCreations</p>

            <ul className="flex flex-wrap justify-between items-center mx-auto lg:ml-auto lg:mr-0">
                <li className="lg:pl-[37px] text-sm cursor-pointer" onClick={() => props.fullpageApi.moveTo(3)}>Oferta</li>
                <li className="lg:pl-[37px] text-sm cursor-pointer" onClick={() => props.fullpageApi.moveTo(4)}>Cennik</li>
                <li className="lg:pl-[37px] text-sm cursor-pointer" onClick={() => props.fullpageApi.moveTo(5)}>Realizacje</li>
                <li className="lg:pl-[37px] text-sm cursor-pointer" onClick={() => props.fullpageApi.moveTo(6)}>Kontakt</li>
                <li className="lg:pl-[37px] text-sm w-full text-center mt-5 lg:mt-0 lg:text-left lg:w-auto">
                    <a href="#" className="inline-flex cursor-pointer font-deco text-base py-[9px] px-[19px] relative border border-white uppercase transition hover:-translate-y-1 after:content-[''] after:w-4/5 after:h-px after:bg-white after:opacity-0 hover:after:opacity-100 after:block after:absolute after:-bottom-2 after:left-4 after:transition" onClick={() => props.fullpageApi.moveTo(6)}>Poproś o wycenę</a>
                </li>
            </ul>
        </nav>

  
  
    ); 
  }
  