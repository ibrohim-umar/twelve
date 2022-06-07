import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Header from './components/Header.jsx/Header';
import Home from './components/Home/Home';
import Category from './components/Home/Category/Category.jsx';

import Products from './components/Home/Products/Products';
import Main from './components/Home/Main/Main';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Router>
       <Routes>
         <Route  element={<Header/>} >
           <Route   path= '/home' element={<Home/>} />
           
         </Route> 
         <Route element={<Header/>} >
            <Route element={<Products/>} >
            <Route  path='/home/:category' element={<Category/>} />
              
            
            
         </Route> 
         </Route>

         
         

         <Route   path='/' element={<App />} />
       </Routes>
      
     </Router>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

