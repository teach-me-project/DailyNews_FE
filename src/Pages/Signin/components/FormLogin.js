import React from 'react'
import google from '../../../components/images/Google.svg'
import facebook from '../../../components/images/Facebook.svg'
import twitter from '../../../components/images/Twitter.svg'
import { Link, useNavigate } from "react-router-dom";
import login from '../../../components/images/login-vector.jpg';
import { useEffect, useState } from 'react';
import { useDispatch, useSelecetor } from 'react-redux';
import { AuthLogin } from "../../redux/actions/Auth"


const FormLogin = () => {
  const { data, error, loading, isLogin } = useSelecetor((state) => state.auth)
  const dispatch = useDispatch()
    let navigate = useNavigate()
    const [formLogin, setFormLogin] = useState({
        email: '',
        password: ''
    })
    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(AuthLogin(formLogin))
    }
    useEffect(() => {
        if(isLogin === true) {
            navigate('/', {replace: true})
        } else {
            navigate('/signin', {replace: true})
        }
    }, [isLogin]) 
  
    return (
    <>
    <div className='form-login'>
        <div className="flex flex-row">
            <div className="flex-1">
                <h1 className="text-4xl font-['Mulish'] mb-6">Login</h1>
                <form onSubmit={handleLogin}>
                    <div>
                        <p className=" font-['Mulish'] text-base font-semibold text-rgba(56, 128, 135, 1) leading-5 mb-3">Email Address :</p>
                        <input type="text"
                            className="form-control block w-[400px] px-2 py-1 text-xl font-normal text-rgba(56, 128, 135, 1)-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-[10px] transition ease-in-out mb-5 focus:text-gray-700 focus:bg-white focus:border-rgba(56, 128, 135, 1)-600 focus:outline-none"
                            id="exampleFormControlInput2" placeholder="Enter your email address" onChange={(e) => setFormLogin((prevData) => ({
                                ...prevData,
                                email: e.target.value
                            }))}/>
                    </div>
                    <div>
                        <p className="d-block font-['Mulish'] text-base font-semibold text-[#4E4B66] leading-3 mb-3">Password :</p>
                        <input type="text"
                        className="form-control block w-[400px] px-3 py-1 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-[10px] transition ease-in-out  mb-6 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleFormControlInput2" placeholder="Enter your password" onChange={(e) => setFormLogin((prevData) => ({
                            ...prevData,
                            password: e.target.value
                        }))}/>
                    </div>
                    {/* {loading ? (
                    <button className="btn btn-primary" disabled={true}>Loading..</button>
                    ):(
                    <button className="btn btn-primary">Sign In</button>
                    )} 
                    {error && (
                    alert ('Wrong email or password')
                    // `${error.message}`
                    )} */}
                </form>
                <div className="button mb-8">
                    <button type="button"
                    className="inline-block w-[400px] font-['Mulish'] h-10 py-2 bg- text-white font-bold text-xl hover:text-black leading-tight  rounded-lg shadow-md hover:bg-[#72b7e3] hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 bg-[#092a44] active:shadow-lg transition duration-150 ease-in-out">
                    Login
                    </button>
                </div>
                <div className="inline-block w-[400px] font-['Inter'] text-[#8692A6] leading-5 text-center">
                    <div className="mb-4 font-['Mulish']">OR SIGN UP WITH</div>
                    <div className="flex flex-row justify-center mb-5">
                    <img className="mr-6 w- h-8" src={google} alt="google" />
                    <img className="mr-6 w-9 h-8" src={facebook} alt="facebook" />
                    <img className=" w-9 h-auto" src={twitter} alt="twitter" />
                </div>
                <p className="mb-5 font-['Mulish']" >
                already have account?
                </p> <hr />
                <button type="button"
                className="inline-block w-[400px] font-['Mulish'] h-12 py-2.5 bg- text-white font-bold text-xl hover:text-white leading-tight  rounded-lg shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 bg-[#0D253C] active:shadow-lg transition duration-150 ease-in-out">
                Sign Up Now
                </button>
                <Link to={'#'}>
                    <p className="text-black underline mt-7 font-semibold font-['Mulish']">
                    Back to Home Page
                    </p>
                </Link>
                </div>
            </div>
        </div>
    </div>

    <div className='form-login-mobile'>
        <div className='header-mobile'>News Today!</div>
        <div className='image-login'>
            <img src={login} alt='login'/>
        </div>
        <div className='top-navigation'>
            <div className='login-mobile'>
                <h1>LOGIN</h1>
                <hr/>
            </div>
            <div className='login-mobile'>
                <h1>SIGN UP</h1>
                <hr/>
            </div>
        </div>
        <div className='card-login'>
            <h1 className='header-card'>Welcome back!</h1>
            <h2>Sign in with your account</h2>
            <form>
                <div>
                    <p>Email</p>
                    <input type="email" id="email" placeholder="Enter your email address"/>
                </div>
                <div>
                    <p>Password</p>
                    <input type="password" id="password" placeholder="Enter your email password" />
                </div>
            </form>
            <Link to = {'#'}>Forgot your password?</Link> 
            <button className='btn-login-mobile'>Login</button>  
            <div className='footer-mobile'>
                <h1>FAST SIGN IN</h1>
                <div className="footer-mobile-logo">
                    <img src={google} alt="google" />
                    <img src={facebook} alt="facebook" />
                    <img src={twitter} alt="twitter" />
                </div>
            </div>
        </div>
        
    </div>

    </>
  )
}

export {FormLogin}