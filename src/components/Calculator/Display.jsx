import styles from './Calculator.module.css'

const Display = () => {
    return (
        <>
            <div className={styles.inputfield}>
                <input type="text" name="value" id="value" />
            </div>
        </>
    )
}

export default Display