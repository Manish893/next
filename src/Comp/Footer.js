import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
    
    <section className=''>
    <div className='text-center footer'>
        <p> READY TO DO THIS</p>
        <h1>Let's get to work</h1>
        <button><Link to={'/contact'}><h2>CONTACT US</h2></Link></button>  
    </div>
    </section>
    <section className='container-fluid'>
      <div className='row black py-5'>
        <div className='col-lg-4'><img src='http://rainbowit.net/html/trydo/assets/images/logo/logo.png'/></div>
        <div className='col-lg-4'>
        <div class="rounded-circle ">
        <i class="bi bi-facebook"></i>
        <i class="bi bi-whatsapp"></i>
        <i class="bi bi-binoculars-fill"></i>
        <i class="bi bi-skype"></i>
        </div>

        </div>
        <div className='col-lg-4'>
          <p>Copyright © 2022 Rainbow-Themes. All Rights Reserved.</p>
        </div>

      </div>

    </section>
    </>
  )
}
