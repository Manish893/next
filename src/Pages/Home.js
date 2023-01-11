import React from 'react'
import Sajan from '../Comp/Sajan'
import Slider from '../Slider'
import Postdata from '../Data/Postdata'
import { Link } from 'react-router-dom'
import Managedata from '../Data/Managedata'
import Footer from '../Comp/Footer'
import Contact from './Contact'
import Latest from '../Comp/Latest'

export default function Home() {
  return (
    //<i class="bi bi-person-gear"></i>
    <>
    <Slider/>
    <div className='container'>
    <div className='container py-5'>
        <div className='row'>
            <Sajan title="Business Stratagy"  icon="bi bi-person-gear fa-3x" desc="I throw myself down among the tall grass by the stream as I lie close to the earth."/>
            <Sajan title="Development" icon="bi bi-person-bounding-box fa-3x" desc="I throw myself down among the tall grass by the stream as I lie close to the earth."/>
            <Sajan title="Marketing " icon="bi bi-person-bounding-box fa-3x" desc="I throw myself down among the tall grass by the stream as I lie close to the earth."/>
        </div>
    </div>
    <div className='container pb-3'>
        <div className='row'>
            <div className='col'>
                <h1>Services</h1>
                <p>There are many variations of passages of Lorem Ipsum available, but.</p>
                <button> Request Custom Service </button>
            </div>
        {Postdata.map((a)=>(
            <div className='col'>
        
            <>
            <img src={a.img}/>
            <h2>{a.title}</h2>
            <p>{a.desc}</p>
            <button><Link to={`/P/${a.id}`}>read more</Link></button>
            
            
            </>
       
        </div> 
        ))}
        </div>
    </div>
    </div>
    <section className='container-fluid'>
         
             
        <div className='photo1'>
            <div className='row align-items-center nn'>
                <div className='col-lg-4'><h1>992+</h1><p>
The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.</p></div>
                <div className='col-lg-4'><h1>998+</h1><p>
The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.</p></div>
                <div className='col-lg-4'><h1>992+</h1><p>
The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.</p></div>
          </div>
        </div>

    </section>
    <section className='container bb'>
        <div className='row ps-5 py-5 pe-5'>
            <div className='col-lg-5'><img className='w-100' src='http://rainbowit.net/html/trydo/assets/images/about/about-4.png'/></div>
            <div className='col-lg-7 '>
                <h1 className='"text-xl-start"'>Working Process</h1>
                <p1 class="fs-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Enim exercitationem impedit iure quia quo recusandae?</p1>
            {/* <h2>Your business Skills But Never Stop Imporving</h2> */}
            {/* <p class="fs-5">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. */}
                 {/* 3 wolf moon officia aute, non cupidatat.</p> */}
                 <h2>Tatic That Can Help to Grow your </h2>
                 <p class="fs-5">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                 3 wolf moon officia aute, non cupidatat</p>
                 <h2>The seceret of sucessfull business</h2>
                 <p class="fs-5">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                 3 wolf moon officia aute, non cupidatat</p>
                 {/* <h2>How to start a business with business</h2> */}
                 {/* <p class="fs-5">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. */}
                 {/* 3 wolf moon officia aute, non cupidatat</p> */}
            </div>
        </div>

    </section>
    <section className='container cc py-5'>
        <div className='text-center'>
        
        <h1 className='text-xl'>Managing Team</h1>
        <p>There are many variations of passages of Lorem Ipsum available,
but the majority have suffered alteration.</p>
</div>
    </section>
    <section className='container '>
       <div className='row'>
    {Managedata.map((a)=>(
        <>
        <div className='col-lg-3'>
         <img className='w-100' src={a.img} alt="" />
        <h4>{a.title}</h4>
        <p>{a.desc}</p>
        <i class="bi bi-facebook"></i>
        </div>
        </>
        

    ))}
    </div>
    </section>
    {/* <section className='container mt-5 py-5 logo'> */}
        <div className='row ms-5 py-5'>
            <div className='col-lg-4 border py-5 ll'><img  src="http://rainbowit.net/html/trydo/assets/images/brand/brand-01.png" alt="" /></div>
            <div className='col-lg-4 border py-5 ll'><img src="http://rainbowit.net/html/trydo/assets/images/brand/brand-02.png" alt="" /></div>
            <div className='col-lg-4 border py-5 ll'><img  src="http://rainbowit.net/html/trydo/assets/images/brand/brand-03.png" alt="" /></div>
            <div className='col-lg-4 border py-5 ll'><img  src="http://rainbowit.net/html/trydo/assets/images/brand/brand-04.png" alt="" /></div>
            <div className='col-lg-4 border py-5 ll'><img  src="http://rainbowit.net/html/trydo/assets/images/brand/brand-05.png" alt="" /></div>
            <div className='col-lg-4 border py-5 ll'><img  src="http://rainbowit.net/html/trydo/assets/images/brand/brand-06.png" alt="" /></div>
         </div>
    {/* </section> */}
    <Latest/>
    
    
    
    
    
  
  
       
        
    
   

    
  

      
    </>
  )
}
