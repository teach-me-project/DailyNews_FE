import Navbar from "../../components/components/Navbar"
import arrow from '../../components/images/arrow.svg'
import image from '../../components/images/Image.svg'
import play from '../../components/images/Play.svg'
import link from '../../components/images/Link.svg'
import align from '../../components/images/Align.svg'
import scale from '../../components/images/Scale.svg'
import { Link } from "react-router-dom"
import NewFooter from './../../components/components/NewFooter';

const WriteArticle = () => {
    return (
        <>
            <Navbar />
            <div>
                <div className="text-center mt-20">
                    <h1 className="font-bold text-2xl">Write Article</h1>
                </div>
                <Link to={''} >
                    <div className="flex flex-row items-center mb-10 ml-20 mt-0">
                        <img className="w-3 mr-5" src={arrow} />
                        <p className="font-semibold items-center font-xl">Back</p>
                    </div>
                </Link>
            </div>
            <div className="mx-36 mb-16">
                <div className="flex flex-row">
                    <div className="flex flex-col justify-center ml-32">
                        <div className="w-48 h-72 bg-gray-200 outline-dashed border-[#388087] ">
                            <h1 className="text-center text-7xl my-20">+</h1>
                        </div>
                        <button className="mt-4 inline-block w-48 font-['Mulish'] h-12 py-2.5 text-white font-bold text-base hover:text-white leading-tight  rounded-lg shadow-md hover:bg-[#164ace] hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 bg-[#0D253C] active:shadow-lg transition duration-150 ease-in-out ">
                            Choose Cover Photo
                        </button>
                    </div>
                    <div className="flex flex-col ml-10">
                        <div className="flex flex-row">
                            <input type="text"
                                className="rounded-lg form-control border-[#388087] h-12 block w-96 px-4 py-2 text-lg text-left font-normal text-gray-700 bg-white  border border-solid focus:border-blue-600 focus:outline-none" placeholder="Article Tittle" />
                            <select className="ml-5 w-96 border-black h-12 border border-solid rounded-lg " placeholder="Article Tittle">
                                <option value="Economy">Economy</option>
                                <option value="Politic">Politic</option>
                                <option value="Country">Country</option>
                                <option value="Health">Health</option>
                                <option value="Beuty">Beuty</option>
                            </select>
                            {/* <input type="text"
                            className="ml-3 rounded-lg form-control border-[#388087] h-12 block w-full px-4 py-2 text-lg text-left font-normal text-gray-700 bg-white  border border-solid focus:border-blue-600 focus:outline-none" placeholder="Article Tittle" /> */}
                        </div>
                        <div className="flex flex-row">
                            <p className="mt-5 mb-5 font-bold text-[#388087]">Attacment  : </p>
                            <img src={image} className="w-7 ml-6" />
                            <img src={play} className="w-7 ml-6" />
                            <img src={align} className="w-7 ml-6" />
                            <img src={link} className="w-7 ml-6" />
                            <img src={scale} className="w-7 ml-6" />
                        </div>
                        <textarea className="border border-solid rounded-lg h-44 border-gray-600">
                        </textarea>
                        <button className="w-full mt-4 inline-block font-['Mulish'] h-12 py-2.5 text-white font-bold text-base hover:text-white leading-tight  rounded-lg shadow-md hover:bg-[#7cbdc5] hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 bg-[#388087] active:shadow-lg transition duration-150 ease-in-out ">
                            Request Publish Article
                        </button>
                    </div>
                </div>
            </div>
            <NewFooter />
        </>
    )
}

export default WriteArticle