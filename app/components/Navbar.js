'use client'

import Link from "next/link";
import Logo from './Logo';
import { useState } from "react";

const Navbar = () => {

    const [menu, setMenu] = useState(false);

    return (
        <nav className="py-10 bg-light-gray z-50 relative">
            <div className="container flex flex-wrap lg:flex-nowrap items-center ">
                <Link href="/" className="z-50">
                    <Logo />
                </Link>

                <ul className={`ml-auto flex flex-col lg:justify-end lg:mr-12 lg:flex-row gap-x-7 w-full text-right pt-5 lg:pt-0 z-40 bg-light-gray order-1 lg:order-none transition-[margin] ${menu ? 'mt-0' : 'mt-[-27rem] lg:mt-0'}`}>
                    <li>
                        <Link href="/" className="font-second uppercase font-medium text-dark text-xl lg:text-base relative after:content-[''] after:absolute after:block after:transition-[width] after:w-0 after:bg-dark after:h-px hover:after:w-full after:opacity-0 lg:after:opacity-100">Strona główna</Link>
                    </li>

                    <li>
                        <Link href="/oferta" className="font-second uppercase font-medium text-dark text-xl lg:text-base relative after:content-[''] after:absolute after:block after:transition-[width] after:w-0 after:bg-dark after:h-px hover:after:w-full after:opacity-0 lg:after:opacity-100">Oferta</Link>
                    </li>
                    
                    <li>
                        <Link href="/oferta" className="font-second uppercase font-medium text-dark text-xl lg:text-base relative after:content-[''] after:absolute after:block after:transition-[width] after:w-0 after:bg-dark after:h-px hover:after:w-full after:opacity-0 lg:after:opacity-100"></Link>
                    </li>

                    <li className="mt-3">
                        <Link href="/kontakt" className="bg-blue font-second lg:hidden whitespace-nowrap text-white font-bold py-2 px-3 uppercase text-lghover:shadow-lg hover:bg-blue-hover transition">Darmowa wycena</Link>
                    </li>
                    
                
                </ul> 

                <button className="w-8 h-6 flex flex-col ml-auto lg:mr-7 justify-between lg:hidden z-50" onClick={ () => { menu ? setMenu(false) : setMenu(true) } } >
                    <span className="w-full h-[2px] block bg-dark"></span>
                    <span className="w-full h-[2px] block bg-dark"></span>
                    <span className="w-full h-[2px] block bg-dark"></span>
                </button>

                <Link href="/kontakt" className="bg-blue font-second hidden lg:block whitespace-nowrap text-white font-bold py-2 px-6 uppercase text-xl hover:shadow-lg hover:bg-blue-hover transition">Darmowa wycena</Link>
            </div>

        </nav>
    )
}

export default Navbar;