import Image from "next/image";
import Link from "next/link";
import styles from "./cards.module.css";
import cls from "classnames";

function CardsOne(props) {
  return (
    <Link legacyBehavior href={props.href}>
      <a className={styles.cardLink}>
        <div className={cls("glass", styles.container)}>
          <div className={styles.cardHeaderWrapper}>
            <h2 className={styles.cardHeader}>{props.name}</h2>
          </div>
          <div className={styles.cardImageWrapper}>
            <Image
              className={styles.cardImage}
              src={props.ImageUrl}
              height={260}
              width={160}
            ></Image>
          </div>
        </div>
      </a>
    </Link>
  );
}
export default CardsOne;
