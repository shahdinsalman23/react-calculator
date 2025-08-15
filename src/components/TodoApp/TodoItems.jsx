import styles from './Todoapp.module.css'

const TodoItems = ({ todoItems }) => {
  return (
    <>
      <ul>
        {todoItems.map((item, index) => (
          <li key={index}>
              <h6>{item.name}</h6>
              <h6>{item.dueDate}</h6>
              <button className={styles.delTodoBtn}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default TodoItems