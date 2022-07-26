const initialState = {
    loading: false,
    data: {},
    error: null,
    isUpdate: false
}

const Fetch = (state=initialState, action={}) => {
    switch (action.type) {
        case "GET_ARTICLE_BYID_REQUEST":
            return {...state, loading: true}
        case "GET_ARTICLE_BYID_ERROR":
            return {...state, loading: false, data: state.data, error: action.payload, isUpdate:false}
        case "GET_ARTICLE_BYID_SUCCESS":
            return {...state, loading: false, data:action.payload, error: null, isUpdate:true}            
        default:
            return state
    }
}

export default Fetch