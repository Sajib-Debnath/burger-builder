import React from 'react';
import './Burger.css';
import Ingerdinet from '../ingerdient/Ingerdinet';

const Burger = (props) => {
    let ingredientArr = props.ingredient.map(item => {
        let amountArr = [...Array(item.amount).keys()];
        return amountArr.map(_ => {
            return <Ingerdinet type={item.type} key={Math.random()} />
        })
    })
        .reduce((arr, element) => {
            return arr.concat(element);
        }, [])

    if (ingredientArr.length === 0) {
        ingredientArr = <h2>Please add some Ingredients!</h2>
    }

    return (
        <div className='Burger'>
            <Ingerdinet type='top' />
            {ingredientArr}
            <Ingerdinet type='bottom' />
        </div>
    )
}

export default Burger;
