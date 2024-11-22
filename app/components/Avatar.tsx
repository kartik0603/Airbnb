'use client';
import Image from "next/image";

const Avatar =()=>{
    return (

        <Image
        className="rounded-full"
        height="20"
        
        width="20"
        alt="Avatar"
        src="/images/person.png"
        />
    )
}

export default Avatar;