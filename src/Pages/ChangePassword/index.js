import { Link } from "react-router-dom";
import Footer from './../../components/components/Footer';

const ChangePassword = () => {
    return (
        <>
            <div className="flex flex-row justify-center">
                <div className=" ml-[107px] mt-12">
                    <h1 className="text-5xl font-['Inter'] mb-8">Change Password</h1>

                    <form className="">

                        <div className="">
                            <p className=" font-['Mulish'] text-base font-semibold text-[#000000] leading-5 mb-3">
                                New Password :
                            </p>
                            <input type="text"
                                className="form-control block w-[400px] px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-[10px] transition ease-in-out mb-6 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                id="exampleFormControlInput2" placeholder="Enter your New Password" />
                        </div>

                        <div>
                            <p className="d-block font-['Mulish'] text-base font-semibold text-[#000000] leading-5 mb-3">
                               Confirm Password :
                            </p>
                            <input type="text"
                                className="form-control block w-[400px] px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-[10px] transition ease-in-out  mb-6 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                id="exampleFormControlInput2" placeholder="Enter your Confirm password" />
                        </div>
                    </form>
                    <div className="button mb-8">
                        <button type="button"
                            className="inline-block w-[400px] font-['Mulish'] h-10 py-2 bg- text-black font-bold text-xl hover:text-white leading-tight  rounded-lg shadow-md hover:bg-black hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 bg-amber-500 active:shadow-lg transition duration-150 ease-in-out">
                            Confirm
                        </button>
                    </div>
                    <div className="inline-block w-[400px] font-['Inter'] text-[#8692A6] leading-5 text-center">
                        <Link to={'/'}>
                        <p className="text-black underline mt-12 font-semibold">
                            Back to Home Page
                        </p>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer/>

        </>
    )
}

export default ChangePassword