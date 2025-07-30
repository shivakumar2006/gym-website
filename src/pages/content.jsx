import React from 'react';
import image from "../assets/gym.jpg";
import { CgGym } from "react-icons/cg";
import personal from "../assets/personal.jpg";
import personal2 from "../assets/personal2.jpg";
import weight from "../assets/weight.jpg";
import cardio from "../assets/cardio.jpg";
import bodybuilding from "../assets/body.jpg";
import regular from "../assets/regular.jpg";
import work from "../assets/work.jpg";

const content = () => {

    const programs = [
      { title: "BODYBUILDING", image: bodybuilding },
      { title: "REGULAR WORKOUT", image: regular },
      { title: "SCREETCHING WORKOUT", image: work }
    ];

    const price = [
        { 
            title: "Basic", 
            amount: "1000", 
            description: "Check out our essentials Training package, perfect for budget friendly fitness! Get solid coaching and resources to hit your goals without overspending!"
        },
        { 
            title: "3 Months", 
            amount: "2700", 
            description: "Check out our essentials Training package, perfect for budget friendly fitness! Get solid coaching and resources to hit your goals without overspending!"
        },
    ]

  return (
    <>
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

    </div>


    {/* personal training */}
    <div className='w-auto min-h-screen bg-[#363537]'>
        {/* Categor Banner */}
        <div className='w-full h-15 text-2xl font-bold bg-[#FFFFFA] flex flex-row justify-center items-center gap-8'>
            <p>STRENGTH TRAINING</p>
            <p className='text-5xl mt-4'>*</p>
            <p>WEIGHT LIFTING</p>
            <p className='text-5xl mt-4'>*</p>
            <p>BODYBUILDING</p>
            <p className='text-5xl mt-4'>*</p>
            <p>CARDIO</p>
            <p className='text-5xl mt-4'>*</p>
            <p>ONLINE & IN-PERSON</p>
        </div>

        <div className='w-screen h-full flex flex-row justify-center items-center'>
            <div className='w-200 h-full flex flex-col justify-center items-center'>
                <div className='w-full h-90 flex flex-col justify-center items-center'>
                    <p className='text-[130px] mr-35 font-extrabold text-white tracking-tight'>
                        ﹥<span className='text-[#C7FF39]'>﹥</span>
                    </p>
                    <p className='text-4xl ml-10 font-bold text-white'>PERSONAL <span className='text-[#C7FF39]'>TRAINING</span></p>
                </div>
                <div className='w-full h-100 flex justify-center items-center'>
                    <div className='w-80 h-70 rounded-2xl bg-black/20 flex flex-col justify-center items-center gap-10'>
                        <p className='text-white'>Experience a full personal training <br /> sessions, free of charge</p>
                        <button className='w-40 mr-23 h-12 text-lg font-medium text-black bg-[#C7FF39] rounded-xl cursor-pointer'>
                            See Price
                        </button>
                    </div>
                </div>
            </div>
            <div className='w-full h-full flex flex-row justify-center items-center'>
                <div className='w-1/2 h-full ml-10'>
                    <img 
                        src={personal}
                        alt='personal'
                        className='w-80 h-120 rounded-2xl transition-transform duration-300 shadow-2xl hover:scale-103'
                    />
                </div>
                <div className='w-1/2 h-full flex flex-col'>
                    <img 
                        src={personal2}
                        className='w-90 h-60 mb-5 rounded-2xl transition-transform duration-300 shadow-2xl hover:scale-103'
                    />
                    <p className='text-white font-light'>
                        Whether you looking for build muscle, lose fat, or <br /> improve mobility, every session is customized to fit your <br /> needs and fitnes level
                    </p>
                    <div className='w-30 h-30 rounded-2xl bg-[#C7FF39] mt-5 flex flex-col justify-center items-center gap-2'>
                        <p className='font-extrabold text-4xl'>10+</p>
                        <p className='font-extralight'>persona <br /> Trainers</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

        {/* programs */}
    <div className='w-auto min-h-screen bg-[#1D1F20] flex flex-col'>
        <div className='w-full h-auto mt-20 flex flex-row justify-around items-center gap-50'>
            <p className='text-4xl text-white font-bold'>PROGRAMS THAT <span className='text-[#C7FF39]'>FIT YOU</span></p>
            <p className='text-[12px] font-extralight text-white'>Whether you are just starting or levelling up , our coaching is build around <br /> your needs, not a one size-fits-all plan.</p>
        </div>
        <div className='w-full mt-10 flex flex-row justify-around items-center gap-8'>
            {/* Weight Lifting Section */}
            <div className='relative w-160 h-80'>
              <img 
                src={weight}
                alt="lifting"
                className='w-full h-full rounded-2xl object-cover transition-transform duration-300 hover:scale-103'
              />
              <p className='absolute bottom-4 left-4 text-white text-3xl font-bold'>WEIGHT LIFTING</p>
            </div>

            {/* Cardio Section */}
            <div className='relative w-110 h-80'>
              <img 
                src={cardio}
                alt="cardio"
                className='w-full h-full rounded-2xl object-cover transition-transform duration-300 hover:scale-103'
              />
              <p className='absolute bottom-4 left-4 text-white text-3xl font-bold'>CARDIO</p>
            </div>
        </div>

        <div className='w-full mt-10 flex flex-row justify-evenly items-center gap-8'>
          {programs.map((program, index) => (
            <div key={index} className='relative w-100 h-70'>
              <img 
                src={program.image}
                alt={program.title}
                className='w-full h-full rounded-2xl object-cover transition-transform duration-300 hover:scale-103'
              />
              <p className='absolute bottom-4 left-4 text-white text-3xl font-bold'>
                {program.title}
              </p>
            </div>
          ))}
        </div>

    </div>

    {/* price */}
    <div className='w-auto min-h-screen bg-[#363537]'>
        <div className='w-full flex flex-col'>
            <p className='text-[130px] mr-35 font-extrabold text-white tracking-tight'>
                ﹥<span className='text-[#C7FF39]'>﹥</span>
            </p>
            <p className='text-4xl ml-10 font-bold text-white'>SIMPLE PRICING. <span className='text-[#C7FF39]'>POWERFUL RESULTS.</span></p>
        </div>
        <div className='w-full mt-20 flex justify-center items-center'>
  <div className='w-[1200px] h-60 overflow-visible flex flex-wrap justify-evenly items-start gap-4'>
    {price?.map((item, index) => (
      <div
        key={index}
        className='w-80 h-60 bg-white/10 rounded-2xl flex flex-col justify-start items-center overflow-hidden 
                   transition-all duration-500 hover:h-96 hover:bg-white group'
      >
        {/* Title */}
        <div className='w-full px-5 mt-5 flex justify-start items-center'>
          <p className='text-white group-hover:text-black text-2xl font-extrabold transition-colors duration-300'>
            {item.title}
          </p>
        </div>

        {/* Price */}
        <div className='w-40 h-10 mt-3 rounded-3xl shadow-2xl font-extrabold text-white bg-black/20 
                        flex justify-center items-center group-hover:text-black group-hover:bg-black/10 transition-colors duration-300'>
          <p>
            RS.{item.amount}/
            <span className='text-[10px] font-extralight'>Month</span>
          </p>
        </div>

        {/* Description */}
        <p className='text-[10px] font-extralight text-white group-hover:text-black px-5 mt-3 text-center transition-colors duration-300'>
          {item.description}
        </p>

        {/* Hidden Extra Content */}
        <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-5 px-5'>
          <ul className='text-xs text-black list-disc pl-4 space-y-1'>
            <li>Free support</li>
            <li>24/7 access</li>
            <li>Exclusive content</li>
          </ul>
          <button className='mt-4 px-4 py-2 bg-black text-white rounded-full text-sm font-semibold hover:bg-black/80 transition'>
            Get Started
          </button>
        </div>
      </div>
    ))}
  </div>
</div>

    </div>
    </>
  )
}

export default content;