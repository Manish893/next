import React from 'react'
import Catdata from '../Data/Catdata'
import{Routes,Route,Link} from "react-router-dom";
import Home from '../Pages/Home';
import Cat from '../Pages/Cat';
import Postdata from '../Data/Postdata';
import Details from '../Pages/Details';
import Contact from '../Pages/Contact';

export default function Header() {
  return (
    <>
    <div className='con'>
      <div>
      <Link to={`/`}><img src='http://rainbowit.net/html/trydo/assets/images/logo/logo-symbol-dark.png'/></Link>
        </div>
        <div>
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        {Catdata.map((a)=>(
            <li className="nav-item">
            <Link class="nav-link" to={`/cat/${a.id}`}>{a.cat}</Link>
          </li>
          ))}
         </ul>
       </div>
  </div>
</nav>
</div>
</div>
<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact/>} />

        <Route path="/cat/:id" element={<Cat />} />
        <Route path="/P/:id" element={<Details/>} />
         </Routes>

 
      
    </>
  )
}
