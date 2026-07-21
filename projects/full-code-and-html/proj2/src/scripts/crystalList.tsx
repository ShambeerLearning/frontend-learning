import { Crystal } from "./types";
import { ParseCrystal } from "./renderCard";
import styles from "../styles/style.module.css";

type ListProps = {
    items: Crystal[];
}

export function CrystalList({ items }: ListProps) {
    return (
        <div className={styles.crystalGrid}>
            {items.map((crystal: Crystal) => (
                <ParseCrystal key={crystal.id} item={crystal} />
            ))}
        </div>
    );
}