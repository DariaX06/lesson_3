import { BookPreview } from "../../components/BookPreview/BookPreview";
import { Annotation } from "../../components/Annotation/Annotation";
import { Review } from "../../components/Review/Review";
import styles from "./styles.module.css";
export function BookPage(props) {
    return <div className={styles.content}>
        <BookPreview className={styles.contentItem} book={props.book} countPositionBottom={true}></BookPreview>
        <Annotation className={styles.contentItem} text={props.book.annotation}></Annotation>
        <ul className={styles.list}>
            {
                props.book.reviews.map((review) => <Review key={review.id} review={review}></Review>)
            }
        </ul>
    </div>
}