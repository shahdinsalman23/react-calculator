import React, { useState } from 'react'
import AddTodo from './AddTodo'
import TodoItem from './TodoItems'
import styles from './Todoapp.module.css'
import WelccomeMessage from './WelccomeMessage'

const TodoApp = () => {

   

    return (
        <>

            <section className={styles.todoapp}>
                <AddTodo  onNewitem={handleNewItem} />
                {todoItems.length === 0 &&  <WelccomeMessage/>}
                <TodoItem todoItems={todoItems} onDeleteClick={handleDeleteItem} />
            </section>
        </>
    )
}

export default TodoApp