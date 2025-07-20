import React from 'react'
import greek from '../../assets/greek.png'
import landon from '../../assets/landon.png'
import turkey from '../../assets/turkey.png'
import './TopSelling.css'

const destinations = [
  {
    img: greek,
    name: 'Rome, Italy',
    price: '$5,42k',
    duration: '10 Days Trip',
  },
  {
    img: landon,
    name: 'London, UK',
    price: '$4.2k',
    duration: '12 Days Trip',
  },
  {
    img: turkey,
    name: 'Full Europe',
    price: '$15k',
    duration: '28 Days Trip',
  },
]

const TopSelling = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="text-center mb-12">
        <p className="text-gray-400 font-semibold tracking-widest mb-2">Top Selling</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Top Destinations</h2>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-20 md:gap-20">
        {destinations.map((dest, idx) => (
          <div key={dest.name} className="bg-white rounded-3xl shadow-lg w-72 flex flex-col overflow-hidden transition-transform  card-1">
            <img src={dest.img} alt={dest.name} className="w-full h-56 object-cover rounded-t-3xl" />
            <div className="flex flex-col px-6 py-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-gray-800">{dest.name}</span>
                <span className="font-bold text-gray-500">{dest.price}</span>
              </div>
              <div className="flex items-center text-gray-400 text-sm mt-2">
                <svg className="w-4 h-4 mr-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2C6.13 2 3 5.13 3 9c0 5.25 7 9 7 9s7-3.75 7-9c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 10 6a2.5 2.5 0 0 1 0 5.5z"/></svg>
                {dest.duration}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TopSelling