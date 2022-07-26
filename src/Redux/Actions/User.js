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


const UpdateUserRequest = () => {
    return {
        type: "UPDATE_USER_REQUEST"
    }
}

const UpdateUserSuccess = (data) => {
    return {
        type: "UPDATE_USER_SUCCESS",
        payload: data
    }
}

const UpdateUserError = (error) => {
    return {
        type: "UPDATE_USER_ERROR",
        payload: error
    }
}

export const UpdateUser = (formData,id) => {
    return (dispatch) => {
        dispatch(UpdateUserRequest())
        console.log(formData, 'form data dari action')
        
        axios({
            method: "PATCH",
            url: `http://localhost:3289/api/v1/users/${id}`,
            data: formData
        })
        .then ((res) => {
            dispatch(UpdateUserSuccess(res.data))
            console.log(res.data)
        })
        .catch((err)=> {
            dispatch(UpdateUserError(err.response.data))
        })
    }
}

