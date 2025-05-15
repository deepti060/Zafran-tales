import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import Services from '../About/Services'
import Footer from '../Footer/Footer'


const ServicePage = () => {
  return (
    <div>
        <Header/>
        <section
                className="breadcrumb-section"
                style={{ backgroundImage: "url('/Capture.PNG')" }}
            >
                <div className="breadcrumb-overlay">
                    <div className="breadcrumb-content">
                        <h1>SERVICES</h1>
                        <p>
                            <Link to="/">Home</Link> / <span>Service</span>
                        </p>
                    </div>
                </div>
            </section>
        <Services/>
        <Footer/>
    </div>
  )
}

export default ServicePage