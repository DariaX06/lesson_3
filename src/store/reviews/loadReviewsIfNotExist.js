import { reviewSlice } from "./index";
import { prepareData } from "../utils";
export const loadReviewsIfNotExist = (bookId) => (dispatch, getState) => {
    dispatch(reviewSlice.actions.startLoading());
    fetch(`http://localhost:3001/api/reviews?id=${bookId}`)
    .then((response) => response.json())
    .then(categorys => {
        dispatch(reviewSlice.actions.successLoading(prepareData(categorys)));
    })
    .catch(() => {
        dispatch(reviewSlice.actions.failLoading());
    });
}