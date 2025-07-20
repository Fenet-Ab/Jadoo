import React from 'react'
import satelite from '../../assets/satelite.png'
import plane from '../../assets/plane.png'
import mice from '../../assets/mice.png'
import setting from '../../assets/setting.png'
import './Category.css'

const Category = () => {
    return (
        <section className="w-full py-16 bg-white relative">
            {/* Decorative plus grid */}
            <div className="absolute right-10 top-8 hidden md:block z-0">
                <svg width="100" height="80" fill="none" viewBox="0 0 100 80">
          {[...Array(5)].map((_, row) => (
            [...Array(5)].map((_, col) => (
              <text key={row + '-' + col} x={col * 20} y={row * 20} fontSize="14" fill={row === 3 && col === 2 ? '#4784E5' : '#D9D9D9'  && row==1 && col==0 ? '#FF7152' : '#D9D9D9'}>+</text>
            ))
          ))}
        </svg>
            </div>
            <div className="text-center mb-12 z-10 relative">
                <p className="text-gray-400 font-semibold tracking-widest mb-2">CATEGORY</p>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">We Offer Best Services</h2>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 z-10 relative">
                {/* Calculated Weather */}
                <div className="flex flex-col items-center text-center max-w-xs px-4">
                    <img src={satelite} alt="Calculated Weather" className="w-20 h-20 mb-4" />
                    <h3 className="font-bold text-lg mb-2">Calculated Weather</h3>
                    <p className="text-gray-500 text-sm">Built Wicket longer admire do barton vanity itself do in it.</p>
                </div>
                {/* Best Flights (highlighted) */}
                <div className="relative flex flex-col items-center text-center max-w-xs px-4 plane">
                    {/* Orange accent shape */}
                    <span
                        className="absolute -left-6 -bottom-6 w-20 h-20 bg-orange-500 z-0"
                        style={{ borderTopLeftRadius: "10px", borderBottomRightRadius: "20px" }}
                    ></span>
                    <div className="bg-white rounded-2xl shadow-xl px-8 py-8 z-10">
                        <img src={plane} alt="Best Flights" className="w-20 h-20 mb-4 mx-auto" />
                        <h3 className="font-bold text-lg mb-2">Best Flights</h3>
                        <p className="text-gray-500 text-sm">Engrossed listening. Park gate sell they west hard for the.</p>
                    </div>
                </div>
                {/* Local Events */}
                <div className="flex flex-col items-center text-center max-w-xs px-4">
                    <img src={mice} alt="Local Events" className="w-20 h-20 mb-4" />
                    <h3 className="font-bold text-lg mb-2">Local Events</h3>
                    <p className="text-gray-500 text-sm">Barton vanity itself do in it. Preferred to men it engrossed listening.</p>
                </div>
                {/* Customization */}
                <div className="flex flex-col items-center text-center max-w-xs px-4">
                    <img src={setting} alt="Customization" className="w-20 h-20 mb-4" />
                    <h3 className="font-bold text-lg mb-2">Customization</h3>
                    <p className="text-gray-500 text-sm">We deliver outsourced aviation services for military customers</p>
                </div>
            </div>
        </section>
    )
}

export default Category
