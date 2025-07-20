import React from 'react'
import homeImg from '../../assets/home.png'
import planeImg from '../../assets/plane.png'

const Body = () => {
  return (
    <section className="w-full bg-white relative overflow-hidden px-8 py-12">
      {/* Orange background shape */}
      <div className="hidden md:block absolute right-0 top-0 w-[520px] h-[420px] bg-orange-100 rounded-bl-[220px] z-0" style={{borderTopLeftRadius: '220px', borderBottomLeftRadius: '220px'}}></div>
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl mx-auto relative z-10">
        {/* Left Side */}
        <div className="flex-1 max-w-xl z-10">
          <p className="text-orange-500 font-bold mb-4 tracking-wide text-base">BEST DESTINATIONS AROUND THE WORLD</p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
            Travel, enjoy<br />
            and live a new<br />
            <span className="relative inline-block">
              and full life
              
            </span>
          </h1>
          <p className="text-gray-500 mb-8 max-w-md">
            Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
          </p>
          <div className="flex items-center space-x-6">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-6 py-3 rounded-md shadow transition">Find out more</button>
            <button className="flex items-center space-x-2 text-gray-700 font-semibold ">
              <span className="w-10 h-10 flex items-center justify-center bg-orange-500 border border-gray-300 rounded-full shadow mr-2">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white">
                  <polygon points="10,8 16,12 10,16" fill="currentColor" />
                </svg>
              </span>
              Play Demo
            </button>
          </div>
        </div>
        {/* Right Side */}
        <div className="flex-1 flex items-center justify-center relative mt-12 md:mt-0">
          <img src={homeImg} alt="Traveler" className="relative z-20 w-[350px] md:w-[420px]" />
        </div>
      </div>
    </section>
  )
}

export default Body