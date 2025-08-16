import { useState } from 'react'
import styles from './Todoapp.module.css'

const AddTodo = ({ onNewitem }) => {

   


  return (
    <div className={styles.addtodo}>
        <input type="text" value={todoName}  onChange={handleNameChange} />
        <input type="date" value={dueDate} onChange={handleDateChange} />
        <button className={styles.addTodoBtn} onClick={handleAddButtonClicked}>Add</button>
    </div>
  )
}

export default AddTodo