import styles from './Calculator.module.css'

const Display = ({ DisplayValue }) => {
    return (
        <>
            <div className={styles.inputfield}>
                <input type="text" name="value" id="value" value={DisplayValue} readOnly />
            </div>
        </>
    )
}

export default Display