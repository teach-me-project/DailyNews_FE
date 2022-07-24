import { Link } from 'react-router-dom';
import ruka from "../../components/images/ruka.jpg"
import Navbar from "../../components/components/Navbar"
import arrow from '../../components/images/arrow.svg'
import Filter from "../../components/images/Filter.svg"
import NewFooter from '../../components/components/NewFooter';


const Notification = () => {
    return (
        <>
            <Navbar />

            <div>
                <div className="mt-20 text-center">
                    <h1 className="text-2xl font-bold">Notification</h1>
                </div>
                <Link to={''} >
                    <div className="flex flex-row items-center mt-0 mb-10 ml-20">
                        <img className="mr-5 w-3" src={arrow} alt=''/>
                        <p className="items-center font-semibold font-xl">Home Page</p>
                    </div>
                </Link>
            </div>

            <div>
                <div className="flex flex-row mt-10 mb-10 ml-20">
                    <img className="w-5" src={Filter} alt=''/>
                    <p className="ml-5 text-base">Filter</p>
                </div>
            </div>

            <div className="flex flex-row justify-between mt-2 mr-20 ml-20">
                <div className="flex flex-col">
                    <div className="flex flex-col mb-7">
                        <div className="flex flex-row items-center">
                            <div className="w-20 rounded-full">
                                <img src={ruka} alt=''/>
                            </div>
                            <div className="flex flex-col">
                                <p className='ml-5 w-40 text-sm font-bold'>Ruka Just Like Your Post</p>
                                <p className='ml-5 mt-2 text-sm text-[#979797]'>2m ago</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col mb-7">
                        <div className="flex flex-row items-center">
                            <div className="w-20 rounded-full">
                                <img src={ruka} alt=''/>
                            </div>
                            <div className="flex flex-col">
                                <p className='ml-5 w-40 text-sm font-bold'>Ruka Just Like Your Post</p>
                                <p className='ml-5 mt-2 text-sm text-[#979797]'>2m ago</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col mb-7">
                        <div className="flex flex-row items-center">
                            <div className="w-20 rounded-full">
                                <img src={ruka} alt=''/>
                            </div>
                            <div className="flex flex-col">
                                <p className='ml-5 w-40 text-sm font-bold'>Ruka Just Like Your Post</p>
                                <p className='ml-5 mt-2 text-sm text-[#979797]'>2m ago</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col mb-7">
                        <div className="flex flex-row items-center">
                            <div className="w-20 rounded-full">
                                <img src={ruka} alt=''/>
                            </div>
                            <div className="flex flex-col">
                                <p className='ml-5 w-40 text-sm font-bold'>Ruka Just Like Your Post</p>
                                <p className='ml-5 mt-2 text-sm text-[#979797]'>2m ago</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col mb-7">
                        <div className="flex flex-row items-center">
                            <div className="w-20 rounded-full">
                                <img src={ruka} alt=''/>
                            </div>
                            <div className="flex flex-col">
                                <p className='ml-5 w-40 text-sm font-bold'>Ruka Just Like Your Post</p>
                                <p className='ml-5 mt-2 text-sm text-[#979797]'>2m ago</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col mb-7">
                        <div className="flex flex-row items-center">
                            <div className="w-20 rounded-full">
                                <img src={ruka} alt=''/>
                            </div>
                            <div className="flex flex-col">
                                <p className='ml-5 w-40 text-sm font-bold'>Ruka Just Like Your Post</p>
                                <p className='ml-5 mt-2 text-sm text-[#979797]'>2m ago</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col mb-7">
                        <div className="flex flex-row items-center">
                            <div className="w-20 rounded-full">
                                <img src={ruka} alt=''/>
                            </div>
                            <div className="flex flex-col">
                                <p className='ml-5 w-40 text-sm font-bold'>Ruka Just Like Your Post</p>
                                <p className='ml-5 mt-2 text-sm text-[#979797]'>2m ago</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* between */}
                <div className="mt-10 mr-20">
                    <input className="mb-24 w-5 h-5" type="checkbox" value="Bike" /><br />
                    <input className="mb-24 w-5 h-5" type="checkbox" value="Bike" /><br />
                    <input className="mb-24 w-5 h-5" type="checkbox" value="Bike" /><br />
                    <input className="mb-24 w-5 h-5" type="checkbox" value="Bike" /><br />
                    <input className="mb-24 w-5 h-5" type="checkbox" value="Bike" /><br />
                    <input className="mb-24 w-5 h-5" type="checkbox" value="Bike" /><br />
                    <input className="mb-24 w-5 h-5" type="checkbox" value="Bike" /><br />
                </div>
            </div>
            <NewFooter/>
        </>
    )
}

export default Notification