import styles from './tasks.module.css'

export function Task({ taskId, title, completed, onCheckbleCompleted, onDeleteComment }) {
  function handleDeleteTask() {
    console.log(taskId, title)
    onDeleteComment(taskId)
  }

  function handleCheckbleCompleted() {
    console.log(completed, taskId, title)
    onCheckbleCompleted(taskId, !completed)
  }


  return (
    <li>
      <div>
        <div className={styles['checkbox-container']}>
          <input id={taskId} type="checkbox" onClick={handleCheckbleCompleted} defaultChecked={completed} />
          <label htmlFor={taskId} ></label>
        </div>

        <p className={completed ? styles.strikeWithThrough : styles.strikeNoThrough}>{title}</p>

      </div>
      <button onClick={handleDeleteTask}><i className="bi bi-trash"></i></button>
    </li>
  )

}