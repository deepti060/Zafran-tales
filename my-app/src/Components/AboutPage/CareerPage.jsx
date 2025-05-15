import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import Career from '../About/Career'
import Footer from '../Footer/Footer'

const CareerPage = () => {
  return (
    <div>
        <Header/>
          <section
                className="breadcrumb-section"
                style={{ backgroundImage: "url('/Capture.PNG')" }}
            >
                <div className="breadcrumb-overlay">
                    <div className="breadcrumb-content">
                        <h1>CAREER</h1>
                        <p>
                            <Link to="/">Home</Link> / <span>Career</span>
                        </p>
                    </div>
                </div>
            </section>
        <Career/>
        <Footer/>
    </div>
  )
}

export default CareerPage