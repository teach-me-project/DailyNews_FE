import bg from '../../components/images/women.png'
import arrow from '../../components/images/arrow.svg'

import { Link } from "react-router-dom";

const Forget = () => {
    return (
        <>
            <div className="flex flex-row">

                <div>
                    <img className="relative w-[721px] h-[1110px]" src={bg} alt="gambar" />
                </div>

                <div className="flex-1 ml-[107px] mt-12">
                    <div className="flex flex-row items-center mb-10">
                        <img className="w-3 mr-5" src={arrow} alt=''/>
                        <p className="font-semibold items-center font-xl">Back</p>
                    </div>
                    <h1 className="text-5xl font-['Inter'] mb-8">DON'T WORRY</h1>
                    <form className="">
                        <div className="">
                            <p className=" font-['Mulish'] text-base font-semibold text-[#7B8BB2] leading-5 mb-14 W-12">
                                We are here to help you to recover your password.
                                Enter your <br /> email adress that you used to register
                                and we’ll give you <br /> instructions to reset your password.
                            </p>
                            <input type="text"
                                className="form-control block w-[400px] px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-[10px] transition ease-in-out mb-6 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                id="exampleFormControlInput2" placeholder="Enter your email address" />
                        </div>
                        <div className="flex flex-row button mt-8 justify-between">
                            <div>
                                <Link to={'#'} className="underline ml-20">
                                    <p>Resend Link</p>
                                </Link>
                            </div>
                            <div>
                                <button type="button"
                                    className="mr-72 inline-block w-36 font-['Mulish'] h-12 py-2.5 bg- text-black font-bold text-xl hover:text-white leading-tight  rounded-lg shadow-md hover:bg-purple-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 bg-amber-400 active:shadow-lg transition duration-150 ease-in-out">
                                    send
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Forget