import bg from '../../components/images/nenek.png'
import google from '../../components/images/Google.svg'
import facebook from '../../components/images/Facebook.svg'
import twitter from '../../components/images/Twitter.svg'
import { Link } from "react-router-dom";

const Signin = () => {
    return (
        <>
            <div className="flex flex-row">

                <div>
                    <img className="relative w-[721px] h-[1110px]" src={bg} alt="gambar" />
                </div>

                <div className="flex-1 ml-[107px] mt-12">
                    <h1 className="text-5xl font-['Inter'] mb-8">Login</h1>
                    <form className="">
                        <div className="">
                            <p className=" font-['Mulish'] text-base font-semibold text-[#4E4B66] leading-5 mb-3">
                                Email Address :
                            </p>
                            <input type="text"
                                className="form-control block w-[400px] px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-[10px] transition ease-in-out mb-6 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                id="exampleFormControlInput2" placeholder="Enter your email address" />
                        </div>
                        <div>
                            <p className="d-block font-['Mulish'] text-base font-semibold text-[#4E4B66] leading-5 mb-3">
                                Password :
                            </p>
                            <input type="text"
                                className="form-control block w-[400px] px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-[10px] transition ease-in-out  mb-6 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                id="exampleFormControlInput2" placeholder="Enter your password" />
                        </div>
                    </form>
                    <div className="button mb-8">
                        <button type="button"
                            className="inline-block w-[400px] font-['Mulish'] h-12 py-2.5 bg- text-black font-bold text-xl hover:text-white leading-tight  rounded-lg shadow-md hover:bg-purple-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 bg-amber-400 active:shadow-lg transition duration-150 ease-in-out">
                            Login
                        </button>
                    </div>
                    <div className="inline-block w-[400px] font-['Inter'] text-[#8692A6] leading-5 text-center">
                        <div className="mb-6">OR SIGN UP WITH</div>
                        <div className="flex flex-row justify-center mb-9">
                            <img className="mr-6 w-9 h-8" src={google} alt="google" />
                            <img className="mr-6 w-9 h-8" src={facebook} alt="facebook" />
                            <img className=" w-9 h-auto" src={twitter} alt="twitter" />
                        </div>
                        <p className="mb-5">
                            already have account?
                        </p> <hr />
                        <Link to={'/signup'}>
                            <button type="button"
                                className="inline-block w-[400px] font-['Mulish'] h-12 py-2.5 bg- text-white font-bold text-xl hover:text-white leading-tight  rounded-lg shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 bg-[#0D253C] active:shadow-lg transition duration-150 ease-in-out">
                                Sign Up Now
                            </button>
                        </Link>

                        <Link to={'#'}>
                            <p className="text-black underline mt-12 font-semibold">
                                Back to Home Page
                            </p>
                        </Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Signin