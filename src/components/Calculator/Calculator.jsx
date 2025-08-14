import styles from './Calculator.module.css'

const Calculator = () => {

    const buttonNames = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '=', '9', '0', '.',]

    return (
        <>
            <section className={styles.calculator}>
                <div className={styles.container}>
                    <h1>Calculator</h1>
                    <div className={styles.inputfield}>
                        <input type="text" name="value" id="value" />
                        <button className={styles.clearbtn}>C</button>
                    </div>
                    <div className={styles.buttonContainer}>
                        {buttonNames.map((btn) => (
                            <button key={btn} className={styles.buttonSize}>{btn}</button>
                        ))}

                    </div>
                </div>
            </section>
        </>
    )
}

export default Calculator