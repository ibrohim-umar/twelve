import React from 'react'
import './style'
import { Container, Right, Left, Wrapper, Title } from './style'
import {category} from '../../../utils/category'

import { Outlet } from 'react-router-dom'



const Products = () => {
  return (
   <Container>
       <Left>
           {category.map((value) => (
               <Wrapper  key={value.id} to={`/home${value.path}`} >
                   <Title key={value.id}>  {value.title}  </Title>
                   <Title key={value.id}>  ({value.count})  </Title>
                      
               </Wrapper>
               
           ) )}
       </Left>
       <Right>
         <Outlet/>
       </Right>
   </Container>
  )
}

export default Products