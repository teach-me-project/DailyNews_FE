import axios from "axios"

const GetUserRequest = () => {
    return {
        type: "GET_USER_REQUEST"
    }
}

const GetUserSuccess = (data) => {
    return {
        type: "GET_USER_SUCCESS",
        payload: data
    }
}

const GetUserError = (error) => {
    return {
        type: "GET_USER_ERROR",
        payload: error
    }
}

export const GetUser = (id) => {
    return (dispatch) => {
        dispatch(GetUserRequest())
        axios({
            method: "GET",
            url: `http://localhost:3289/api/v1/users/${id}`,
        })
        .then ((res) => {
            dispatch(GetUserSuccess(res.data.data))
            console.log(res.data.data, 'lililililiii')
        })
        .catch((err)=> {
            dispatch(GetUserError(err.response.data))
        })
                // dispatch(GetUserSuccess({
                //     email: 'test@gmail.com',
                //     password: 'test1'
                // }))
    }
}


