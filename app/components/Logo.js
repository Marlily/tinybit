import Image from "next/image";

const Logo = () => {

    return (

        <Image 
            src="/logo.svg"
            width={155}
            height={38}
            alt="logo"
        />


    )
}

export default Logo;