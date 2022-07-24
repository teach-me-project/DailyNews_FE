import JoeDaniel from "./components/images/JoeDaniel.svg"
import ChangeBg from "./components/images/ChangeBg.png"
import Footer from "../../components/components/Footer"
import Avatar from "./components/images/Hans.jpg"
import Navbar from "../../components/components/Navbar"
import { GetUser } from "../../Redux/Actions/User"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

const Profile = () => {
    const { data, error, loading, isLogin} = useSelector((state) => state.auth)
    const Users = useSelector((state) => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetUser(data.user_id))
    }, [])
    
    return (
        <>
        <Navbar />
            <div className="flex flex-row">
                <div className="flex flex-col mb-10">
                    <p className="ml-20 mt-20 text-2xl font-bold">Profile</p>
                    <div className="ml-20 mt-10 w-72 h-72 bg-white rounded-2xl flex flex-col shadow-xl">
                        <div className="flex flex-row ml-3 mt-5 mr-1">
                            <div className="flex flex-row h-20 w-20 rounded-[28px] bg-white border-blue-400 items-center justify-center border-2">
                                <img src={JoeDaniel} />
                            </div>
                            <div className="flex flex-col ml-5">
                                <p className="text-lg text-[#2D4379]">@jonathan</p>
                                <p className="font-bold text-2xl">Joe Daniel</p>
                                <p className="text-lg text-[#376AED]">Member</p>
                            </div>
                        </div>
                        <div className="flex flex-col ml-4 mr-1">
                            <p className="text-base font-bold mt-4 mb-2">About</p>
                            <p>Madison Blackstone is a director of publisher, with experience managing global teams.</p>
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
                        <button type="button" className="ml-20 mt-4 input-info w-72 h-14 max-w-xs bg-[#376AED] text-white rounded-xl">
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
                                        <img src={Avatar} />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="">
                        <p className="text-center mt-20 text-lg text-[#7B8BB2]">
                            Remove profile picture
                        </p>
                    </div>
                    <div className="mt-14 ml-24 mb-20">
                        <div className="flex flex-row justify-between">
                            <div>
                                <p className="mb-4">Username : </p>
                                <input type="text" placeholder="Type here" class="input input-bordered input-info w-96 max-w-xs" />
                            </div>
                            <div className="mr-20">
                                <p className="mb-4">Name : </p>
                                <input type="text" placeholder="@jonathan" class="input input-bordered input-info w-96 max-w-xs" />
                            </div>
                        </div>

                        <div className="flex flex-row justify-between mt-10">
                            <div>
                                <p className="mb-4">Email : </p>
                                <input type="text" placeholder="jonathan@gmail.com" class="input input-bordered input-info w-96 max-w-xs" />
                            </div>
                            <div className="mr-20">
                                <p className="mb-4">Job : </p>
                                <input type="text" placeholder="Reporter" class="input input-bordered input-info w-96 max-w-xs" />
                            </div>
                        </div>

                        <div className="flex flex-row justify-between mt-10">
                            <div>
                                <p className="mb-4">About : </p>
                                <textarea className="textarea textarea-info w-80 h-28" placeholder="Madison Blackstone is a director of publisher, with experience managing global teams.">
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
                                <button type="button" className="input-info w-96 h-14 max-w-xs bg-[#0D253C] text-white rounded-xl">
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