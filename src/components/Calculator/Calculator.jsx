import styles from './Calculator.module.css'

const Calculator = () => {
  return (
    <>
        <section className={styles.calculator}>
            <div className={styles.container}>
                <h1>Calculator</h1>
                <div className={styles.inputfield}>
                    <input type="text" name="value" id="value" />
                    <button className={styles.clearbtn}>C</button>
                </div>
            </div>
        </section>
    </>
  )
}

export default Calculator