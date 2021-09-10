import React from 'react';
import BurgerBuilder from './burgerBuilder/BurgerBuilder';
import Header from './header/Header'
import { Route } from 'react-router-dom'
import Order from './order/Order';
import CheckOut from './order/chechout/CheckOut';

const Main = () => {
    return (
        <div>
            <Header />
            <Route path='/order' component={Order} />
            <Route path='/chekout' component={CheckOut} />
            <Route path='/' exact component={BurgerBuilder} />
        </div>
    )
}

export default Main
