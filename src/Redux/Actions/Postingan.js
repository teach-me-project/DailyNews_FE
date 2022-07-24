import axios from "axios"

const GetPostRequest = () => {
    return {
        type: "GET_POST_REQUEST"
    }
}

const GetPostSuccess = (data) => {
    return {
        type: "GET_POST_SUCCESS",
        payload: data
    }
}

const GetPostError = (error) => {
    return {
        type: "GET_POST_ERROR",
        payload: error
    }
}

export const GetPost = (params) => {
    let limit = params?.limit ?? 7
    let page = params?.page ?? 1
    let order_by = params?.order_by ?? created_at
    let sort = params?.sort ?? ASC
    
    return (dispatch) => {
        dispatch(GetPostRequest())
        axios({
            method: "GET",
            url: `http://post/accepted?${limit? `page=${limit}` : ``}${limit? `limit=${limit}` : ``}${order_by? `order_by=${order_by}` : ``}${sort? `page=${sort}` : ``}`,
        })
        .then ((res) => {
            dispatch(GetPostSuccess(res.data.data))
            console.log(res.data.data, 'lililililiii')
        })
        .catch((err)=> {
            dispatch(GetPostError(err.response.data))
        })
                // dispatch(GetPostSuccess({
                //     email: 'test@gmail.com',
                //     password: 'test1'
                // }))
    }
}


