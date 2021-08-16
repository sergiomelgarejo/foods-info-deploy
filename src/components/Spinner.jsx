import styles from '../static/css/Spinner.module.css'

export function Spinner() {
  return (
    <div className={styles.container}>
      <div className={styles.spinner}></div>
    </div>
  )
}