import React from 'react'
import Catdata from '../Data/Catdata'
import{Routes,Route,link} from "react-router-dom";
import Home from '../Pages/Home';

export default function Header() {
  return (
    <>
    <div className='con'>
      <div>
      <img src='http://rainbowit.net/html/trydo/assets/images/logo/logo-symbol-dark.png'/>
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
          <link class="nav-link active" aria-current="page" to="/">Home</link>
        </li>
        {Catdata.map((a)=>(
            <li className="nav-item">
            <link class="nav-link" to={`/cat/${a.id}`}>{a.cat}</link>
          </li>
          ))}
         </ul>
       </div>
  </div>
</nav>
</div>
</div>
 


 
      
    </>
  )
}
