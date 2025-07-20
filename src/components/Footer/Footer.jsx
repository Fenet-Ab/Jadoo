import React from 'react'
import apple from '../../assets/apple.png'
import twitter from '../../assets/twitter.png'
import instagram from '../../assets/instagram.png'
import playstore from '../../assets/play_store.png'
import axon from '../../assets/axon.png'
import jetstar from '../../assets/jetstar.png'
import expedia from '../../assets/expedia.png'
import qantas from '../../assets/qantas.png'
import litalia from '../../assets/litalia.png'


const Footer = () => {
  return (
    <footer className="w-full bg-white pt-12">
      {/* Partner Logos */}
      <div className="flex items-center justify-center gap-10 mb-12 flex-wrap">
       
          <img  src={axon} alt="partner" className="h-14 object-contain grayscale" />
          <img  src={jetstar} alt="partner" className="h-14 object-contain grayscale" />
          <img  src={expedia} alt="partner" className="h-14 object-contain grayscale" />
          <img  src={qantas} alt="partner" className="h-14 object-contain grayscale" />
          <img  src={litalia} alt="partner" className="h-14 object-contain grayscale" />
      
      </div>
      {/* Newsletter */}
      <div className="w-full flex justify-center mb-16">
        <div className="relative bg-purple-50 rounded-2xl px-8 py-10 w-full max-w-3xl flex flex-col items-center shadow-md">
          <span className="absolute -top-6 right-8 bg-indigo-500 w-12 h-12 rounded-full flex items-center justify-center text-white text-2xl shadow-lg">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" fill="currentColor" /></svg>
          </span>
          <h3 className="text-lg md:text-xl font-semibold text-center text-gray-700 mb-6">Subscribe to get information, latest news and other interesting offers about Jadoo</h3>
          <form className="flex w-full max-w-xl mt-2">
            <input type="email" placeholder="Your email" className="flex-1 px-4 py-3 rounded-l-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-200" />
            <button type="submit" className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-3 rounded-r-md font-semibold transition">Subscribe</button>
          </form>
        </div>
      </div>
      {/* Main Footer */}
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10 px-4 md:px-0 pb-8">
        {/* Logo and description */}
        <div className="flex-1 min-w-[180px] mb-8 md:mb-0">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Jadoo.</h2>
          <p className="text-gray-400 text-sm w-50">Book your trip in minutes, get full control for much longer.</p>
        </div>
        {/* Links */}
        <div className="flex flex-1 justify-between gap-8">
          <div>
            <h4 className="font-bold text-gray-900 mb-3">Company</h4>
            <ul className="text-gray-500 text-sm space-y-2">
              <li>About</li>
              <li>Careers</li>
              <li>Mobile</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-3">Contact</h4>
            <ul className="text-gray-500 text-sm space-y-2">
              <li>Help/FAQ</li>
              <li>Press</li>
              <li>Affiliates</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-3">More</h4>
            <ul className="text-gray-500 text-sm space-y-2">
              <li>Airlinefees</li>
              <li>Airline</li>
              <li>Low fare tips</li>
            </ul>
          </div>
        </div>
        {/* Social and app badges */}
        <div className="flex-1 flex flex-col items-center md:items-end gap-4 min-w-[200px]">
          <div className="flex gap-3 mb-2">
            <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-2xl text-gray-700"><i className="fab fa-facebook-f"></i>f</span>
            <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xl text-gray-700"><i className="fab fa-instagram"></i><img src={instagram} alt="" /></span>
            <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xl text-gray-700"><i className="fab fa-twitter"></i><img src={twitter} alt="twitter" /></span>
          </div>
          <span className="text-gray-500 text-sm mb-2">Discover our app</span>
          <div className="flex gap-2">
            <img src={playstore} alt="Google Play" className="h-8 rounded-xl" />
            <img src={apple} alt="App Store" className="h-8 rounded-xl" />
          </div>
        </div>
      </div>
      <div className="w-full text-center text-gray-400 text-xs py-4">All rights reserved@jadoo.co</div>
    </footer>
  )
}

export default Footer