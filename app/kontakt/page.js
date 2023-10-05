import Image from 'next/image'

export default function Contact() {
  return (
     <>
         <header className='bg-light-gray pt-5 pb-10 lg:pt-16 lg:pb-24 shadow-2xl'>
            <div className="container flex flex-wrap">

               <div className="w-full">
                  <h1 className="text-5xl lg:text-7xl font-second font-bold uppercase">Darmowa <span className='text-orange block lg:inline text-3xl lg:text-5xl'>wycena</span></h1>

               </div>
            </div>
         </header>

         <section className="pt-20 lg:pt-28 pb-12 lg:pb-20">
            <div className="container">
               <p className='max-w-[46rem] mx-auto text-center text-xl'>Potrzebujesz strony internetowej? Z przyjemnością ją wykonam! :)
                  <br/>
                  Wycena jest całkowicie darmowa - napisz jakiej strony potrzebujesz, a ja w ciągu maksymalnie kilku godzin prześlę wycenę wraz z ofertą. Wypełnij formularz lub napisz na <a className="text-blue font-medium" href="mailto:kontakt@tinybit.pl">kontakt@tinybit.pl</a>
               </p>
            </div>
         </section>

         <section className='pb-16 lg:pb-36'>
            <div className="container">
               <form className='max-w-[61.25rem] mx-auto flex flex-wrap justify-between'>
                  <label className='custom-width-half mb-6 xs:mb-0'>
                     Imię i nazwisko*
                     <input type="text" name="name" className="w-full border-dark border p-3 mt-2"/>
                  </label>

                  <label className='custom-width-half'>
                     E-mail*
                     <input type="text" name="email" className="w-full border-dark border p-3 mt-2"/>
                  </label>

                  <label className='w-full mt-6 xs:mt-12'>
                     Wiadomość*
                     <textarea type="text" name="message" className="w-full border-dark border p-2 mt-2 min-h-[20rem] max-h-[40rem]"/>
                  </label>

                  <input type="submit" value="Wyślij" className='mt-10 mx-auto bg-orange hover:bg-orange-hover hover:shadow-lg transition py-3 px-4 text-xl font-second text-white cursor-pointer font-bold uppercase'/>
                  
                  
                  
               </form>
            </div>
         </section>



     </>
  )
}
