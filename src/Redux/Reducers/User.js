const initialState = {
    loading: false,
    data: {
        account_email: "",
        account_password: "",
        profile_about: "",
        profile_job: "",
        profile_name: "",
        profile_picture: "",
        profile_username: "" 
    },
    error: null,
    isLogin: false
}

const Fetch = (state=initialState, action={}) => {
    switch (action.type) {
        case "GET_USER_REQUEST":
            return {...state, loading: true}
        case "GET_USER_ERROR":
            return {...state, loading: false, data: state.data, error: action.payload, isLogin:false}
        case "GET_USER_SUCCESS":
            console.log(action.payload[0], 'asasasasaa')
            return {...state, loading: false, data:action.payload[0], error: null, isLogin:true}            
        default:
            return state
    }
}

export default Fetch