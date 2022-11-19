import { BookPreview } from "../../components/BookPreview/BookPreview";
import { Annotation } from "../../components/Annotation/Annotation";
import { Review } from "../../components/Review/Review";
import styles from "./styles.module.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectBookById } from "../../store/books/selectors";
import { useEffect } from "react";
import { loadReviewsIfNotExist } from "../../store/reviews/loadReviewsIfNotExist";
export function BookPage(props) {
    const { bookId } = useParams();
    const book = useSelector(state => selectBookById(state, bookId));
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadReviewsIfNotExist(bookId));
    }, []);
    if(!book){
        return null;
    }
    console.log(book);
    return <div className={styles.content}>
        <BookPreview className={styles.contentItem} bookId={bookId} countPositionBottom={true}></BookPreview>
        <Annotation className={styles.contentItem} text={book.annotation}></Annotation>
        <ul className={styles.list}>
            {
                book.reviews.map((reviewId) => <Review key={reviewId} reviewId={reviewId}></Review>)
            }
        </ul>
    </div>
}