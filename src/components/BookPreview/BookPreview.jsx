import styles from "./styles.module.css";
import classnames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import {selectBookById} from "../../store/books/selectors"
import { cartSlice } from "../../store/cart";
import { selectBookCount } from "../../store/cart/selectors";
import { Link } from "react-router-dom";

export function BookPreview(props) {
    const dispatch = useDispatch();
    const book = useSelector(state => selectBookById(state, props.bookId));
    const count = useSelector(state => selectBookCount(state, props.bookId));
    let buttonMods = {
        [styles.disabled]: !count
    }
    let buttonPlusMods = {
        [styles.disabled]: count > 9
    }
    if(!book){
        return null;
    }
    return <div className={classnames(styles.wrapper, props.className, {
        [styles.alignBottom]: props.countPositionBottom
    })}>
        <div>
            <Link to={"/book/" + props.bookId}>
                <h3 className={styles.title}>{book.title}</h3>
            </Link>
            <p className={styles.sub_title}>{book.author}</p>
            <p className={styles.sub_title}>Жанр</p>
            <p className={styles.price}>{book.price} ₽</p>
        </div>
        <div className={styles.countButtons}>
            <button className={classnames(styles.btn, styles.minus, buttonMods)} onClick={() => dispatch(cartSlice.actions.removeBook(props.bookId))} disabled={!count}></button>
            <span className={classnames(styles.count, buttonMods)}>{count || 0}</span>
            <button className={classnames(styles.btn, styles.plus, buttonPlusMods)} onClick={() => dispatch(cartSlice.actions.addBook(props.bookId))} disabled={count > 9}></button>
        </div>
    </div>;
}