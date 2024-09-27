import styles from './tasks.module.css'

export function Task({taskId, title, completed, onCheckbleCompleted, onDeleteComment}) {
  function handleDeleteTask() {
    onDeleteComment(taskId)
  }

  function handleCheckbleCompleted() {
    console.log(completed, taskId)
    onCheckbleCompleted(taskId,!completed)
  }

  
  return (
    <li>
      <div>
        <input type="checkbox" defaultChecked={completed} onClick={handleCheckbleCompleted}/>
        <p className={completed ? styles.strikeWithThrough : styles.strikeNoThrough}>{title} --- '{completed ? 'concluído' : 'nao concluído'}'</p>
      </div>
      <button onClick={handleDeleteTask}>lixeira</button>
    </li>
  )

}