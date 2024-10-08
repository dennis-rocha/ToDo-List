import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

import rocket from './assets/rocket.svg'
import './App.css'
import { Task } from './tasks'

function App() {
  const [tasks, setTasks] = useState([])

  const [textTitle,setTextTitle] = useState('')

  const tasksCompleted = tasks.reduce((value, task) => {
    if (task.completed) {
      return value + 1
    }
  
    return value
    }, 0)


  function handleChangeTexteTitle() {
    setTextTitle(event.target.value)
  }

  function handleCheckbleCompleted(taskToUpdate, newValueCompleted) {
    const taskIdFilter = tasks.map((task) => {
      if (task.id === taskToUpdate) {
        return {
          ...task,
          completed: newValueCompleted
        }
      }
      return { ...task}
    })
    setTasks(taskIdFilter)
  }

  function handleDeleteComment(taskToDelete) {
    const taskWithoutDeletedOne = tasks.filter(task => {
      return task.id !== taskToDelete
    })

    setTasks(taskWithoutDeletedOne)
  }


  function handleAddTask() {
    event.preventDefault()
    if (textTitle === '') {
      return
    }
    
    setTasks([...tasks, {
      id: uuidv4(),
      title: textTitle,
      completed: false
    }])
    setTextTitle('')
  }

  return (
    <>
      <header className="app-header">
        <img src={rocket} className="App-logo" alt="Rocket logo" />
        <p>To<span>Do</span></p>
      </header>
      <main>
        <div className="app-form">
          <form action="" onSubmit={handleAddTask}>
            <input type="text" className='shadow' onChange={handleChangeTexteTitle} value={textTitle} placeholder="Adicione uma nova tarefa" />
            <button className='shadow'>Criar<i className="bi bi-plus-circle"></i></button>
          </form>
        </div>
        <section>
          <header>
            <div>
              <p className='tasks-created'>Tarefas Criadas</p>
              <span>{tasks.length}</span>
            </div>
            <div>
              <p className='tasks-done'>Concluídas</p>
              <span>{tasks.length > 0 ? (tasksCompleted + ' de ' + tasks.length) : (0)}</span>
            </div>
          </header>
          <div>
            {tasks.length != 0 ? (
              <ul className='tasks-list'>
                {tasks.map((task) => (
                  console.log(task),
                  <Task key={task.id} 
                    taskId={task.id} 
                    title={task.title} 
                    completed={task.completed} 
                    onCheckbleCompleted={handleCheckbleCompleted} 
                    onDeleteComment={handleDeleteComment}/>
                ))}
              </ul>
            ) : (
              <div className='no-tasks'>
                <i className="bi bi-list-check"></i>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  )
}

export default App
