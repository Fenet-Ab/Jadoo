import React from 'react'
import greek from '../../assets/greek.png'
import greek2 from '../../assets/greek.png' // Placeholder for floating card, you can swap for another image if needed

const steps = [
  {
    color: 'bg-yellow-400',
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="3" fill="currentColor" /></svg>
    ),
    title: 'Choose Destination',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.'
  },
  {
    color: 'bg-orange-500',
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="currentColor" /></svg>
    ),
    title: 'Make Payment',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.'
  },
  {
    color: 'bg-cyan-700',
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 10h18M3 14h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
    ),
    title: 'Reach Airport on Selected Date',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.'
  },
]

const Book = () => {
  return (
    <section className="w-full py-16 bg-white flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto gap-12">
        {/* Left Side */}
        <div className="flex-1 max-w-xl flex flex-col items-start justify-center px-4 md:px-8">
          <p className="text-gray-400 font-semibold mb-2">Easy and Fast</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 leading-tight">Book Your Next Trip<br className="hidden md:block" /> In 3 Easy Steps</h2>
          <div className="space-y-8 w-full">
            {steps.map((step, idx) => (
              <div key={idx} className="flex items-start gap-4 w-full">
                <span className={`w-12 h-12 flex items-center justify-center rounded-lg ${step.color} shadow-md mt-1`}>
                  {step.icon}
                </span>
                <div>
                  <h3 className="font-bold text-lg mb-1">{step.title}</h3>
                  <p className="text-gray-500 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Right Side */}
        <div className="flex-1 flex items-center justify-center relative px-4 md:px-8">
          <div className="bg-white rounded-3xl shadow-2xl w-96 p-6 z-10 relative flex flex-col items-center justify-center">
            <img src={greek} alt="Trip To Greece" className="w-full h-40 object-cover rounded-2xl mb-4" />
            <h3 className="font-bold text-lg mb-1 self-start">Trip To Greece</h3>
            <p className="text-gray-400 text-sm mb-2 self-start">14-29 June | by Robbin joseph</p>
            <div className="flex items-center gap-4 text-gray-400 text-sm mb-4 self-start">
              <span className="flex items-center"><svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" /></svg>24 people going</span>
            </div>
            <div className="flex justify-end w-full">
              <button className="text-gray-400 hover:text-purple-500">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
              </button>
            </div>
            {/* Floating Progress Card */}
            <div className="absolute -bottom-10 -right-10 bg-white rounded-2xl shadow-lg w-60 p-4 flex items-center gap-4 z-20">
              <img src={greek2} alt="Trip to rome" className="w-12 h-12 object-cover rounded-xl" />
              <div>
                <p className="text-xs text-gray-400 font-semibold mb-1">Ongoing</p>
                <h4 className="font-bold text-base mb-1 text-black">Trip to rome</h4>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                  <div className="bg-blue-500 h-2 rounded-full" style={{width: '40%'}}></div>
                </div>
                <span className="text-xs text-blue-500 font-semibold">40% completed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Book