import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Body from './components/Body/Body'
import Category from './components/Category/Category'
import TopSelling from './components/TopSelling/TopSelling'
import Book from './components/Book/Book'
import About from './components/About/About'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Body />
      <Category />
      <TopSelling />
      <Book />
      <About />
      <Footer />
    </div>
  )
}

export default App