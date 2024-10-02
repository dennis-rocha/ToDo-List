import styles from './tasks.module.css'

export function Task({ taskId, title, completed, onCheckbleCompleted, onDeleteComment }) {
  function handleDeleteTask() {
    onDeleteComment(taskId)
  }

  function handleCheckbleCompleted() {
    console.log(completed, taskId)
    onCheckbleCompleted(taskId, !completed)
  }


  return (
    <li>
      <div>
        <div className={styles['checkbox-container']}>
          <input id='checkbox1' type="checkbox" onClick={handleCheckbleCompleted} defaultChecked={completed} />
          <label htmlFor="checkbox1" ></label>
        </div>

        <p className={completed ? styles.strikeWithThrough : styles.strikeNoThrough}>{title}</p>

      </div>
      <button onClick={handleDeleteTask}><i class="bi bi-trash"></i></button>
    </li>
  )

}