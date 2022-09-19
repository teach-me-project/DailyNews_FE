import JoeDaniel from "./components/images/JoeDaniel.svg"
import ChangeBg from "./components/images/ChangeBg.png"
import Footer from "../../components/components/Footer"
import Avatar from "./components/images/Hans.jpg"
import Navbar from "../../components/components/Navbar"
import { GetUser, UpdateUser } from "../../Redux/Actions/User"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { AuthLogout } from "../../Redux/Actions/Auth"
import { useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'


const Profile = () => {
    const { data, error, loading, isLogin } = useSelector((state) => state.auth)
    const Users = useSelector((state) => state.user)
    const Update = useSelector((state) => state.updateUser)
    // console.log(Update.data.message, 'cek data success update di profile')
    // console.log(Update.error.response.status, 'cek data update di profile')
    const [refatch, setRefatch] = useState(false)
    console.log(Users.data, 'data users ini')

    const navigate = useNavigate()

    const [formUpdate, setFormUpdate] = useState({
        profile_username: '' || Users.data[0].profile_username,
        profile_name: '' || Users.data[0]?.profile_name,
        profile_job: '' || Users.data[0].profile_job,
        profile_about: '' || Users.data[0].profile_about,
        profile_email: Users.data[0].account_email,
        profile_password: Users.data[0].account_password,
        profile_picture: null,
    })

    console.log(formUpdate, 'cek data update')

    const formData = new FormData()
    formData.append('profile_username', formUpdate.profile_username);
    formData.append('profile_name', formUpdate.profile_name);
    formData.append('profile_picture', formUpdate.profile_picture);
    formData.append('profile_job', formUpdate.profile_job);
    formData.append('profile_about', formUpdate.profile_about);
    formData.append('profile_email', formUpdate.profile_email);
    formData.append('profile_password', formUpdate.profile_password);


    const dispatch = useDispatch()
    const HandleUpdateUser = (e) => {
        e.preventDefault()
        dispatch(UpdateUser(formData, data.user_id))
        
        if (Update.data.status === 200) {
            Swal.fire({
                icon: 'success',
                title: '',
                text: Update.data.message,
            })
        } else if (Update.error?.response?.status === 400) {
            Swal.fire({
                icon: 'error',
                title: '',
                text: Update.error.response.data.message,
            })
        }
        setRefatch(!refatch)
    }


    console.log(Users, 'ini users di get')

    useEffect(() => {
        dispatch(GetUser(data.user_id))
    }, [refatch])

    return (
        <>
            <Navbar />
            <div className="flex flex-row">
                <div className="flex flex-col mb-10">
                    <p className="ml-20 mt-20 text-2xl font-bold">Profile</p>
                    <div className="ml-20 mt-10 w-72 h-72 bg-white rounded-2xl flex flex-col shadow-xl">
                        <div className="flex flex-row ml-3 mt-5 mr-1">
                            <div className="avatar">
                                <div className="w-16 rounded-lg ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={`process.env.URL_FE/upload/${Users.data[0].profile_picture}`} />
                                </div>
                            </div>

                            {/* <div className="flex flex-row h-20 w-20 rounded-[28px] bg-white border-blue-400 items-center justify-center border-2">
                                <img src={`process.env.URL_FE/upload/${Users.data.profile_picture}`} />
                            </div> */}
                            <div className="flex flex-col ml-5">
                                <p className="text-lg text-[#2D4379]">{Users.data[0].profile_username}</p>
                                <p className="font-bold text-2xl">{Users.data[0].profile_name}</p>
                                <p className="text-lg text-[#376AED]">Member</p>
                            </div>
                        </div>
                        <div className="flex flex-col ml-4 mr-1">
                            <p className="text-base font-bold mt-4 mb-2">About</p>
                            <p>{Users.data[0].profile_about}</p>
                            <div class="btn-group w-96 mt-8">
                                <button class="btn bg-[#2151CD] w-20 border-none rounded-lg">
                                    <div className="flex flex-col">
                                        <p className="text-lg font-light">52</p>
                                        <p className="text-[9px] font-thin">Post</p>
                                    </div>
                                </button>
                                <button class="btn bg-[#386BED] w-20 border-none">
                                    <div className="flex flex-col">
                                        <p className="text-lg font-light">250</p>
                                        <p className="text-[9px] font-thin">visitor</p>
                                    </div>
                                </button>
                                <button class="btn bg-[#386BED] w-20 border-none">
                                    <div className="flex flex-col">
                                        <p className="text-lg font-light">4.5K</p>
                                        <p className="text-[9px] font-thin">Comment</p>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between">
                        <button className="ml-20 mt-20 btn bg-white text-black hover:bg-[#5282FF]/90 w-72 hover:text-white">
                            Edit Profile
                        </button>
                        {/* <p className="font-bold">v</p> */}
                    </div>
                    <div className="flex flex-row">
                        <button className="ml-20 mt-2 btn bg-white text-black hover:bg-[#5282FF]/90 w-72 hover:text-white">
                            Saved Post
                        </button>
                        {/* <p className="font-bold">v</p> */}
                    </div>
                    <div className="flex flex-row justify-between">
                        <button className="ml-20 mt-2 btn bg-white text-black hover:bg-[#5282FF]/90 w-72 hover:text-white">
                            FAQ
                        </button>
                        {/* <p className="font-bold">v</p> */}
                    </div>
                    <div className="flex flex-col">
                        <button className="ml-20 mt-2 btn bg-white text-black hover:bg-[#5282FF]/90 w-72 hover:text-white">
                            Help
                        </button>
                        {/* <p className="font-bold">v</p> */}
                        <button type="button" className="ml-20 mt-4 input-info w-72 h-14 max-w-xs bg-[#376AED] text-white rounded-xl" onClick={() => {
                            dispatch(AuthLogout());
                            Swal.fire({
                                icon: 'success',
                                title: '',
                                text: 'Logout Success',
                            })
                            navigate('/')
                        }}>
                            Logout
                        </button>
                    </div>
                </div>
                <div className="flex flex-col mt-0 w-full ml-24 h-full border border-blue-400">
                    {/* <img src={ChangeBg} /> */}

                    <div className="flex flex-col items-center">
                        <img className="relative w-full hero-overlay bg-opacity-60 bg-black" src={ChangeBg} />
                        <div className="absolute text-2xl text-['Georgia'] mt-2 text-black">
                            <div className="bg-gray-200">
                                Change Background
                            </div>
                            <div className="flex flex-row justify-center mt-28">
                                <div className="avatar">
                                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={`process.env.URL_FE/upload/${Users.data[0].profile_picture}`} />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="flex flex-col justify-center items-center mt-20 text-center">
                        <span className="btn hover:bg-white border-0 font-extrabold text-gray-700 btn-file w-72 bg-white "> Remove profile picture
                            <input type="file" className="" onChange={(e) => {
                                setFormUpdate((prevData) => ({
                                    ...prevData,
                                    profile_picture: e.target.files[0]
                                }))
                            }} />
                        </span>
                    </div>


                    {/* 
                    <div className="flex flex-col justify-center mt-20 text-center">
                        <label> Remove profile picture </label>
                        <input type="file" className="flex items-center text-center text-lg text-[#7B8BB2] ml-96 mt-5"  onChange={(e)=>setFormUpdate((prevData)=>({
                                    ...prevData,
                                    profile_picture: e.target.files[0]
                                }))} />      
                    </div> */}

                    <div className="mt-14 ml-24 mb-20">
                        <div className="flex flex-row justify-between">
                            <div>
                                <p className="mb-4">Username : </p>
                                <input type="text" defaultValue={Users.data[0].profile_username} className="input input-bordered input-info w-96 max-w-xs" onChange={(e) => setFormUpdate((prevData) => ({
                                    ...prevData,
                                    profile_username: e.target.value
                                }))} />
                            </div>
                            <div className="mr-20">
                                <p className="mb-4">Name : </p>
                                <input type="text" defaultValue={Users.data[0].profile_name} className="input input-bordered input-info w-96 max-w-xs" onChange={(e) => setFormUpdate((prevData) => ({
                                    ...prevData,
                                    profile_name: e.target.value
                                }))} />
                            </div>
                        </div>

                        <div className="flex flex-row justify-between mt-10">
                            <div>
                                <p className="mb-4">Email : </p>
                                <input type="text" readOnly
                                    defaultValue={Users.data[0].account_email} className="input input-bordered input-info w-96 max-w-xs" onChange={(e) => setFormUpdate((prevData) => ({
                                        ...prevData,
                                        account_email: e.target.value
                                    }))} />
                            </div>
                            <div className="mr-20">
                                <p className="mb-4">Job : </p>
                                <input type="text" defaultValue={Users.data[0].profile_job} className="input input-bordered input-info w-96 max-w-xs" onChange={(e) => setFormUpdate((prevData) => ({
                                    ...prevData,
                                    profile_job: e.target.value
                                }))} />

                            </div>
                        </div>

                        <div className="flex flex-row justify-between mt-10">
                            <div>
                                <p className="mb-4">About : </p>
                                <textarea defaultValue={Users.data[0].profile_about} className="textarea textarea-info w-80 h-28" onChange={(e) => setFormUpdate((prevData) => (
                                    {
                                        ...prevData,
                                        profile_about: e.target.value
                                    }))}>
                                </textarea>
                            </div>
                            {/* <div className="mr-20 mt-10">
                                <button type="button" className="input-info w-96 h-14 max-w-xs bg-[#376AED] text-white rounded-xl">
                                    Request to be an author
                                </button>
                            </div> */}
                        </div>

                        <div className="flex flex-row justify-between mt-5">
                            {/* <div>
                                <p className="mb-4">About : </p>
                                <textarea className="textarea textarea-info w-80 h-28" placeholder="Madison Blackstone is a director of publisher, with experience managing global teams.">
                                </textarea>
                            </div> */}
                            <div className="mr-20 mt-1">
                                <button type="button" className="input-info w-96 h-14 max-w-xs bg-[#0D253C] text-white rounded-xl" onClick={HandleUpdateUser}>
                                    Save Change
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <Footer />
        </>
    )
}

export default Profile