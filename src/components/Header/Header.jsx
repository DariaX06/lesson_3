import { Link } from "react-router-dom"
import styles from "./styles.module.css"
export function Header() {
    return <header className={styles.header}>
        <div className={styles.wrapper}>
            <Link to="/" className={styles.logoLink}>
                <h2 className={styles.logo}>Магазин</h2>
            </Link>
            <Link to="/cart" className={styles.cartLink}></Link>
        </div>
    </header>
}