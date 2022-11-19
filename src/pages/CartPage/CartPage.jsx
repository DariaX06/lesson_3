import { useSelector } from "react-redux";
import { selectBookCount, selectCartsBooksIds } from "../../store/cart/selectors";
import styles from "./styles.module.css";
import { BookPreview } from "../../components/BookPreview/BookPreview";
import { selectBookById } from "../../store/books/selectors";

export function CartPage(){
    const bookIds = useSelector((state) => selectCartsBooksIds(state));
    let total = 0;
    const PrintPrice = function(id){
        let book = useSelector((state) => selectBookById(state, id));
        let count = useSelector((state) => selectBookCount(state, id));
        total += book.price * count;
        return <li key={id}><span>{book.title}</span><span>{book.price * count}₽</span></li>;
    }
    return <div className={styles.content}>
        <div className={styles.price}>
            <div className={styles.wrapper}>
                <h3 className={styles.title}>Ваш заказ:</h3>
                <ul className={styles.bookList}>
                    {
                        bookIds.map((id) => PrintPrice(id))
                    }
                </ul>
            </div>
            <div className={styles.total}>
                <h3>Итого: {total}₽</h3>
                <button className={styles.btn}>Купить</button>
            </div>
        </div>
        <ul className={styles.bookPreviewList}>
            {
                bookIds.map((id) => <BookPreview key={id} bookId={id}></BookPreview>)
            }
        </ul>
    </div>
}