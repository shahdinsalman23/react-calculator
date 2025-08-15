import styles from './Calculator.module.css'

const ButtonContainer = () => {

     const buttonNames = ['C', '1', '2', '3', '+', '4', '5', '6', '-', '7', '8','9','*','=','.','0',]

    return (
        <>
            <div className={styles.buttonContainer}>
                {buttonNames.map((btn) => (
                    <button key={btn} className={styles.buttonSize}>{btn}</button>
                ))}
            </div>
        </>
    )
}

export default ButtonContainer