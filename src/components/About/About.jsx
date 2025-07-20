import React from 'react'

const testimonials = [
  {
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    name: 'Mike taylor',
    location: 'Lahore, Pakistan',
    quote: '“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”',
  },
  {
    avatar: 'https://randomuser.me/api/portraits/men/33.jpg',
    name: 'Chris Thomas',
    location: 'CEO of Red Button',
    quote: '',
  },
]

const About = () => {
  return (
    <section className="w-full py-16 bg-white flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto gap-12">
        {/* Left Side */}
        <div className="flex-1 flex flex-col items-start justify-center px-4 md:px-8">
          <p className="text-gray-400 font-semibold mb-2 tracking-widest">TESTIMONIALS</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 leading-tight">What People Say<br />About Us.</h2>
          {/* Dots */}
          <div className="flex items-center gap-3 mt-4">
            <span className="w-3 h-3 rounded-full bg-gray-700 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-gray-200 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-gray-100 inline-block"></span>
          </div>
        </div>
        {/* Right Side */}
        <div className="flex-1 flex flex-col items-start justify-center relative px-4 md:px-8">
          {/* Main Testimonial Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-xl relative z-10 mb-6">
            <img src={testimonials[0].avatar} alt={testimonials[0].name} className="w-16 h-16 rounded-full border-4 border-white shadow-lg absolute -top-8 left-8" />
            <p className="text-gray-500 text-lg mb-6 mt-4">{testimonials[0].quote}</p>
            <div>
              <span className="font-bold text-gray-900 block">{testimonials[0].name}</span>
              <span className="text-gray-400 text-sm">{testimonials[0].location}</span>
            </div>
          </div>
          {/* Secondary Testimonial Card */}
          <div className="bg-white rounded-2xl shadow p-6 w-full max-w-md ml-12 mt-2 flex flex-col">
            <span className="font-bold text-gray-700 mb-1">{testimonials[1].name}</span>
            <span className="text-gray-400 text-sm">{testimonials[1].location}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About