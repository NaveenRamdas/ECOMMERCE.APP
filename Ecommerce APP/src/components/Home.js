import React from 'react'
import { Products } from './Products'
import{ AddProducts } from './AddProducts'
import Button from '@material-ui/core/Button/Button'
import { Add } from '@material-ui/icons'
import "../App"


export const Home = () => {
   return(

        <div className='grid-container'>
          <div className="grid-btn1"><a href="AddProducts" >
            <Button color="primary" 
            variant = "contained"
            size = "large"
            startIcon={<Add />}
            >Add Products</Button></a></div>
          <div className="grid-btn2"><a href="Products" >
            <Button color="primary"
            variant= "contained"
            size = "large"
            >Products</Button></a></div>           
        </div>   
         
         
        
    )
}
 

