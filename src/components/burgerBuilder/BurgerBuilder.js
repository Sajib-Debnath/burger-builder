import React, { Component } from 'react';
import Burger from './burger/Burger';
import Control from './control/Control';
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap'
import Summary from './summary/Summary';

const INGREDIENT_PRICE = {
    salad: 15,
    meat: 50,
    cheese: 20
}

export default class BurgerBuilder extends Component {
    state = {
        ingredient: [
            { type: 'salad', amount: 0 },
            { type: 'meat', amount: 0 },
            { type: 'cheese', amount: 0 }
        ],
        initialPrice: 80,
        isModalOpen: false,
        purchasable: false
    }

    addIngredient = type => {
        const ingredient = [...this.state.ingredient];
        const initialPrice = this.state.initialPrice + INGREDIENT_PRICE[type]
        for (let item of ingredient) {
            if (item.type === type) item.amount++;
        }
        this.setState({ ingredient: ingredient, initialPrice: initialPrice })
        this.updatePurchasable(ingredient)
    }


    removeIngredient = type => {
        const ingredient = [...this.state.ingredient];
        const initialPrice = this.state.initialPrice - INGREDIENT_PRICE[type]
        for (let item of ingredient) {
            if (item.type === type) {
                if (item.amount <= 0) return;
                item.amount--;
            }
        }
        this.setState({ ingredient: ingredient, initialPrice: initialPrice })
        this.updatePurchasable(ingredient)
    }

    modalToggel = () => {
        this.setState({ isModalOpen: !this.state.isModalOpen })
    }

    updatePurchasable = ingredient => {
        const sum = ingredient.reduce((sum, element) => {
            return sum = sum + element.amount
        }, 0);

        this.setState({ purchasable: sum > 0 })
    }

    handaleChekout = () => {
        this.props.history.push('/chekout')
    }


    render() {
        return (
            <div >
                <div className="container">
                    <div className='d-flex flex-md-row flex-col'>
                        <Burger ingredient={this.state.ingredient} />
                        <Control
                            removeIngredient={this.removeIngredient}
                            addIngredient={this.addIngredient}
                            initialPrice={this.state.initialPrice}
                            modalToggel={this.modalToggel}
                            purchasable={this.state.purchasable}
                        />
                    </div>

                    <Modal isOpen={this.state.isModalOpen} className='container'>
                        <ModalHeader> Your Order Summary </ModalHeader>
                        <ModalBody>
                            <h5>Totoal Price{this.state.initialPrice.toFixed(0)}</h5>
                            <Summary ingredient={this.state.ingredient} />
                        </ModalBody>
                        <ModalFooter>
                            <Button color="success" onClick={this.handaleChekout}> Continue to checkout</Button>
                            <Button color="secondary" onClick={this.modalToggel}> Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        )
    }

}

