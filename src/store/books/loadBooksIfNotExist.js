import { bookSlice } from "./index";
import { prepareData } from "../utils";
//import { selectBook } from "./selectors";
export const loadBooksIfNotExist = (categoryId) => (dispatch, getState) => {
    //if(selectBook(getState())?.length > 0){
    //     return;
    //}
    dispatch(bookSlice.actions.startLoading());
    fetch(`http://localhost:3001/api/books?categoryId=${categoryId}`)
    .then((response) => response.json())
    .then(categorys => {
        dispatch(bookSlice.actions.successLoading(prepareData(categorys)));
    })
    .catch(() => {
        dispatch(bookSlice.actions.failLoading());
    });
}