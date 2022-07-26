import { Link } from "react-router-dom";
import NewsToday from "../images/NewsToday.svg"

const Footer = () => {
    return (
        <>
            <footer className="footer mt-10 p-10 bg-black text-white flex justify-start mr-10">
                <div className="ml-10">
                    <span className="footer-title">Services</span>
                    <Link to={'#'} className="link link-hover">Branding</Link>
                    <Link to={'#'} className="link link-hover">Design</Link>
                    <Link to={'#'} className="link link-hover">Marketing</Link>
                    <Link to={'#'} className="link link-hover">Advertisement</Link>
                </div>
                <div className="ml-24">
                    <span className="footer-title">Company</span>
                    <Link to={'#'} className="link link-hover">About us</Link>
                    <Link to={'#'} className="link link-hover">Contact</Link>
                    <Link to={'#'} className="link link-hover">Jobs</Link>
                    <Link to={'#'} className="link link-hover">Press kit</Link>
                </div>
                <div className="ml-24">
                    <span className="footer-title">Legal</span>
                    <Link to={'#'} className="link link-hover">Terms of use</Link>
                    <Link to={'#'} className="link link-hover">Privacy policy</Link>
                    <Link to={'#'} className="link link-hover">Cookie policy</Link>
                </div>
                <div className="hero ml-40 mr-5">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-center w-[400px]">
                            <h1 className="text-4xl font-bold text-white">Send Your Email</h1>
                            <p className="py-6 mt-1">
                                If you want to get the latest news from us, we will always provide the latest news via email
                            </p>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-black">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold text-white text-xl">Email</span>
                                    </label>
                                    <input type="text" placeholder="username@gmail.com" className="input input-bordered text-black" />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-amber-400 text-black text-xl hover:bg-amber-500 font-extrabold">Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="footer px-20 py-0 border-t bg-base-200 text-base-content border-base-300">
                <div className="items-center flex flex-col mb-2">
                    <img className="h-20 w-40" src={NewsToday} alt="NewsToday" />
                    <p className="font-bold">
                        Jendral Sudirman Street No. 23
                        Jakarta, Indonesia | (621)989898934 | newstoday@mail.com
                    </p>
                </div>
                
                <div className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <Link to={'#'}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></Link>
                        <Link to={'#'}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></Link>
                        <Link to={'#'}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></Link>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer