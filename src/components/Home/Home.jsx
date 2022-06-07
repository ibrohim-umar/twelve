import React from 'react'
import Category from './Category/Category'
import Main from './Main/Main'
import Products from './Products/Products'
import './style'
import { Container } from './style'
const Home = () => {
  return (
    
    <Container>
       
        <Main/>
        <Products/>
         
    </Container>
  )
}

export default Home