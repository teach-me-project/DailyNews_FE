import arrow from '../../components/images/arrow.svg'
import image from '../../components/images/Image.svg'
import play from '../../components/images/Play.svg'
import link from '../../components/images/Link.svg'
import align from '../../components/images/Align.svg'
import scale from '../../components/images/Scale.svg'
import { Link } from "react-router-dom"
import Footer from './../../components/components/Footer';
import Navbar from './../../components/components/Navbar';
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { PostArticle } from '../../Redux/Actions/Postingan'

const WriteArticle = () => {
    const dispatch = useDispatch()
    const { data, error, loading, isLogin } = useSelector((state) => state.auth)
    const [formArticle, setFormArticle] = useState({
        'account_id': data.user_id,
        'post_cover': '',
        'post_title': '',
        'post_category': '',
        'post_fill': '',
    })

    const formData = new FormData()
    formData.append('account_id', data.user_id,)
    formData.append('post_cover', formArticle.post_cover)
    formData.append('post_title', formArticle.post_title)
    formData.append('post_category', formArticle.post_category)
    formData.append('post_fill', formArticle.post_fill)


    // console.log(data.token)


    const HandlePostArticle = (e) => {
        e.preventDefault()
        dispatch(PostArticle(data.token, formData, data.user_id))
        console.log(formArticle, 'ini write')
        console.log(data.user_id)
        console.log(data.token)
    }

    return (
        <>
            <Navbar />
            <div>
                <div className="text-center mt-20">
                    <h1 className="font-bold text-2xl">Write Article</h1>
                </div>
                <Link to={'/'} >
                    <div className="flex flex-row items-center mb-10 ml-20 mt-0">
                        <img className="w-3 mr-5" src={arrow} alt='' />
                        <p className="font-semibold items-center font-xl">Back</p>
                    </div>
                </Link>
            </div>
            <div className="mx-36 mb-16">
                <div className="flex flex-row">
                    <div className="flex flex-col justify-center ml-32">
                        <div className="w-48 h-72 bg-gray-200 outline-dashed border-[#388087] ">
                            <h1 className="text-center text-7xl my-20">+</h1>
                        </div>
                        
                        <div className="flex flex-col">
                            {/* <button type='file' className="mt-4 inline-block w-48 font-['Mulish'] h-12 py-2.5 text-white font-bold text-base hover:text-white leading-tight  rounded-lg shadow-md hover:bg-[#7cbdc5] hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 bg-[#388087] active:shadow-lg transition duration-150 ease-in-out "> */}
                               <span className="btn btn-file mt-4 bg-[#388087]">
                                {/* Choose Cover Photo */}
                                Choose Cover Photo<input type="file" className="" onChange={(e) => setFormArticle((prevData) => ({
                                    ...prevData,
                                    post_cover: e.target.files[0]
                                }))} />
                                {/* border-2 border-black items-center text-center text-base text-[#7B8BB2] mt-5 */}
                            {/* </button> */}
                            </span>
                        </div>


                    </div>
                    <div className="flex flex-col ml-10">
                        <div className="flex flex-row">
                            <input type="text"
                                className="rounded-lg form-control border-[#388087] h-12 block w-96 px-4 py-2 text-lg text-left font-normal text-gray-700 bg-white  border border-solid focus:border-blue-600 focus:outline-none" placeholder="Article Tittle" onChange={(e) => setFormArticle((prevData) => ({
                                    ...prevData,
                                    post_title: e.target.value
                                }))} />
                            <select className="ml-5 w-96 border-black h-12 border border-solid rounded-lg " placeholder="Article Tittle" onChange={(e) => setFormArticle((prevData) => ({
                                ...prevData,
                                post_category: e.target.value
                            }))}>
                                <option value="Economy" >Economy</option>
                                <option value="Politic"  >Politic</option>
                                <option value="Country" >Country</option>
                                <option value="Health"  >Health</option>
                                <option value="Beuty"  >Beuty</option>
                            </select>
                            {/* <input type="text"
                            className="ml-3 rounded-lg form-control border-[#388087] h-12 block w-full px-4 py-2 text-lg text-left font-normal text-gray-700 bg-white  border border-solid focus:border-blue-600 focus:outline-none" placeholder="Article Tittle" /> */}
                        </div>
                        <div className="flex flex-row">
                            <p className="mt-5 mb-5 font-bold text-[#388087]">Attacment  : </p>
                            <img src={image} className="w-7 ml-6" alt='' />
                            <img src={play} className="w-7 ml-6" alt='' />
                            <img src={align} className="w-7 ml-6" alt='' />
                            <img src={link} className="w-7 ml-6" alt='' />
                            <img src={scale} className="w-7 ml-6" alt='' />
                        </div>
                        <textarea onChange={(e) => setFormArticle((prevData) => ({
                            ...prevData,
                            post_fill: e.target.value
                        }))} className="border border-solid rounded-lg h-44 border-gray-600">
                        </textarea>
                        <button className="w-full mt-4 inline-block font-['Mulish'] h-12 py-2.5 text-white font-bold text-base hover:text-white leading-tight  rounded-lg shadow-md hover:bg-[#7cbdc5] hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 bg-[#388087] active:shadow-lg transition duration-150 ease-in-out " onClick={HandlePostArticle}>
                            Request Publish Article
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default WriteArticle