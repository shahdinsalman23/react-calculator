import React, { useState } from 'react'
import Item from './Item'

const FoodItems = ({ items, bought }) => {

        const [activeItems, setActiveItems] = useState([])

        const onBuyButton = (e) => {

        }

    return (
        <ul>
            {items.map((item) => (
               <Item  key={item} foodItem={item} handlebuyButton={} />
            ))}
        </ul>
    )
}

export default FoodItems