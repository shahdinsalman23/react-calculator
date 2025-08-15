import { useState } from 'react'
import ButtonContainer from './ButtonContainer'
import styles from './Calculator.module.css'
import Display from './Display'

const Calculator = () => {

    const [calVal, setCalVal] = useState('')

    const onButtonClick = (buttonText) => {
        if (buttonText === 'C') {
            setCalVal('');
        } else if (buttonText === '=') {
            const result = eval(calVal)
            setCalVal(result)
        } else {
            const newDisplayValue = calVal + buttonText
            setCalVal(newDisplayValue)
        }

    }

    return (
        <>
            <section className={styles.calculator}>
                <div className={styles.container}>
                    <h1>Calculator</h1>
                    <Display DisplayValue={calVal} />
                    <ButtonContainer onButtonClick={onButtonClick} />
                </div>
            </section>
        </>
    )
}

export default Calculator