import { Link } from "react-router-dom"
import NavbarLogin from "../../components/components/Navbar"
import arrow from "./components/images/arrow.svg"
import Bg from "./components/images/Hans.jpg"
import save from "./components/images/save.svg"
import finger from "./components/images/jempol.svg"
import Comment from "./components/Pages/Comments"
import { useState, useEffect } from "react"
import {useDispatch, useSelector}  from "react-redux"
import {GetArticleByID} from "../../Redux/Actions/Postingan"


const ViewArticle = () => {
    const dispatch = useDispatch()
    // const { data, error, loading, isLogin} = useSelector((state) => state.getArticleById)
    
    
    
    useEffect(() => {
        // dispatch(GetArticleByID())
        // console.log(data.list.post[0])

    },[])
    
    
    return (

        <>
            <NavbarLogin />
            <div>
                <div className="text-center mt-20">
                    <h1 className="font-bold text-2xl">View Article</h1>
                </div>
                <Link to={"/"} >
                    <div className="flex flex-row items-center mb-10 ml-20 mt-0">
                        <img className="w-3 mr-5" src={arrow} />
                        <p className="font-semibold items-center font-xl">Back</p>
                    </div>
                </Link>
            </div>

            <div>
                <div className="flex flex-row justify-center">
                    {/* image */}

                    <div className="avatar">
                        <div className="w-72 rounded-lg ring ring-offset-base-100 ring-offset-1 border-black">
                            {/* <img src={`http://localhost:3289/upload/${dataArticle.post_cover}`} /> */}
                        </div>
                    </div>
                    {/* <div>
                        <img className="w-72" src={Bg} />
                    </div> */}
                    {/* detail */}
                    <div className="ml-24 flex flex-col w-96">
                        <h1 className="font-extrabold text-3xl">
                           {/* {postData.post_title} */}
                        </h1>
                        <p className="font-bold text-black text-xl mt-10">
                           {} - Author
                        </p>
                        <p className="font-bold text-gray-400 mt-5">
                            Wed, March 3rd 2021
                        </p>
                        <div className="flex flex-row mt-24">
                            <div className="flex flex-row items-center mr-5">
                                <img className="ml-3 mr-2 w-7" src={finger} />
                                <p className="font-bold">5.1k</p>
                            </div>
                            <img className="w-5" src={save} />
                        </div>

                        <button type="button" className="mt-7 input-info h-14 max-w-xs bg-[#0D253C] text-white rounded-xl font-bold text-lg w-full">
                            Share Article Link
                        </button>
                    </div>
                </div>

                {/* text full */}
                <div className="mt-24 mb-24">
                    <p className="flex text-justify mx-72">
                      {/* {dataArticle.post_fill} */}
                    </p>
                </div>
            </div>
            {/* <Comment/> */}


        </>
    )



}

export default ViewArticle