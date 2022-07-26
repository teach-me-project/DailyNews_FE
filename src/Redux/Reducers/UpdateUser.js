const initialState = {
    loading: false,
    data: {

    },
    error: null,
    isUpdate: false
}

const Fetch = (state=initialState, action={}) => {
    switch (action.type) {
        case "UPDATE_USER_REQUEST":
            return {...state, loading: true}
        case "UPDATE_USER_ERROR":
            return {...state, loading: false, data: state.data, error: action.payload, isUpdate:false}
        case "UPDATE_USER_SUCCESS":
            return {...state, loading: false, data:action.payload, error: null, isUpdate:true}            
        default:
            return state
    }
}

export default Fetch