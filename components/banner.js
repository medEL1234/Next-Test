import styles from "./banner.module.css";

function Banner(props) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.title1}>Cof</span>{" "}
        <span className={styles.title2}>Consumer</span>
      </h1>
      <p className={styles.subTitle}>Hello</p>
      <div className={styles.buttonWrapper}>
        <button className={styles.button} onClick={props.handlerOncClick}>
          {props.buttonText}
        </button>
      </div>
    </div>
  );
}

export default Banner;
