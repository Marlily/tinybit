'use client'
import {useState, useEffect} from 'react';
import Image from "next/image";
import ReactFullpage from '@fullpage/react-fullpage';
import Nav from './components/Nav';
import ScrollUp from './components/ScrollUp';
import Step from './components/Step';
import Preloader from './components/Preloader';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-creative';
import { Navigation, EffectCreative } from 'swiper/modules';

export default function Home() {

  const [pageLoading, setPageLoading] = useState(false);

  useEffect(() => {
    setPageLoading(true);
  }, [])



  return (

    <ReactFullpage
    scrollingSpeed = {800}
    navigation

    render={({ state, fullpageApi }) => {
      return (
                <ReactFullpage.Wrapper>
                  <header className="section section-header text-white bg-main justify-start">
                    <Nav fullpageApi={fullpageApi} />
                    <div className="flex-grow w-full flex flex-col justify-center items-center -mt-20">
                      <h2 className="text-[1.8rem] lg:text-[48px] font-thin uppercase">Firmowe</h2>
                      <h1 className="text-[2.5rem] lg:text-[96px] font-deco uppercase">Strony internetowe</h1>
                      <ul className="text-base text-center font-thin uppercase flex lg:gap-10 flex-col lg:flex-row">
                        <li>Indywidualny projekt</li>
                        <li>Nowoczesny design</li>
                        <li>Szybkie działanie</li>
                      </ul>
                    </div>

                    <Image
                    src="/images/scroll-mouse.svg"
                    width={40}
                    height={101}
                    alt="scroll up"
                    className="mx-auto mb-4"
                   />

                  </header>

                  <section className="section">
                    <div className="container mx-auto flex flex-wrap lg:flex-nowrap">
                        <Image
                        src="/images/about.png"
                        width={354}
                        height={382}
                        alt="logo"
                        className="mx-auto h-[382px] scale-75 lg:scale-100"
                      />

                      <div className="p-8 lg:pl-12">
                        <h2 className="text-4xl font-deco font-bold mb-10 text-center lg:text-left mt-10 lg:mt-0">MARTYNA BANAŚ</h2>
                        <p className="text-base mb-8">Cześć! Zajmuję się tworzeniem indywidualnych stron firmowych.<br/>
                        Wykonam dla Ciebie szybką, nowoczesną i łatwą w zarządzaniu stronę dopasowaną do Twojego bizesu.
                        </p>
                      

                        <ul className="text-base list-disc pl-6">
                          <li className="mb-2">Nowoczesny design, który przyciągnie uwagę Twoich klientów</li>
                          <li className="mb-2">RWD - strona dopasowana do wszystkich urządzeń</li>
                          <li className="mb-2">SEO - prawidłowe przygotowanie do dobrego pozycjonowania</li>
                          <li className="">Łatwa obsługa w CMS WordPress - z łatwością samodzielnie edytujesz treści na swojej stronie</li>
                        </ul>

                        <div className="text-center lg:text-left">
                          <a href="#" className="btn uppercase border border-main text-main px-5 py-3 text-2xl font-deco inline-block mt-8 hover:bg-main hover:text-white relative transition" onClick={() => fullpageApi.moveTo(5)}>Poproś o wycenę</a>
                        </div>
                        
                      </div>


                    </div>
                    <ScrollUp fullpageApi={fullpageApi} />
                  </section>

                  <section className="section">
                    <div className="container mx-auto py-12 px-10 lg:px-0">
                      <h2 className="text-4xl font-deco font-bold mb-16 text-center">JAK WYGLĄDA WSPÓŁPRACA ZE MNĄ?</h2>

                      <ul className="flex gap-4 lg:gap-8 flex-wrap">

                        <Step 
                          img="images/brief.svg"
                          title="BRIEF"
                          text="Kontaktujesz się ze mną opisując jakiej strony potrzebujesz - wystarczy napisać maila. Po otrzymaniu tych informacji podaję dokładną wycenę i czas potrzebny na realizację."
                          customClass="mb-10 lg:mb-0"
                        />

                        <Step 
                          img="images/person.svg"
                          title="UMOWA"
                          text="Podpisujemy umowę zawierającą termin realizacji i koszt, w tym zadatek. Dzięki temu współpraca będzie pewna i bezpieczna dla obu stron."
                          customClass="mb-10 lg:mb-0"
                        />

                        <Step 
                          img="images/project.svg"
                          title="PROJEKT"
                          text="Przygotowuję projekt graficzny strony w oparciu o podane informacje"
                          customClass="mb-10 lg:mb-0"
                        />

                        <Step 
                          img="images/ok.svg"
                          title="AKCEPTACJA"
                          text="Przesyłam projekt do akceptacji i w razie potrzeby wprowadzam poprawki według Twoich uwag"
                          customClass="mb-10 lg:mb-0"
                        />

                        <Step 
                          img="images/done.svg"
                          title="REALIZACJA"
                          text="Wykonuję stronę internetową, umieszczam ją na hostingu, podpinam domenę i zabezpieczam. Na koniec przekazuję instrukcję obsługi strony. Gotowe!"
                          customClass="mb-10 lg:mb-0"
                        />

                       
                      </ul>

                      <div className="text-center mt-5">
                        <a href="#" className="btn uppercase border border-main bg-main text-white px-5 py-3 text-2xl font-deco inline-block mt-8 hover:bg-white hover:text-main relative transition" onClick={() => fullpageApi.moveTo(5)}>Poproś o wycenę</a>
                      </div>

                      

                    </div>
                    
                    <ScrollUp fullpageApi={fullpageApi} />
                  </section>

                  <section className="section section-portfolio h-full w-full">
                    
                    <Swiper navigation={true} modules={[Navigation, EffectCreative]} className="mySwiper"
                            grabCursor={true}
                            effect={'creative'}
                            creativeEffect={{
                              prev: {
                                shadow: true,
                                translate: ['-20%', 0, -1],
                              },
                              next: {
                                translate: ['100%', 0, 0],
                              },
                            }}
                    >
                      <SwiperSlide>
                        <figure className="image-slider image-slider1 relative w-full h-full bg-[#2e2f30]">
                        <Image
                            src="/images/project1.webp"
                            alt="projekt"
                            className='object-cover object-center'
                            fill={true}
                        />
                        </figure>

                        <h4>Strona internetowa</h4>
                      </SwiperSlide>
                   
                      <SwiperSlide>
                        <figure className="image-slider image-slider2 relative w-full h-full bg-[#04516A]">
                        <Image
                            src="/images/project2.webp"
                            alt="projekt"
                            className='object-cover object-center'
                            fill={true}
                        />
                        </figure>

                        <h4>Strona internetowa</h4>
                      </SwiperSlide>

                      <SwiperSlide>
                        <figure className="image-slider image-slider3 relative w-full h-full bg-[#8d817b]">
                        <Image
                            src="/images/project3.webp"
                            alt="projekt"
                            className='object-cover object-center'
                            fill={true}
                        />
                        </figure>

                        <h4>Strona internetowa</h4>
                      </SwiperSlide>

                     </Swiper>


                  </section>

                  <section className="section section-contact bg-main">
                    
                    <div className="container mx-auto p-8">
                      <h2 className="text-4xl font-deco text-center text-white mb-10">TinyBitCreations</h2>
                      <p className="text-white text-[0.85rem] lg:font-base text-center max-w-3xl mx-auto mb-2">Chcesz zamówić stronę internetową? Potrzebujesz wyceny?<br />Masz pytania? Zapraszam do kontaktu.</p>
                      <p className="text-white text-3xl mt-10 underline lg:font-base text-center max-w-3xl mx-auto">
                            <a href="mailto:kontakt@tinybitcreations.pl">kontakt@tinybitcreations.pl</a>
                      </p>

                      {/* <form method="post" name="wycena" data-netlify="true" className="px-4 lg:px-0 w-full flex flex-wrap mx-auto max-w-[44rem] mt-16">

                          <label className="w-full sm:w-[48%] mb-6 sm:mb-0">
                            <input type="text" name="Imię i nazwisko:" className="text-xs lg:text-base outline-none w-full py-3 lg:py-6 px-3" placeholder="Imię i nazwisko" />
                          </label>

                          <label className="w-full sm:w-[48%] sm:ml-[4%]">
                            <input type="email" name="E-mail:" className="text-xs lg:text-base outline-none w-full py-3 lg:py-6 px-3" placeholder="E-mail" />
                          </label>

                          <label className="w-full mt-6">
                            <textarea name="Wiadomość:" className="text-xs lg:text-base outline-none w-full py-3 lg:py-6 px-3 min-h-[20rem] max-h-[20rem]" placeholder="Wiadomość" />
                          </label>

                          <label className="w-full mt-6 text-xs text-white flex">
                            <input type="checkbox" name="Wiadomość:" className="form-checkbox opacity-0 absolute -z-10 mr-2" />
                            <div className="border border-white w-5 h-5 flex justify-center items-center mr-4 relative top-1">
                              <span className="opacity-0">✔</span>
                            </div>
                            Wyrażam zgodę na przetwarzanie danych osobowych potrzebnych do korespondecji mailowych i&nbsp;zawarcia współpracy
                          </label>

                          <div className="text-center mx-auto mt-10 border-white form-btn">
                            <input type="submit" className="inline-flex cursor-pointer font-deco text-2xl py-[9px] px-[19px] relative border border-white text-white uppercase transition hover:-translate-y-1" />
                            <hr className="mt-1 opacity-0 transition" />
                          </div>


                      </form> */}
                    </div>


                    <ScrollUp fullpageApi={fullpageApi} />
                  </section>
                  <Preloader pageLoading={pageLoading} />
              </ReactFullpage.Wrapper>
      );
    }}
    
  />


  );
}
