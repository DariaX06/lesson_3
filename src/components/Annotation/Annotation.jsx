import styles from "./styles.module.css";
export function Annotation(props){
    return <div className={styles.annotation}>
        <p>{props.text.slice(0, 425) + '...'}</p>
    </div>
}