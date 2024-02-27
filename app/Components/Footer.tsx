import React from 'react'
import Image from 'next/image'
import { BsTwitterX } from "react-icons/bs";
import { FaGithubAlt } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import Link from 'next/link';
const Footer = () => {
  return (
    <div className='bg-[#FF7B15] px-[10px] w-full py-[15px] '>
        <div className='grid grid-cols-3  w-[100%] mx-auto'>
            <div className='flex items-center justify-center'>
            <a href='/' className='flex items-center text-[1rem] md:text-[1.5rem] lg-[2rem] hover:text-black text-white delay-75 transition-all cursor-pointer gap-5'>
                   <Image src='/Assets/logoWhite.svg' alt="logo" width={50} height={50}/> 
                   <p className='font-semibold'>light DAS</p>
                </a>

            </div>
            <div className='flex flex-col items-center'></div>
            <div className='flex items-center justify-center gap-4'>
              <Link href={"https://twitter.com/lightdas_"} target='_blank'>
              <BsTwitterX style={{color: "white", width: 25, height:25}}/>
              </Link>
              <Link href={"https://github.com/WilfredAlmeida/LightDAS"} target='_blank'>
              <FaGithubAlt style={{color: "white", width: 25, height:25}}/>
                </Link>
            

            {/* <CiLinkedin style={{color: "white", width: 30, height:30}}/> */}
            </div>
        </div>
    </div>
  )
}

export default Footer