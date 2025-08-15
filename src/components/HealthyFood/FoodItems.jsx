import React, { useState } from 'react'
import Item from './Item'

const FoodItems = ({ items }) => {

        const [activeItems, setActiveItems] = useState([])

        const onBuyButton = (item) => {
            let newItems = [...activeItems, item]
            setActiveItems(newItems)
        }

    return (
        <ul>
            {items.map((item) => (
               <Item  key={item} bought={activeItems.includes(item)} foodItem={item} handlebuyButton={(e) => onBuyButton(item, e)} />
            ))}
        </ul>
    )
}

export default FoodItems