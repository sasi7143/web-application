import React from 'react';
import Navbar from './Navbar';

function AboutUs() {
  return (
    <div id='main'>
        <Navbar />
        <div className='name'>
            <h1>AboutUs</h1>
            <h2><span>Our Mission</span></h2>
            <p className='details'>To enhance the business growth of our clients by delivering market-redefining high-quality
                 services & solutions that sustainably create the values.</p>
            <h2><span>Our Vision</span></h2>
            <p className='details'>To become one of the most preferred software service providers in Embedded, Transportation including Automotive Domain, 
                Banking & Finance, Digital Engineering, 
                Energy & Utilities and Mobility through our Core Values and Execution Excellence.</p>
            <h2><span>Spirit of 7hillsTS</span></h2>
            <p className='details'>Unyielding Integrity</p>
            <p className='details'>Respect Individual</p>
            <p className='details'>Social Responsibilities</p>
        </div>
    </div>
  )
}

export default AboutUs;