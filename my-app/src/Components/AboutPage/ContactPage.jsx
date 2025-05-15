import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import ContactUs from '../About/ContactUs'
import Footer from '../Footer/Footer'

const ContactPage = () => {
  return (
    <div>
        <Header/>
         <section
                className="breadcrumb-section"
                style={{ backgroundImage: "url('/Capture.PNG')" }}
            >
                <div className="breadcrumb-overlay">
                    <div className="breadcrumb-content">
                        <h1>CONTACT</h1>
                        <p>
                            <Link to="/">Home</Link> / <span>CONTACT</span>
                        </p>
                    </div>
                </div>
            </section>
        <ContactUs/>
        <Footer/>
    </div>
  )
}

export default ContactPage