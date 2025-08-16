import { useRef } from 'react'
import styles from './Todoapp.module.css'

const AddTodo = ({ onNewitem }) => {

    const todoNameElement = useRef();
    const dueDateElement =  useRef()


    const handleAddButtonClicked = (e) => {
        e.preventDefault();
        const todoName = todoNameElement.current.value;
        const dueDate = dueDateElement.current.value;
        onNewitem(todoName, dueDate);
        todoNameElement.current.value = '';
        dueDateElement.current.value = '';
    }


  return (
    <form className={styles.addtodo} onSubmit={handleAddButtonClicked}>
        <input type="text" ref={todoNameElement} />
        <input type="date" ref={dueDateElement} />
        <button className={styles.addTodoBtn} type='submit'>Add</button>
    </form>
  )
}

export default AddTodo