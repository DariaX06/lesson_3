import { categorySlice } from "./index";
import { prepareData } from "../utils";
import { selectCategorys } from "./selectors";
export const loadCategorysIfNotExist = (dispatch, getState) => {
    if(selectCategorys(getState())?.length > 0){
        return;
    }
    dispatch(categorySlice.actions.startLoading());
    fetch("http://localhost:3001/api/categorys")
    .then((response) => response.json())
    .then(categorys => {
        dispatch(categorySlice.actions.successLoading(prepareData(categorys)));
    })
    .catch(() => {
        dispatch(categorySlice.actions.failLoading());
    });
}