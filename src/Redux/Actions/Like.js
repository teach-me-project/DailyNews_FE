import axios from "axios"

const LikeRequest = () => {
    return {
        type: "LIKE_REQUEST"
    }
}

const LikeSuccess = (data) => {
    return {
        type: "LIKE_SUCCESS",
        payload: data
    }
}

const LikeError = (error) => {
    return {
        type: "LIKE_ERROR",
        payload: error
    }
}

// export const AddLIKE = (formData) => {
//     return (dispatch) => {
//         dispatch(LikeRequest())
//         axios({
//             method: "POST",
//             url: "http://localhost:3289/api/v1/LIKE?post_id=6&profile_id=2",
//             data: {
//                 like_message: formData.like_message
//             },
//             headers: {
//                 Authorization : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyLCJyb2xlIjoidXNlciIsImlhdCI6MTY1ODYwMTc0NywiZXhwIjoxNjU4Njg4MTQ3fQ.6R7gQRuBXifRq24h5-gfiYqTA-oJr1Xz9GDJ49qkRWg'
//             }
//         })
//         .then ((res) => {
//                 dispatch(LikeSuccess(res.data.data))
//             })
//         .catch((err)=> {
//                 dispatch(LikeError(err.response.data.message))
//                 })
//     }
// }
