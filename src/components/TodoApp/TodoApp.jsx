import React, { useState } from 'react'
import AddTodo from './AddTodo'
import TodoItem from './TodoItems'
import styles from './Todoapp.module.css'
import WelccomeMessage from './WelccomeMessage'

const TodoApp = () => {

    const [todoItems, setTodoItems] = useState([]);

    const handleNewItem = (itemName, itemDueDate) => {
        console.log(`New Item added ${itemName} Date: ${itemDueDate}`)
        const newTodoItems = [...todoItems, { name: itemName, dueDate: itemDueDate }]
        setTodoItems(newTodoItems)
    }

    const handleDeleteItem = (todoItemName) => {
        let deleteTodoItem = todoItems.filter(item => item.name !== todoItemName.name)
        setTodoItems(deleteTodoItem);
    }

    return (
        <>

            <section className={styles.todoapp}>
                <AddTodo  onNewitem={handleNewItem} />
                <WelccomeMessage todoItems={todoItems} />
                <TodoItem todoItems={todoItems} onDeleteClick={handleDeleteItem} />
            </section>
        </>
    )
}

export default TodoApp