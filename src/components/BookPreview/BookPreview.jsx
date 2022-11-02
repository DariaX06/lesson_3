import { useState } from "react";
import styles from "./styles.module.css";
import classnames from "classnames";


export function BookPreview(props) {
    const [count, setCount] = useState(0);
    let buttonMods = {
        [styles.disabled]: !count
    }
    let buttonPlusMods = {
        [styles.disabled]: count > 9
    }

    function increment() {
        setCount(count + 1)
    }
    function decrement() {
        setCount(count - 1)
    }

    return <div className={classnames(styles.wrapper, props.className, {
        [styles.alignBottom]: props.countPositionBottom
    })}>
        <div>
            <h3 className={styles.title}>{props.book.title}</h3>
            <p className={styles.sub_title}>{props.book.author}</p>
            <p className={styles.sub_title}>Жанр</p>
            <p className={styles.price}>{props.book.price} ₽</p>
        </div>
        <div className={styles.countButtons}>
            <button className={classnames(styles.btn, styles.minus, buttonMods)} onClick={decrement} disabled={!count}></button>
            <span className={classnames(styles.count, buttonMods)}>{count}</span>
            <button className={classnames(styles.btn, styles.plus, buttonPlusMods)} onClick={increment} disabled={count > 9}></button>
        </div>
    </div>;
}
