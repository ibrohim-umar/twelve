import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import '../../styles/Header.css'
import onikki from '../assets/onikki.jpg'

const Header = () => {
    const navigate = useNavigate('/')
  return (
    <div  className='Header' >

       <section className="navbar">
           <div className="logo">
               <h1> <Link onClick={navigate } to='/' > Formi.</Link> </h1>
            </div>   
            <div className="items">
                <ul className='ul-items' >
                    <li  className='li-items' >  <Link  to='/home' > Home  </Link>   </li>
                    <li  className='li-items' >  <Link  to='/servise' > Servise  </Link>   </li>
                    <li  className='li-items' >  <Link  to='/about' > About </Link>   </li>
                    <li  className='li-items' >  <Link  to='/culture' > Culture </Link>   </li>
                    <li  className='li-items' >  <Link  to='/testimonialas' > Testimonialas  </Link>   </li>
                    <li  className='li-items' >  <Link  to='/methods' > Methods  </Link>   </li>
                    <li  className='li-items' >  <Link  to='/blog' > Blog  </Link>   </li>
                    <li  className='li-items-contact' >  <Link  to='/contactus' > Contact Us  </Link>   </li>
                </ul>
            </div>
        </section> 
        <div className="home">
            <div className="home-left">
                <div className="line"></div>
            <h1> Web Design Agency in Paradise </h1>
            <p> Working with brands all over the world </p>
            <button>Find more</button>
            
            </div>
            <div className="home-right">
                <img src={onikki} alt="" />
            </div>
            
        </div>   
        <div className="page">
            <div className="pages-title">
              <h1>Web Design Ideas</h1>
              <h1> eCommerce Websites </h1>
              <h1> Digital Agency </h1>
            </div>
             <h1>We are a web design agency in Manchester 
                 who care. build relationships, have industry
                 experiance, and win website design awards
             </h1>
             <div className="page-button">
                 <button>Discover</button>
                 <button>Start Building</button>
             </div>
             
        </div> 
        <div className="page2">
           <h1> Best Place for Design </h1>
           <div className="page2-photos">
               <div className="photos1">
                   <img src={onikki} alt="" />
               </div>
               <div className="photos2">
                   <img src={onikki} alt="" />
                   <img src={onikki} alt="" />
                   <img src={onikki} alt="" />
                   <img src={onikki} alt="" />
               </div>
            </div> 
        </div>   
        <Outlet/>
    </div>   
  )
}

export default Header