import React from 'react';
import './Ingerdient.css'
import Top from '../../../assets/images/top.png'
import Salad from '../../../assets/images/salad.png'
import Meat from '../../../assets/images/meat.png'
import Cheese from '../../../assets/images/cheese.png'
import Bottom from '../../../assets/images/bottom.png'

const Ingerdinet = (props) => {
    let ingerdient = null;
    switch (props.type) {
        case 'top':
            ingerdient = <div> <img src={Top} alt="" /></div>
            break;

        case 'salad':
            ingerdient = <div> <img src={Salad} alt="" /></div>
            break;

        case 'meat':
            ingerdient = <div> <img src={Meat} alt="" /></div>
            break;

        case 'cheese':
            ingerdient = <div> <img src={Cheese} alt="" /></div>
            break;

        case 'bottom':
            ingerdient = <div> <img src={Bottom} alt="" /></div>
            break;

        default:
            ingerdient = null;
            break;
    }
    return (
        <div className='ingredients'>
            {ingerdient}
        </div>
    )
}

export default Ingerdinet
