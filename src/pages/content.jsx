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

        {/* Hero section */}
        <div className='w-1/2 flex justify-start items-center'>
            <div className='w-full flex-col h-auto text-white font-bold text-5xl flex justify-center items-center gap-8'>
                <p className='mt-50'>STRONGER EVERY DAY <br /> START <span className='text-[#C7FF39]'>YOUR FITNESS</span> <br />  JOURNEY NOW</p>
                <p className='text-[12px] font-extralight mr-17'>Get tailored training sessions just for you. Whether you want to lose weight, build <br /> strength, or develop healthy habits, our trainer are ready to help!</p>
                <button className='w-40 h-12 mr-90 text-sm font-medium text-black bg-[#C7FF39] rounded-xl cursor-pointer'>
                    Get Started Today
                </button>
            </div>
        </div>

        {/* Categor Banner */}
        
    </div>
  )
}

export default content