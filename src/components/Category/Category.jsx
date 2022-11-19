import { BookPreview } from "../BookPreview/BookPreview";
import styles from "./styles.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadBooksIfNotExist } from "../../store/books/loadBooksIfNotExist";
import { selectIsBooksLoading } from "../../store/books/selectors";
import {selectCategorysBookIds} from "../../store/categorys/selectors";
import { useParams } from "react-router-dom";
export function Category() {
    const { categoryId } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadBooksIfNotExist(categoryId));
    }, [categoryId]);
    const bookIds = useSelector((state) => selectCategorysBookIds(state, categoryId));
    const isLoading = useSelector((state) => selectIsBooksLoading(state));

    if(isLoading){
        return <h3>Loading...</h3>
    }

    if(!bookIds){
        return null;
    }

    return <div className={styles.wrapper}>
        {
            bookIds.map((id) => <BookPreview key={id} bookId={id}></BookPreview>)
        }
    </div>
}