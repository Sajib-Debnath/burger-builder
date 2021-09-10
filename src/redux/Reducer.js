const INGREDIENT_PRICE = {
    salad: 15,
    meat: 50,
    cheese: 20
}

const INTIAL_STATE = {
    ingredient: [
        { type: 'salad', amount: 0 },
        { type: 'meat', amount: 0 },
        { type: 'cheese', amount: 0 }
    ],
    initialPrice: 80,
    isModalOpen: false,
    purchasable: false
}

export const reducer = (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case value:

            break;

        default:
            break;
    }
}
