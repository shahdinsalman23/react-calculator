import styles from './Todoapp.module.css'

const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <>
      <ul>
        {todoItems.map((item, index) => (
          <li key={index}>
              <h6>{item.name}</h6>
              <h6>{item.dueDate}</h6>
              <button className={styles.delTodoBtn} onClick={() => onDeleteClick(item)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default TodoItems