import Image from 'next/image'
import Link from "next/link";

export default function Home() {
  return (
     <>
      <header className='bg-light-gray pt-4 lg:pt-24 pb-28 shadow-2xl'>
        <div className="container flex flex-wrap">


          <div className="w-full lg:w-1/2 order-1">
            <h1 className="text-7xl font-second font-bold mb-5">Cześć!<br />Jestem Martyna</h1>
            <p className="text-3xl max-w-[35.6rem] mb-5">Stworzę dla Ciebie <span className="text-pink font-medium">oryginalną</span> stronę internetową - od projektu po publikację strony w sieci.</p>
            <p className="text-2xl max-w-[35.6rem]">Wybierz jedną z <span className="font-medium">gotowych stron internetowych</span> lub&nbsp;<span className="font-medium">stworzenie indywidualnego projektu.</span></p>

            <Link href="/projekty" className="inline-block bg-orange hover:bg-orange-hover hover:shadow-lg transition py-2 px-3 text-xl font-second mr-5 text-white font-bold uppercase mt-12">Oferta</Link>
            <Link href="/#kontakt" className="inline-block bg-green hover:bg-green-hover hover:shadow-lg transition py-2 px-3 text-xl font-second text-white font-bold uppercase mt-6">Kontakt</Link>
          </div>

          <div className="w-1/2 ml-auto -mb-10">
            <Image
              src="/logo-circle.png"
              height={417}
              width={385}
              alt='image'
              className='mx-auto'
            />
          </div>
        </div>
      </header>

      <section className="pt-20 lg:pt-28 pb-20 lg:pb-24 relative">

        <div className="rounded-full w-[14.8rem] h-[14.3rem] bg-violet absolute -left-40 top-14"></div>

        <div className="container flex flex-wrap">
            <h2 className="uppercase text-5xl font-semibold w-full text-center mb-6 lg:mb-32">Firmowa wizytówka</h2>
            <div className="w-full lg:w-1/2 mt-12 lg:mt-0 mb-20 lg:mb-0">
              <p className="text-xl font-light mb-6">Tworzę wizytówki internetowe dla firm z naciskiem na ciekawy design. Moja strona pozwoli na zbudowanie profesjonalnego wizerunku w sieci.</p>
              <h3 className="text-xl font-semibold mb-3">Nowoczesny design</h3>
              <p className="text-xl font-light mb-6">Tworzę wizytówki internetowe dla firm z naciskiem na ciekawy design. Moja strona pozwoli na zbudowanie profesjonalnego wizerunku w sieci.</p>
              <h3 className="text-xl font-semibold mb-3">Łatwa obsługa w WordPress</h3>
              <p className="text-xl font-light">Otrzymasz stronę wykonaną na najpopularniejszym systemie CMS - WordPress. Dzięki temu edycja treści będzie dla Ciebie wyjątkowo prosta i intuicyjna.</p>
              <Link href="/projekty" className="inline-block bg-orange hover:bg-orange-hover hover:shadow-lg transition py-2 px-3 text-xl font-second mr-5 text-white font-bold uppercase mt-12">Sprawdź ofertę</Link>
            </div>

            <ul className="w-full lg:w-1/2 p-0 m-0 flex flex-wrap items-start gap-y-12 lg:gap-y-0">
              <li className='w-1/2 text-center'>
                <figure className="h-[5rem] relative mb-4">
                <Image 
                  src="/1.svg"
                  alt="ikona"
                  fill
                  className='mx-auto mb-6 h-full w-auto'
                />
                </figure>

                <h3 className="uppercase font-medium text-xl">Nowoczesny<br />design</h3>
              </li>

              <li className='w-1/2 text-center'>
              <figure className="h-[5rem] relative mb-4">
                <Image 
                  src="/2.svg"
                  alt="ikona"
                  fill
                  className='mx-auto mb-6 h-full w-auto'
                />
                </figure>
                <h3 className="uppercase font-medium text-xl">Szybkość<br />działania</h3>
              </li>

              <li className='w-1/2 text-center'>
              <figure className="h-[5rem] relative mb-4">
                <Image 
                  src="/3.svg"
                  alt="ikona"
                  fill
                  className='mx-auto mb-6 h-full w-auto'
                />
                </figure>
                <h3 className="uppercase font-medium text-xl">Na wszystkie<br />urządzenia</h3>
              </li>

              <li className='w-1/2 text-center'>
              <figure className="h-[5rem] relative mb-4">
                <Image 
                  src="/4.svg"
                  alt="ikona"

                  fill
                  className='mx-auto mb-6 h-full w-auto'
                />
                </figure>
                <h3 className="uppercase font-medium text-xl">Łatwa<br />w zarządzaniu</h3>
              </li>
            </ul>

        </div>

      </section>

      <section className="py-14 relative">

        <div className="absolute w-full h-[20.3rem] bg-light-gray top-0 -z-10 "></div>

        <div className="container flex flex-wrap">

          <h2 className="uppercase text-5xl font-semibold w-full text-center mb-20">Firmowa wizytówka</h2>

          <figure className='w-1/2 pr-4'>
            <Image 
              src="/project1.png"
              alt="project"
              height={519}
              width={519}
              className='p-6 bg-white shadow-xl mx-auto w-full'
            />
          </figure>

          <figure className='w-1/2 pl-4'>
            <Image 
              src="/project2.png"
              alt="project"
              height={519}
              width={519}
              className='p-6 bg-white shadow-xl mx-auto w-full'
            />
          </figure>

          <div className="w-full text-center mt-16">
            {/* <Link href="/projekty" className="inline-block bg-orange hover:bg-orange-hover hover:shadow-lg transition py-4 px-8 text-xl font-second text-white font-bold uppercase mx-auto">Więcej projektów</Link> */}
          </div>

          

        </div>
      </section>
     </>
  )
}
