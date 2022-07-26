const initialState = {
    loading: false,
    data: {},
    error: null,
    isLogin: false
}

const Fetch = (state=initialState, action={}) => {
    switch (action.type) {
        case "COMMENT_REQUEST":
            return {...state, loading: true}
        case "COMMENT_ERROR":
            return {...state, loading: false, data: state.data, error: action.payload, isLogin:false}
        case "COMMENT_SUCCESS":
            return {...state, loading: false, data:action.payload, error: null, isLogin:true}             
        default:
            return state
    }
}

export default Fetch