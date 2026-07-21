import { Crystal } from "@/scripts/types";
import styles from "@/styles/style.module.css";

type CardProps = {
    item: Crystal;
}

export function ParseCrystal({ item }: CardProps) {
    return (
        <div className={styles.card}>
            <h2 className={styles.h2Card}>{item.name}</h2>
            <p className={styles.textCard}>Идентификационный номер: {item.id}</p>
            <p className={styles.textCard}>Количество хранимого вис: {item.countVis}</p>
        </div>
    );
}