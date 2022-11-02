import { Header } from "../Header/Header"
import classnames from "classnames"
import styles from "./styles.module.css"
export function Layout(props) {
    return <div className={classnames(styles.layout)}>
        <Header></Header>
        <div className={styles.main}>{props.children}</div>
    </div>
}