import React from 'react'
import Header from '../Header/Header'
import HeroSlider from '../Hero/HeroSlider'
import About from '../About/About'
import About1 from '../About/About1'
import Team from '../About/Team'
import Testimonial from '../Testimonial/Testimonial'
import Footer from '../Footer/Footer'
import NewsArticles from '../About/NewsArticles'

const Home = () => {
  return (
    <div>
        <Header/>
        <HeroSlider/>
        <About/>
        <About1/>
        <Team/>
        <Testimonial/>
        <NewsArticles/>
        <Footer/>
    </div>
  )
}

export default Home