import styles from './Calculator.module.css'

const Calculator = () => {

    const buttonNames = ['','','','','','','','','','','','', ]
    
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
                    <button className={styles.buttonSize}>1</button>
                    <button className={styles.buttonSize}>2</button>
                    <button className={styles.buttonSize}>3</button>
                    <button className={styles.buttonSize}>4</button>
                    <button className={styles.buttonSize}>5</button>
                    <button className={styles.buttonSize}>6</button>
                    <button className={styles.buttonSize}>7</button>
                    <button className={styles.buttonSize}>8</button>
                    <button className={styles.buttonSize}>9</button>
                    <button className={styles.buttonSize}>0</button>
                </div>
            </div>
        </section>
    </>
  )
}

export default Calculator