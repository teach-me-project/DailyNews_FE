import axios from "axios"

const CommentRequest = () => {
    return {
        type: "COMMENT_REQUEST"
    }
}

const CommentSuccess = (data) => {
    return {
        type: "COMMENT_SUCCESS",
        payload: data
    }
}

const CommentError = (error) => {
    return {
        type: "COMMENT_ERROR",
        payload: error
    }
}

export const AddComment = (formData) => {
    return (dispatch) => {
        dispatch(CommentRequest())
        axios({
            method: "POST",
            url: `${process.env.REACT_APP_URL_BE}/api/v1/comment?post_id=6&profile_id=2`,
            data: {
                comment_message: formData.comment_message
            },
            headers: {
                Authorization : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyLCJyb2xlIjoidXNlciIsImlhdCI6MTY1ODYwMTc0NywiZXhwIjoxNjU4Njg4MTQ3fQ.6R7gQRuBXifRq24h5-gfiYqTA-oJr1Xz9GDJ49qkRWg'
            }
        })
        .then ((res) => {
                dispatch(CommentSuccess(res.data.data))
            })
        .catch((err)=> {
                dispatch(CommentError(err.response.data.message))
                })
                // dispatch(LoginSuccess({
                //     email: 'test@gmail.com',
                //     password: 'test1'
                // }))
    }
}
