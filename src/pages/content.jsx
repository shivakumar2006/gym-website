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
import trainer from "../assets/trainer.jpg";
import consult from "../assets/consult.jpg";
import { useRef } from 'react';
import { FaUserCircle } from "react-icons/fa";
import LeafMap from "../components/map";
import { SiInstagram } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import { FiPhoneCall } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';




const content = () => {

    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const programsRef = useRef(null);
    const pricingRef = useRef(null); 
    const blogsRef = useRef(null);
    const contactRef = useRef(null);
    const getInTouch = useRef(null);

    const scrollToSection = (ref) => {
      if (ref && ref.current) {
        ref.current.scrollIntoView({ behavior: "smooth" });
      }
    };

    // const scrollToContact = (contactRef) => {
    //     contactRef.current.scrollIntoView({ behavior: "smooth"});
    // }


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
        { 
            title: "6 Months", 
            amount: "5500", 
            description: "Check out our essentials Training package, perfect for budget friendly fitness! Get solid coaching and resources to hit your goals without overspending!"
        },
        { 
            title: "Annual", 
            amount: "9000", 
            description: "Check out our essentials Training package, perfect for budget friendly fitness! Get solid coaching and resources to hit your goals without overspending!"
        },
    ]

    const blogs = [
        { 
            description: "I’ve tried many gyms before, but nothing compares to this one. The atmosphere is super motivating, and the trainers actually care about your progress. In just 3 months, I lost 8 kg and built visible muscle. Highly recommended!",
            name: "Rajat Singh",
        },
        {
            name: "Sneha Nair",
            description: "As someone who was new to fitness, I was nervous to even join a gym. But the support and guidance I got here changed everything. The sessions are not just effective—they’re fun! I feel stronger, more confident, and more energetic than ever.",
        },
        {
            name: "Kunal Mehta",
            description: "The customized workout and diet plan really worked for me. I started seeing changes within 2 weeks. It’s not just a gym, it’s a whole transformation system. Totally worth every rupee!",
        },
        {
            name: "Priya Sharma",
            description: "From the moment I walked in, I felt welcomed. The community is super friendly, and the trainers push you just the right amount. I’ve never felt this consistent with fitness before. Proud to call this my second home!",
        },
    ]

    const cards = [
        { number: "50", title: "Training Programs"},
        { number: "10", title: "Years of experience"},
        { number: "100", title: "Happy Members"},
        { number: "20", title: "Best Trainers"},
    ]

  return (
    <>
    <div ref={homeRef} className='w-full min-h-screen bg-cover bg-center backdrop-opacity-100'
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
                    {[
                        { name: "Home", ref: homeRef},
                        { name: "About", ref: aboutRef},
                        { name: "Programs", ref: programsRef}, 
                        { name: "Pricing", ref: pricingRef}, 
                        { name: "Testimonials", ref: blogsRef},
                    ].map((item, index) => (
                        <p 
                            key={index} 
                            className='text-white font-extralight text-sm cursor-pointer hover:text-[#C7FF39]'
                            onClick={() => scrollToSection(item.ref)}
                        >
                            {item.name}
                        </p>
                    ))}
                </div>
                <div className='w-auto h-auto flex flex-row justify-center items-center gap-5'>
                    <button 
                        className='w-30 h-12 border border-white text-white font-extralight rounded-xl cursor-pointer'
                        onClick={() => scrollToSection(contactRef)}
                    >
                        Contact US
                    </button>
                     <button 
                        className='w-30 h-12 bg-[#C7FF39] rounded-xl cursor-pointer'
                        onClick={() => scrollToSection(getInTouch)}
                    >
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
    <div ref={aboutRef} className='w-auto min-h-screen bg-[#363537]'>
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
                        <button 
                            className='w-40 mr-23 h-12 text-lg font-medium text-black bg-[#C7FF39] rounded-xl cursor-pointer'
                            onClick={() => scrollToSection(pricingRef)}    
                        >
                            See Price
                        </button>
                    </div>
                </div>
            </div>
            <div className='w-full h-full flex flex-row justify-center items-center'>
                <div className='w-1/2 h-full ml-10  transition-transform duration-300 hover:scale-103'>
                    <LazyLoadImage 
                        src={personal}
                        alt='personal'
                        effect='blur'
                        className='w-80 h-120 rounded-2xl shadow-2xl'
                    />
                </div>
                <div className='w-1/2 h-full flex flex-col '>
                <div className='transition-transform duration-300 hover:scale-103'>
                    <LazyLoadImage 
                        src={personal2}
                        effect='blur'
                        className='w-90 h-60 mb-5 rounded-2xl shadow-2xl '
                    />
                </div>
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
    <div ref={programsRef} className='w-auto min-h-screen bg-black/90 flex flex-col'>
        <div className='w-full h-auto mt-20 flex flex-row justify-around items-center gap-50'>
            <p className='text-4xl text-white font-bold'>PROGRAMS THAT <span className='text-[#C7FF39]'>FIT YOU</span></p>
            <p className='text-[12px] font-extralight text-white'>Whether you are just starting or levelling up , our coaching is build around <br /> your needs, not a one size-fits-all plan.</p>
        </div>
        <div className='w-full mt-10 flex flex-row justify-around items-center gap-8'>
            {/* Weight Lifting Section */}
            <div className='relative w-160 h-80 transition-transform duration-300 hover:scale-103'>
              <LazyLoadImage 
                src={weight}
                alt="lifting"
                effect='blur'
                className='w-full h-full rounded-2xl object-cover '
                wrapperClassName='w-full h-full rounded-2xl object-cover'
              />
              <p className='absolute bottom-4 left-4 text-white text-3xl font-bold'>WEIGHT LIFTING</p>
            </div>

            {/* Cardio Section */}
            <div className='relative w-110 h-80 transition-transform duration-300 hover:scale-103'>
              <LazyLoadImage 
                src={cardio}
                alt="cardio"
                effect='blur'
                className='w-full h-full rounded-2xl object-cover '
                wrapperClassName='w-full h-full rounded-2xl object-cover transition-transform duration-300 hover:scale-103'
              />
              <p className='absolute bottom-4 left-4 text-white text-3xl font-bold'>CARDIO</p>
            </div>
        </div>

        <div className='w-full mt-10 flex flex-row justify-evenly items-center gap-8'>
          {programs.map((program, index) => (
            <div key={index} className='relative w-100 h-70 transition-transform duration-300 hover:scale-103'>
              <LazyLoadImage 
                src={program.image}
                alt={program.title}
                effect='blur'
                className='w-full h-full rounded-2xl object-cover '
              />
              <p className='absolute bottom-4 left-4 text-white text-3xl font-bold'>
                {program.title}
              </p>
            </div>
          ))}
        </div>

    </div>

    {/* price */}
    <div ref={pricingRef} className='w-auto min-h-screen bg-[#363537]'>
        <div className='w-full flex flex-col'>
            <p className='text-[130px] ml-20 font-extrabold text-white tracking-tight'>
                ﹥<span className='text-[#C7FF39]'>﹥</span>
            </p>
            <p className='text-4xl ml-30 font-bold text-white'>SIMPLE PRICING. <span className='text-[#C7FF39]'>POWERFUL RESULTS.</span></p>
        </div>
        <div className='w-full mt-20 flex justify-center items-center'>
        <div className='w-[1200px] h-60 overflow-visible flex flex-row justify-evenly items-start gap-4'>
          {price?.map((item, index) => (
            <div
              key={index}
              className='w-80 h-50 bg-white/10 rounded-2xl flex flex-col justify-start items-center overflow-hidden 
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
                  <li>6 Days in a Week access</li>
                  <li>Best Trainers</li>
                </ul>
                <button className='mt-4 px-4 py-2 bg-black text-white rounded-full text-sm font-semibold hover:bg-black/80 transition cursor-pointer'>
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
    </div>
          <div className='w-full text-4xl mt-40 pl-30 font-bold text-white flex justify-start items-center gap-2'>
                GET YOUR <span className='text-[#C7FF39]'>MEMBERSHIP</span> AND START <span className='text-[#C7FF39]'>YOUR JOURNEY</span>
          </div>
    </div>


          {/* trainers */}
    <div className='w-auto min-h-screen bg-black/90 flex flex-col'>
        <div className='w-full h-auto mt-20 flex flex-row justify-around items-center gap-50'>
            <p className='text-4xl text-white font-bold'>TEAM OF  <span className='text-[#C7FF39]'>EXPERT COACHES</span></p>
            <p className='text-[12px] font-extralight text-white'>The best way to start your day. Structured, powerful practice that focuses on <br /> masters of poses and progressionto more advances levels. </p>
        </div>
       <div className="w-full flex justify-center items-center mt-20">
        <div className="group relative w-80 h-80 bg-white rounded-3xl overflow-hidden transition-all duration-700 hover:w-[46rem] hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)] flex items-center cursor-pointer border border-gray-200">
          
          {/* Soft Glow Border on Hover */}
          <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition duration-700 blur-2xl">
            <div className="w-full h-full bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 opacity-30"></div>
          </div>
          
          {/* Image Section */}
          <div className="z-10 flex-shrink-0 transition-all duration-700 ease-in-out group-hover:scale-[1.05] group-hover:translate-x-[-1rem]">
            <LazyLoadImage
              src={trainer}
              alt="Trainer"
              effect='blur'
              className="w-80 h-80 object-cover rounded-3xl shadow-md"
            />
          </div>
          
          {/* Text Section */}
          <div className="z-10 w-0 opacity-0 group-hover:w-[25rem] group-hover:opacity-100 transition-all duration-700 ease-in-out px-8 text-black">
            <h2 className="text-3xl font-extrabold mb-2 tracking-wide">JAME JONNA JAMESON</h2>
            <p className="text-md font-normal mb-4 italic text-gray-700">21 years • Trainer</p>
            <p className="text-base leading-relaxed text-gray-800 font-medium space-y-1">
              🏋️ Powerlifter, Indian Team 🇮🇳<br />
              🥈 National Silver Medalist (2024)<br />
              🦾 Jr Strongman, State Champion<br />
              🏆 Hardcore Training + Mentorship
            </p>
          </div>

        </div>

    </div>

          {/* tstimonials */}
          <div ref={blogsRef} className='w-full flex flex-col'>
            <p className='text-[130px] ml-20 font-extrabold text-white tracking-tight'>
                ﹥<span className='text-[#C7FF39]'>﹥</span>
            </p>
          </div>
          <div className='w-full h-auto flex flex-row justify-around items-center gap-50'>
            <p className='text-4xl ml-20 text-white font-bold'>WHAT ARE CUSTOMERS SAY: REAL <br /> RESULTS,  <span className='text-[#C7FF39]'>REAL VALUE!</span></p>
            <p className='text-[12px] font-extralight text-white'>Starting your daya with a strong routine can transform your life. Engaging in a <br /> focused and dynamic practice not only enhance your mastery of poses but <br /> also paves the way for tackling more advanced techniques.</p>
        </div>
        <div className="w-full mt-10 flex justify-center items-center">
          <div className="w-full max-w-7xl rounded-2xl overflow-x-auto scroll-smooth flex flex-nowrap gap-6 px-4">
            {/* Testimonial Cards */}
            {blogs?.map((item, index) => (
              <div
                key={index}
                className="min-w-[550px] max-w-full bg-white/10 rounded-2xl shadow-lg p-6 flex flex-col justify-between text-white"
              >
                {/* Testimonial Text */}
                <div className="w-full">
                  <p className="text-base font-medium leading-relaxed break-words whitespace-normal">
                    {item.description}
                  </p>
                </div>
            
                {/* User Info */}
                <div className="flex items-center justify-start gap-3 mt-4">
                  <FaUserCircle className="w-10 h-10 rounded-full" />
                  <span className="text-sm text-white/80 font-semibold">— {item.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>


            {/* personalized workout */}
        <div className='w-full flex mt-30 justify-center items-center'>
          <div className='relative w-[920px] h-[480px] rounded-2xl flex justify-center items-center'>
            <LazyLoadImage 
              src={consult}
              alt='consult'
              effect='blur'
              className='w-full h-full opacity-60 rounded-2xl object-cover'
              wrapperClassName="w-full h-full rounded-2xl opacity-60"
            />

            {/* Centered overlay */}
            <div className='absolute inset-0 z-50 text-white flex flex-col justify-center items-center text-center gap-4'>
              <p className='text-4xl  font-extrabold'>
                PERSONALIZED WORKOUT PLANS <br /> 
                <span className='text-[#C7FF39]'>ACHIEVE </span> YOUR GOALS.
              </p>
              <p className='text-[10px] font-extralight'>
                Highlight customization and goal achievement, which can be enticing for <br />
                those looking for tailored fitness solution.
              </p>
              <button className='w-30 h-13 rounded-2xl text-black bg-[#C7FF39] text-sm font-light flex justify-center items-center cursor-pointer'>
                Contact Us
              </button>
            </div>
          </div>
        </div>
        <div className='w-full mt-15 flex justify-center items-center'>
            <div className='w-4xl h-30 flex flex-row justify-between items-center'>
                {cards?.map((item, index) => (
                    <div key={index} className='w-40 h-30 rounded-2xl bg-white/10 flex flex-col justify-center items-center gap-3'>
                    <p className='text-white text-4xl font-extrabold'>{item.number}<span className='text-md font-extrabold'>+</span></p>
                    <p className='text-white font-extralight text-[10px]'>{item.title}</p>
                </div>
                ))}
                
            </div>
        </div>

        {/* contact */}
        <div ref={contactRef} className='w-full min-h-screen mt-20 flex justify-center items-center'>
                <div className='w-1/2 h-screen flex-col flex justify-evenly items-center'>
                    <p className='text-white text-6xl font-extrabold mr-75'>CON<span className='text-[#C7FF39]'>TACT</span></p>
                    <div className='w-xl h-140 rounded-2xl bg-white/10 flex flex-col'>
                        <p className='w-full mt-8 ml-5 text-white text-5xl font-extrabold mr-80'>GET IN <span className='text-[#C7FF39]'> TOUCH</span></p>
                        <div className='w-full h-20 mt-10 flex flex-row justify-center items-center'>
                            <div className='w-1/2 h-20 flex flex-col justify-evenly items-center'>
                                <p className='text-white font-bold mr-40'>NAME</p>
                                <input 
                                    type='text'
                                    required
                                    placeholder='Your name'
                                    className='w-60 h-10 bg-black/20 placeholder:text-gray-300 placeholder:font-light placeholder:text-[13px] pl-5 rounded-2xl'
                                />
                            </div>
                            <div className='w-1/2 h-20 flex flex-col justify-evenly items-center'>
                                <p className='text-white font-bold mr-40'>EMAIL</p>
                                <input 
                                    type='text'
                                    required
                                    placeholder='youremail@gmail.com'
                                    className='w-60 h-10 text-white bg-black/20 placeholder:text-gray-300 placeholder:font-light placeholder:text-[13px] pl-5 rounded-2xl'
                                />
                            </div>
                        </div>
                        <div className='w-1/2 mt-5 flex flex-col justify-evenly items-center'>
                                <p className='w-full text-white font-bold ml-15'>LEAVE US A MESSAGE</p>
                                <textarea 
                                    name='message'
                                    required
                                    placeholder='leave us a message'
                                    className='w-135 h-65 ml-70 pt-3 text-white bg-black/20 placeholder:text-gray-300 placeholder:font-light placeholder:text-[13px] pl-5 pr-5 rounded-2xl'
                                />
                        </div>
                        <button type='submit' className='w-50 h-8 mb-3 bg-white rounded-2xl mt-4 md:ml-88 ml-10 max-[409px]:ml-30 max-[409px]:mb-5 cursor-pointer text-black'>
                            Send message
                        </button>
                    </div>
                </div>

                {/* map section */}
                <div className='w-1/2 h-screen flex flex-col justify-center items-center'>
                    <div className=' w-full h-80 flex justify-center items-center'>

                      {/* Right Side Map */}
                      <div className='w-150 h-80'>
                        <LeafMap />
                      </div>
                    </div>
                </div>
        </div>

        {/* Footer */}
        <div ref={getInTouch}
            className='w-full flex flex-col justify-center items-center'>
            <div className='w-7xl h-60 flex flex-row justify-between items-center'>
                <div className='w-70 h-60 flex flex-col justify-center items-center gap-5'>
                   <div className='w-auto h-auto flex flex-row justify-center items-center gap-2'>
                        <CgGym className='text-[#C7FF39] text-5xl'/>
                        <p className='text-white text-3xl font-bold'>PROFITNESS</p>
                   </div>
                   <p className='text-white font-extralight text-[10px]'>
                        Ready to boost your fitness? join us for <br /> personalized training plans and expert guidance. <br /> we're here to help you achieve your goals!
                   </p>
                   <div className='w-full pl-5 mt-3 flex flex-row justify-start items-center gap-3'>
                        <div className='rounded-full w-10 h-10 bg-gray-300 flex justify-center items-center cursor-pointer'>
                            <SiInstagram className='text-xl'/>
                        </div>
                         <div className='rounded-full w-10 h-10 bg-gray-300 flex justify-center items-center cursor-pointer'>
                            <FaFacebookF className='text-xl'/>
                        </div>
                        <div className='rounded-full w-10 h-10 bg-gray-300 flex justify-center items-center cursor-pointer'>
                            <FaYoutube className='text-xl'/>
                        </div>
                        <div className='rounded-full w-10 h-10 bg-gray-300 flex justify-center items-center cursor-pointer'>
                            <SiWhatsapp className='text-xl'/>
                        </div>
                    </div>
                </div>
                <div className='w-50 h-60 flex flex-col justify-evenly items-center'>
                        <p className='text-xl font-extrabold text-white'>QUICK LINKS</p>
                        <p 
                            className='text-[12px] mr-22 text-gray-300 font-extralight cursor-pointer hover:text-gray-400'
                            onClick={() => scrollToSection(aboutRef)}
                        >About</p>
                        <p 
                            className='text-[12px] mr-19 text-gray-300 font-extralight cursor-pointer hover:text-gray-400'
                            onClick={() => scrollToSection(programsRef)}
                        >Program</p>
                        <p 
                            className='text-[12px] mr-21 text-gray-300 font-extralight cursor-pointer hover:text-gray-400'
                            onClick={() => scrollToSection(pricingRef)}
                        >Pricing</p>
                        <p 
                            className='text-[12px] mr-14 text-gray-300 font-extralight cursor-pointer hover:text-gray-400'
                            onClick={() => scrollToSection(blogsRef)}
                        >Testimonials</p>
                </div>
                <div className='w-50 h-60 flex flex-col justify-evenly items-center'>
                        <p className='text-xl font-extrabold text-white'>PROGRAMS</p>
                        <p className='text-[12px] mr-10 text-gray-300 font-extralight cursor-pointer hover:text-gray-400'>Weight Lifting</p>
                        <p className='text-[12px] mr-20 text-gray-300 font-extralight cursor-pointer hover:text-gray-400'>Cardio</p>
                        <p className='text-[12px] mr-11 text-gray-300 font-extralight cursor-pointer hover:text-gray-400'>Bodybuilding</p>
                        <p className='text-[12px] mr-0 text-gray-300 font-extralight cursor-pointer hover:text-gray-400'>Screeching Workouts</p>
                </div>
                <div className='w-50 h-60 flex flex-col justify-evenly items-center'>
                        <p className='text-xl font-extrabold text-white'>CONTACT US </p>
                        <p className='text-[12px] mr-3 text-gray-300 font-extralight cursor-pointer hover:text-gray-400 flex flex-row gap-2 '><FiPhoneCall className='text-gray-300 mt-1'/> +91-8576xxxxx7</p>
                        <p className='text-[12px] mr-1 text-gray-300 font-extralight cursor-pointer hover:text-gray-400 flex flex-row gap-2'><IoMailOutline className='text-gray-300 mt-1 '/>info01@gmail.com</p>
                        <p className='text-[12px] ml-9 text-gray-300 font-extralight cursor-pointer hover:text-gray-400 flex flex-row gap-2'><IoLocationOutline className='text-gray-300 text-xl mt-1'/>Raj studio, 2nd FLoor, Gurugram, India</p>
                </div>
            </div>
            <div className='w-7xl border mt-3 border-gray-500'></div>
            <div className='w-full mt-5 flex flex-col justify-around items-center'>
                <p className='text-[12px] text-gray-300 font-extralight cursor-pointer hover:text-gray-400'>Copyright &copy; 2025 profitness. All Rights Reserved.</p>
                <p className='text-[12px] text-gray-300 font-extralight cursor-pointer hover:text-gray-400'>Privacy Policy | Terms of use</p>
            </div>

            <div className="relative w-full h-70 flex pb-10 justify-center items-center">
  <p className="text-[210px] text-white/10 font-extrabold leading-none">
    PROFITNESS
  </p>

  {/* Bottom Fade Layer with matching color */}
  <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white/10 to-transparent pointer-events-none" />
</div>


        </div>
    </div>  
    </>
  )
}

export default content;