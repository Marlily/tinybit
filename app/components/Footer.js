import Link from "next/link";
import Image from "next/image";

const Footer = () => {

    return (
        <footer className="relative">
            <div className="container flex flex-wrap">

                <div className="w-full flex items-center justify-between mb-20">
                    <Link href="/">
                        <Image
                            src="/logo-circle.png"
                            height={158}
                            width={146}
                            alt='image'
                            className=''
                        />
                    </Link>

                    <a target="_blank" href="https://instagram.com/tinybit_pages" className="translate-y-16">
                        <Image 
                            src="/instagram.svg"
                            width={50}
                            height={50}
                            className="brightness-200 invert"
                        />
                    </a>
                </div>

                <div className="w-full border-b-2 border-white flex flex-wrap align-center justify-between pb-7 lg:mb-0">
                    <a href="mailto:kontakt@tinybit.pl" className="text-xl text-white font-normal hover:text-orange transition mb-5">kontakt@tinybit.pl</a>
                    <nav>
                        <ul className="flex flex-wrap items-center gap-x-10">
                            <li><Link href="/kontakt" className="text-xl text-white uppercase font-normal border-b pb-1 border-transparent transition hover:border-white">Realizacje</Link></li>
                            <li><Link href="/kontakt" className="text-xl text-white uppercase font-normal border-b pb-1 border-transparent transition hover:border-white">Kontakt</Link></li>
                        </ul>
                    </nav>
                </div>

                <p className="m-0 text-xl font-light text-white py-6">copyright 2023</p>
                
                
    

            </div>

            <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="482" viewBox="0 0 1440 482" fill="none"
                className="w-auto lg:w-full h-auto absolute bottom-0 right-0 lg:left-0 -z-20 -mt-30"
            >
                <path d="M0 0C99.6383 146.333 378.826 406.4 698.469 276C1018.11 145.6 1326.67 139.667 1441 153V482H0V0Z" fill="#855BB8"/>
            </svg>

        </footer>
    )
}

export default Footer;