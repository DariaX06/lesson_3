import styles from "./styles.module.css";
export function Review(props){
    return <div className={styles.review}>
        <h3 className={styles.name}>{props.review.name}</h3>
        <p>{props.review.text}</p>
    </div>
}