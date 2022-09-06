import React from 'react'
import google from '../../../components/images/Google.svg'
import facebook from '../../../components/images/Facebook.svg'
import twitter from '../../../components/images/Twitter.svg'
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { AuthRegister } from '../../../Redux/Actions/Auth';
import Swal from 'sweetalert2'

const FormSignup = () => {
    const { data, error, loading, isRegister } = useSelector((state) => state.register)
    const dispatch = useDispatch()
    let navigate = useNavigate()

    const [formRegister, setFormRegister] = useState({
        email: '',
        password: '',
        phone_number: ''
    })

    useEffect(() => {
        if (isRegister == true) {
            Swal.fire({
                icon: 'success',
                title: '',
                text: 'Register Success',
            })
            navigate('/signin')
        } else {
            navigate('/signup')
        }
    }, [isRegister])

    const handleRegister = (e) => {
        e.preventDefault()
        dispatch(AuthRegister(formRegister))
        console.log(formRegister)
    }

    return (
        <>
            <div className='form-login'>
                <div className="flex flex-row">
                    <div className="flex-1 mt-6">
                        <h1 className="text-4xl font-['Mulish'] mb-6">Sign Up</h1>
                        <form onSubmit={handleRegister}>
                            <div className="">
                                <p className=" font-['Mulish'] text-base font-semibold text-[#4E4B66] leading-4 mb-3">
                                    Email Address :
                                </p>
                                <input type="text"
                                    className="form-control block w-[400px] px-3 py-2 text-sm font-normal bg-white bg-clip-padding border border-solid border-gray-300 rounded-[10px] transition ease-in-out mb-5 focus:text-gray-700 focus:bg-white focus:outline-none"
                                    id="exampleFormControlInput2" placeholder="Enter your email address" onChange={(e) => setFormRegister((prevData) => ({
                                        ...prevData,
                                        email: e.target.value
                                    }))} />
                            </div>

                            <div>
                                <p className="d-block font-['Mulish'] text-base font-semibold text-[#4E4B66] leading-4 mb-3">
                                    Password :
                                </p>
                                <input type="password"
                                    className="form-control block w-[400px] px-3 py-2 text-sm font-normal bg-white bg-clip-padding border border-solid border-gray-300 rounded-[10px] transition ease-in-out mb-5 focus:text-gray-700 focus:bg-white focus:outline-none"
                                    id="exampleFormControlInput2" placeholder="Enter your password" onChange={(e) => setFormRegister((prevData) => ({
                                        ...prevData,
                                        password: e.target.value
                                    }))} />
                            </div>
                            <div>
                                <p className="d-block font-['Mulish'] text-base font-semibold text-[#4E4B66] leading-4 mb-3">
                                    Phone Number :
                                </p>
                                <input type="text"
                                    className="form-control block w-[400px] px-3 py-2 text-sm font-normal bg-white bg-clip-padding border border-solid border-gray-300 rounded-[10px] transition ease-in-out mb-5 focus:text-gray-700 focus:bg-white focus:outline-none"
                                    id="exampleFormControlInput2" placeholder="Enter your phone number" onChange={(e) => setFormRegister((prevData) => ({
                                        ...prevData,
                                        phone_number: e.target.value
                                    }))} />
                            </div>
                            <button className="inline-block w-[400px] font-['Mulish'] h-10 py-2 bg- text-black font-bold text-xl hover:text-white leading-tight  rounded-lg shadow-md hover:bg-black hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 bg-amber-500 active:shadow-lg transition duration-150 ease-in-out" onClick={handleRegister}>Sign Up</button>
                        </form>
                        {/* <div className="button mb-5 mt-6">
                      
                            <button type="button"
                                className="inline-block w-[400px] font-['Mulish'] h-10 py-2 bg- text-white font-bold text-xl hover:text-black leading-tight  rounded-lg shadow-md hover:bg-[#badfe7] hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 bg-[#388087] active:shadow-lg transition duration-150 ease-in-out" onClick={handleRegister}>
                                    Sign Up
                            </button>
                        
                    </div> */}
                        <div className="inline-block mt-4 w-[400px] font-['Mulish'] text-[#8692A6] leading-4 text-center">
                            <div className="mb-5">OR SIGN UP WITH</div>
                            <div className="flex flex-row justify-center mb-5">
                                <img className="mr-6 w-8 h-8" src={google} alt="google" />
                                <img className="mr-6 w-8 h-8" src={facebook} alt="facebook" />
                                <img className=" w-8 h-auto" src={twitter} alt="twitter" />
                            </div>
                            <p className="mb-5">
                                already have account?
                            </p> <hr />
                            <Link to={'sigin'}>
                                <button type="button"
                                    className="inline-block w-[400px] font-['Mulish'] h-10 py-2 bg- text-white font-bold text-xl hover:text-black leading-tight  rounded-lg shadow-md hover:bg-amber-500 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 bg-black active:shadow-lg transition duration-150 ease-in-out" onClick={handleRegister}>
                                    Login Here
                                </button>
                            </Link>
                            <Link to={'/'}>
                                <p className="text-black text-sm underline mt-4 font-semibold">
                                    Back to Home Page
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export { FormSignup }