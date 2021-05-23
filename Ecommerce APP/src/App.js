import React, { Component } from 'react'
import { BrowserRouter,  Route, Switch } from 'react-router-dom';
import { AddProducts } from './components/AddProducts';
import { Products } from './components/Products';
import { Home } from './components/Home'
import { ProductsContextProvider } from './Global/ProductsContext';
import './css/home.css'
import {Button} from '@material-ui/core/Button/Button'
export class App extends Component {
    render() {
        return (

            
            
            <ProductsContextProvider>
                <BrowserRouter>
                    <Switch>
                        <Route exact path ='/' component={Home} />
                        <Route path= '/AddProducts' component={AddProducts} />
                        <Route path= '/Products' component={Products} />   
                    </Switch>
                </BrowserRouter>
            </ProductsContextProvider>
        );
    }
}

export default App  