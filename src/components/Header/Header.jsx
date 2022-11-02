import styles from "./styles.module.css"
export function Header() {
    return <header className={styles.header}>
        <div className={styles.wrapper}>
            <h2 className={styles.logo}>Магазин</h2>
        </div>
    </header>
}