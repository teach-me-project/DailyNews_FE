import { Link } from "react-router-dom"

const NavbarLogin = () => {
    return (
        <>


            <div className="navbar bg-base-100 container">
                <div className="flex-1">    
                    <p className="flex text-black font-bold text-4xl pl-4 font-['Georgia'] ml-12">
                        News Today
                    </p>
                    <div className="flex ml-20 justify-right">
                        <Link to="/">
                            <p className="px-4 text-xl text-[#8692A6] hover:text-black hover:font-bold">Home</p>
                        </Link>
                        <Link to="/article">
                            <p className="px-4 text-xl text-[#8692A6] hover:text-black hover:font-bold">Articles</p>
                        </Link>
                        <Link to="/Category">
                            <p className="px-4 text-xl text-[#8692A6] hover:text-black hover:font-bold">Category</p>
                        </Link>
                        <Link to="#">
                            <p className="px-4 text-xl text-[#8692A6] hover:text-black hover:font-bold">About</p>
                        </Link>
                    </div>
                </div>


                <div className="flex-none gap-2 mr-8 ml-3">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="w-80 h-10 input input-bordered" />
                    </div>
                    {/* uji */}
                    <button class="btn btn-ghost btn-circle">
                        <div class="indicator">
                        
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                            <span class="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </button>
                    {/* uji */}
                    <div className="dropdown dropdown-end">
                        <label tabindex="0" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://placeimg.com/80/80/people" alt=''/>
                            </div>
                        </label>
                        <ul tabindex="0" className="p-2 mt-3 w-52 shadow menu menu-compact dropdown-content bg-base-100 rounded-box">
                            <li>
                                <p className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </p>
                            </li>
                            <Link to='/changepassword'><li><p>Settings</p></li></Link>
                            <li><p>Logout</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavbarLogin