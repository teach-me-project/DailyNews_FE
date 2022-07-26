const initialState = {
    loading: false,
    data: {},
    error: null,
}

const Fetch = (state=initialState, action={}) => {
    switch (action.type) {
        case "GET_POST_REQUEST":
            return {...state, loading: true}
        case "GET_POST_ERROR":
            return {...state, loading: false, data: state.data, error: action.payload}
        case "GET_POST_SUCCESS":
            console.log(action.payload, 'cek post reducer')
            return {...state, loading: false, data:action.payload, error: null}          
        default:
            return state
    }
}

export default Fetch