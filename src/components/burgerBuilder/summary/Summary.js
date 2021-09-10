import React from 'react';

const Summary = props => {
    const summary = props.ingredient.map(item => {
        return (
            <li key={item.type}>
                <span style={{ textTransform: 'capitalize' }}>{item.type} : {item.amount}</span>
            </li>
        )
    })
    return (
        <div>
            <ul>{summary}</ul>
        </div>
    );
};

export default Summary;