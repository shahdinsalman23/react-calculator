import styles from './Todoapp.module.css'

const WelccomeMessage = ({ todoItems }) => {
  return (
    todoItems.length === 0 &&  <h4 className={styles.welcomeMessage}>Enjoy your day</h4>
  )
}

export default WelccomeMessage