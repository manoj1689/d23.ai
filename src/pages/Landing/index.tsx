import React from 'react'
import Navbar from '@/components/LandingNavbar'
import Header from "./Header"
import Formats from "./Format"
import Stepper from "./Stepper"
import Demo from  "./Demo"
import Support from './Support'
import LiveDebate from "./LiveDebate"
import OnDemand from "./OnDemand"
import Recording from "./Recording"
import Testimonials from './Testimonials'
import ContactSection from './ContactUs'
import Footer from '@/components/LandingFooter'

function index() {
  return (
    <div >
        <Navbar/>
        <Header/>
       
        <Formats/>
        <Stepper/>
        <Demo/>
        <Support/>
        <LiveDebate/>
        <OnDemand/>
        <Recording/>
      
        <Testimonials/>
        <ContactSection/>
        <Footer/>
    </div>
  )
}

export default index