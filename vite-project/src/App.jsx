import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

import rocket from './assets/rocket.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Task } from './tasks'

function App() {
  const [tasks, setTasks] = useState([{
      id: 1,
      title: 'Teste',
      completed: false
    }])

  const [textTitle,setTextTitle] = useState('')


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
    <main>
      <header className="app-header">
        <img src={rocket} className="App-logo" alt="Rocket logo" />
        <p>To<span>Do</span></p>
      </header>
      <div className="app-form">
        <form action="" onSubmit={handleAddTask}>
          <input type="text" onChange={handleChangeTexteTitle} value={textTitle} placeholder="Adicione uma nova tarefa" />
          <button>Criar</button>
        </form>
      </div>
      <section>
        <header>
          <div>
            <p>Tarefas Criadas</p>
            <span>0</span>
          </div>
          <div>
            <p>Concluídas</p>
            <span>0</span>
          </div>
        </header>
        <div>
          {tasks.length != 0 ? (
            <ul>
              {tasks.map((task) => (
                console.log(task),
                <Task key={task.id} taskId={task.id} title={task.title} completed={task.completed} onCheckbleCompleted={handleCheckbleCompleted} onDeleteComment={handleDeleteComment}/>
              ))}
            </ul>
          ) : (
            <p>Nenhuma tarefa criada</p>
          )}
        </div>
      </section>
    </main>
  )
}

export default App
