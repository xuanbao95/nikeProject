
import API from "../../axios/api"
import * as Actiontype from "../Contants/contants"
export const createAction = ({ type, payLoad }) => {
    return {
        type,
        payLoad,
    }


};

export const actGetProductAPI = (gender, typeProduct) => {
    return async (dispatch) => {
        try {
            dispatch(
                createAction({
                    type: Actiontype.IS_LOADING_LIST_PRODUCT,
                    payLoad: true,
                })
            );
            const res = await API(
                `product/?gender=${gender}&typeProduct=${typeProduct}`,
                "GET"
            );
            dispatch(
                createAction({
                    type: Actiontype.FETCH_API_LISTPRODUCT,
                    payLoad: res.data,
                })
            );
            dispatch(
                createAction({
                    type: Actiontype.IS_LOADING_LIST_PRODUCT,
                    payLoad: false,
                })
            );
            localStorage.setItem(
                "GenderAndTypeProduct",
                JSON.stringify({ gender: gender, typeProduct: typeProduct })
            );

        } catch (er) {
            console.log({ ...er });
        }
    }
}
