import React,  {useState, useEffect} from 'react'
import { useLocation, useParams } from 'react-router-dom'
import './Category.js'
import {Container}  from './Category.js'
import {plants} from '../../Moch.js'

const Category = () => {
  const [data, setData] = useState([])
  const {pathname} = useLocation()
  useEffect(() =>{
   let newData = plants.filter((value) => value.category. toLocaleLowerCase() === 
   category.replace(':', '').toLocaleLowerCase())
   setData(newData)
  }, [pathname] )
  const {category} = useParams()
  
  return (
    <Container>
       {data.map((value) => 
          (<h1>  {value.name} </h1>))
      }
    </Container>
      
  )
}

export default Category