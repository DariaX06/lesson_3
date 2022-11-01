import { useState } from "react";
import styles from "./styles.module.css";
import classnames from "classnames";

export function BookPreview(props){
    let [count, setCount] = useState(0); // @FIXME
    return <div className={classnames(styles.wrapper, {
        [styles.alignBottom]: props.countPositionBottom
    })}>
        <div>
            <h3 className={styles.title}>{ props.book.title }</h3>
            <p className={styles.sub_title}>{ props.book.author }</p>
            <p className={styles.sub_title}>Жанр</p>
            <p className={styles.price}>{ props.book.price } ₽</p>
        </div>
        <div className={styles.countButtons}>
            <button className={classnames(styles.btn, styles.minus, {
                [styles.disabled]: count === 0
            })} onClick={() => setCount(count - 1)} disabled={count === 0}></button>
            <span className={classnames(styles.count, {
                [styles.disabled]: count === 0
            })}>{count}</span>
            <button className={classnames(styles.btn, styles.plus, {
                [styles.disabled]: count === 10
            })} onClick={() => setCount(count + 1)} disabled={count === 10}></button>
        </div>
    </div>;
}
