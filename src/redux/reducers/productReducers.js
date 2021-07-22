import * as ActionType from "../Contants/contants"
const GenderAndTypeProduct = JSON.parse(
    localStorage.getItem("GenderAndTypeProduct")
);
let initialState = {
    typePropduct: GenderAndTypeProduct?.typePropduct,
    gender: GenderAndTypeProduct?.gender,
    data: [],
    dataSort: [],
    dataFilter: [],
    isloading: false,
}

const productReducers = (state = initialState, { type, payLoad }) => {
    switch (type) {
        case ActionType.FETCH_API_LISTPRODUCT:
            state.data = payLoad;
            state.dataSort = payLoad;
            state.dataFilter = payLoad;
            break;
        case ActionType.IS_LOADING_LIST_PRODUCT:
            state.isloading = payLoad;
            break;
        default:
            break;

    }
    return { ...state }
}

export default productReducers