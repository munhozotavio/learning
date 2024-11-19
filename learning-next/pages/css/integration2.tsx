import styles from "./integration2.module.css"

export default function cssIntegration2() {
  return (
    <div id={styles.content}>
      <div className={styles.red}>Text #01</div>
      <div className={styles.green}>Text #02</div>
      <div className={styles.blue}>Text #03</div>
    </div>
  )
}
