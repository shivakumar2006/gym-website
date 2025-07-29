import React from 'react';
import image from "../assets/gym.jpg";
import { CgGym } from "react-icons/cg";

const content = () => {
  return (
    <div className='w-full min-h-screen bg-cover bg-center backdrop-opacity-100'
        style={{
            backgroundImage: `url(${image})`,
        }}
    >
        {/* Navbar */}
        <div className='w-full pt-8 flex justify-center items-center'>
            <div className='w-7xl h-20 bg-white/5 rounded-2xl backdrop-blur-xs flex flex-row justify-around items-center'>
                <div className='w-auto h-auto flex flex-row justify-center items-center gap-2'>
                    <CgGym className='text-[#C7FF39] text-5xl'/>
                    <p className='text-white text-3xl font-bold'>PROFITNESS</p>
                </div>
                <div className='w-auto h-auto flex flex-row justify-evenly items-center gap-8'>
                    {["Home", "About", "Programs", "Pricing", "Blogs"].map((item, index) => (
                        <p key={index} className='text-white font-extralight text-sm cursor-pointer hover:text-[#C7FF39]'>
                            {item}
                        </p>
                    ))}
                </div>
                <div className='w-auto h-auto flex flex-row justify-center items-center gap-5'>
                    <button className='w-30 h-12 border border-white text-white font-extralight rounded-xl cursor-pointer'>
                        Contact US
                    </button>
                     <button className='w-30 h-12 bg-[#C7FF39] rounded-xl cursor-pointer'>
                        Get in Touch
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default content