import React, { useContext } from 'react'
import { ProductsContext } from '../Global/ProductsContext'
import '../css/home.css'
import Button from '@material-ui/core/Button/Button'
import { Delete, Edit } from '@material-ui/icons'
import "../App";


export const Products = () => {


    const{ products } = useContext(ProductsContext);
    

    return (
        <>
            {products.length !== 0 && 
            <div className="header"><h1>Products</h1><hr/>
                <div className='products-container'>
                    {products.length === 0 && <div>Please Wait.....</div>}
                    {products.map(product => (
                    
                     <div className='product-card' key={product.ProductID}>
                        
                         <div className='product-img'>
                             <img src={product.ProductImg} alt="not found" />
                         </div>

                         <div className='product-name'>
                                <h2>{product.ProductName}</h2>
                            </div>
                            <div className='product-price'>
                             Rs {product.ProductPrice}.00
                         </div>

                      
                    
                     <div className="btns">
                        <div className="edit-btn"><Button
                            color="inherit"
                            variant="contained"
                            size ="small"
                            startIcon={<Edit />}
                            >Edit</Button>
                        </div>
                        <br/>

                        <div className="delete-btn"><Button 
                            color="inherit"
                            variant="contained"
                            size="small"
                            startIcon={<Delete />}>DELETE</Button></div>
                        </div>
                     </div>
                     
                ))}
                <hr/>
                     <br/>
                 <div>
                    <Button className='add-btn'
                    color="secondary"
                    variant="contained"
                    size="large" 
                    >ADD PRODUCTS</Button>
                </div>
               
            </div>
           
            </div>}
    
        </>
    )  
}