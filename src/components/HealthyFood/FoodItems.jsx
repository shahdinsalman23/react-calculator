import React from 'react'

const FoodItems = ({ items }) => {
    return (
        <ul>
            {items.map((item) => {
                <li className='list-item' key={item}>
                    <span>{item}</span>
                    <button onClick={() => console.log(`${item} bought`)}>buy</button>
                </li>
            })}
        </ul>
    )
}

export default FoodItems