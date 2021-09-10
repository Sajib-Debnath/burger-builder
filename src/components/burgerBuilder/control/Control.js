import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Button } from 'reactstrap'
const controls = [
    { label: "Salad", type: "salad" },
    { label: "Meat", type: "meat" },
    { label: "Cheese", type: "cheese" }
]

const BuildControl = props => {
    return (
        <div className='d-flex' style={{ fontWeight: "bold", fontSize: '1.2rem' }}>
            <div className='mr-auto mr-5'>{props.label} :</div>
            <button className='btn btn-success btn-sm m-1' onClick={props.addIngredient}> More </button>
            <button className='btn btn-danger btn-sm m-1' onClick={props.removeIngredient}> Less </button>
        </div>
    )
}


const Control = (props) => {
    return (
        <div className='ml-md-5'>
            <Card style={{
                marginTop: "30px",
                marginBottom: "30px",
                textAlign: "center",
                width: "270px"
            }}>
                <CardHeader style={{
                    backgroundColor: '#D70F64',
                    color: 'white'
                }}> <h5> Add Ingredient</h5></CardHeader>
                <CardBody>
                    {
                        controls.map(item => {
                            return <BuildControl
                                label={item.label}
                                type={item.type}
                                key={Math.random()}
                                addIngredient={() => props.addIngredient(item.type)}
                                removeIngredient={() => props.removeIngredient(item.type)}
                            />
                        })
                    }
                </CardBody>
                <CardFooter> <h6> Price : {props.initialPrice} BDT</h6></CardFooter>
                <Button onClick={props.modalToggel} disabled={!props.purchasable}> Order Now</Button>
            </Card>
        </div >
    )
}

export default Control
