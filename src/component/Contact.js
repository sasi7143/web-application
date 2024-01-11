import React from 'react';

const Contact = () => {
  return (
    <div id='contact'>
        <h3>ContactUs</h3>
        <div className='contact-input'>
            <input type='email' placeholder='example@gmail.com'></input>
        </div>

    <div className='map-section'>
        <div className='gmap-section'>
        <iframe id='gmap_canvas'
       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.574280326926!2d77.66239316886005!3d12.87075048933951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6ca95855556b%3A0xeef727e76a52a3f7!2s10th%20Cross%20Rd%2C%20Bengaluru%2C%20Karnataka%20560100!5e0!3m2!1sen!2sin!4v1704691002317!5m2!1sen!2sin"
       width="500"
       height="400" 
       style={{ border:"0"}} 
       allowfullscreen="" 
       loading="lazy" 
       referrerpolicy="no-referrer-when-downgrade"> 
       </iframe>
        </div>
        </div>
    </div>
  )
}

export default Contact;