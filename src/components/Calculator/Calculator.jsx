import ButtonContainer from './ButtonContainer'
import styles from './Calculator.module.css'
import Display from './Display'

const Calculator = () => {

    return (
        <>
            <section className={styles.calculator}>
                <div className={styles.container}>
                    <h1>Calculator</h1>
                    <Display/>
                   <ButtonContainer />
                </div>
            </section>
        </>
    )
}

export default Calculator