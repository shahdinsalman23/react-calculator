import { useState } from 'react'
import styles from './Todoapp.module.css'

const AddTodo = ({ onNewitem }) => {

    const [todoName, setTodoName] = useState("")
    const [dueDate, setDueDate] = useState("")

    const handleNameChange = (e) =>  {
        setTodoName(e.target.value)
    }

    const handleDateChange = (e) =>  {
        setDueDate(e.target.value)
    }

    const handleAddButtonClicked = () => {
        onNewitem(todoName, dueDate)
        setTodoName("")
        setDueDate("")
    }
    

  return (
    <div className={styles.addtodo}>
        <input type="text" value={todoName}  onChange={handleNameChange} />
        <input type="date" value={dueDate} onChange={handleDateChange} />
        <button className={styles.addTodoBtn} onClick={handleAddButtonClicked}>Add</button>
    </div>
  )
}

export default AddTodo