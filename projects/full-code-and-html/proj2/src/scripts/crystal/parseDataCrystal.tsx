import { CrystalList } from "./crystalList";
import data from "@/data/crystal/dataCrystal.json";
import styles from "@/styles/style.module.css";

export function CrystalContainer() {
    if (!Array.isArray(data) || data.length === 0) {
        return (
          <div className={styles.emptyText}>
              <h2 className={styles.h2Card}>Карточек не найдено</h2>
          </div>
        );
    }
    else {
        return (
            <div className="app-wrapper-crystal">
                <CrystalList items={data} />
            </div>
        );
    }
}