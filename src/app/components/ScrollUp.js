import Image from 'next/image';



export default function ScrollUp(props) {


    return (

        <div className="absolute bottom-8 right-8  z-50 cursor-pointer" onClick={() => props.fullpageApi.moveTo(1)}>
                <Image
                    src="/images/scroll.svg"
                    width={50}
                    height={50}
                    alt="scroll up"
                />
        </div>
 
    ); 
  }
  