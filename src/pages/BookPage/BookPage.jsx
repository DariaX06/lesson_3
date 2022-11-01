import { BookPreview } from "../../components/BookPreview/BookPreview";
import { Annotation } from "../../components/Annotation/Annotation";
import { Review } from "../../components/Review/Review";
import styles from "./styles.module.css";
export function BookPage(props){
    return <div className={styles.content}>
        <div className={styles.contentItem}>
            <BookPreview book={props.book} countPositionBottom={true}></BookPreview>
        </div>
        <div className={ styles.contentItem}>
            <Annotation className={styles.contentItem} text={props.book.annotation}></Annotation>
        </div>
        <ul className={styles.list}>
            {
                props.book.reviews.map((review) => <Review review={review}></Review>)
            }
        </ul>
    </div>
}