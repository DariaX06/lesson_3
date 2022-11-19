import { useSelector } from "react-redux";
import { selectReviewById } from "../../store/reviews/selectors";
import styles from "./styles.module.css";
export function Review(props) {
    const review = useSelector(state => selectReviewById(state, props.reviewId));

    console.log(review);
    if(!review){
        return null;
    }
    return <div className={styles.review}>
        <h3 className={styles.name}>{review.name}</h3>
        <p>{review.text}</p>
    </div>
}