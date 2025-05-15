import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import About from '../About/About'
import Footer from '../Footer/Footer'
import './AboutPage.css'

const AboutPage = () => {
    return (
        <div>
            <Header />
            <section
                className="breadcrumb-section"
                style={{ backgroundImage: "url('/Capture.PNG')" }}
            >
                <div className="breadcrumb-overlay">
                    <div className="breadcrumb-content">
                        <h1>ABOUT</h1>
                        <p>
                            <Link to="/">Home</Link> / <span>About</span>
                        </p>
                    </div>
                </div>
            </section>
            <About />
            <Footer />
        </div>
    )
}

export default AboutPage
