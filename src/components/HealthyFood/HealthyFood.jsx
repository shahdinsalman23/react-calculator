import React, { useState } from 'react'
import FoodInput from './FoodInput';
import ErrorMessage from './ErrorMessage';
import FoodItems from './FoodItems';
import Container from '../Container';

const HealthyFood = () => {

    const [foodItems, setFoodItems] = useState(['Salad', 'Tikka', 'Raita'])


    const onKeyDown = (e) => {
        if (e.key === "Enter") {
            let newFoodItems = e.target.value
            let newItems = [...foodItems, newFoodItems]
            setFoodItems(newItems)
        }
    }

    return (
        <>
            <Container>
                <h1 className='heading'>Healthy Foods</h1>
                <FoodInput handleKeyDown={onKeyDown} />
                <ErrorMessage items={foodItems} />
                <FoodItems items={foodItems} bought={activeItems.includes(foodItems)}/>
            </Container>
        </>
    )
}

export default HealthyFood