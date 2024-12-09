import styles from "./NotFoundInfo.module.scss";

export default function NotFoundInfo() {
  return (
    <div className={styles.root}>
      <h1>Ничего не найдено :(</h1>
      <p className={styles.description}> К сожалению данные отсутствуют</p>
    </div>
  );
}
