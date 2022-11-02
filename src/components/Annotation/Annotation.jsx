import styles from "./styles.module.css";
import classnames from "classnames";
export function Annotation(props) {
    return <div className={classnames(styles.annotation, props.className)}>
        <p>{props.text.slice(0, 425) + '...'}</p>
    </div>
}