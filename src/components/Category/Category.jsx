import { BookPreview } from "../BookPreview/BookPreview";
import styles from "./styles.module.css";
export function Category(props) {
    return <div className={styles.wrapper}>
        {
            props.category.books.map((book) => <BookPreview key={book.id} book={book}></BookPreview>)
        }
    </div>
}
