import Navbar from "../../components/components/Navbar"
import bgMain from "../../components/images/typing.png"
import { Link } from "react-router-dom";
import Filter from "../../components/images/Filter.svg"

// import donal from '../../../components/images/donaldTrump.png'
import covid from "../../components/images/covid-19.png"
// import covid from '../../../components/images/covid-19.png'
import finger from '../../components/images/jempol.svg'
import timer from '../../components/images/jam.svg'
import saves from '../../components/images/save.svg'
import video from '../../components/images/video-bicara.png'



const Article = () => {

    return (
        <>
            <Navbar />

            <div className="flex flex-col bg-white">
                <img className="w-full relative" src={bgMain} />
                <div className="absolute ml-28 text-7xl text-['Georgia'] mt-28">
                    Start Writing an<br /> Article
                    <p className="text-xl mt-5 mb-7">
                        You can be an author by being active in reading artciles<br /> in a month or you can request to be an author if you <br /> have been a member for three months.
                    </p>
                    <Link to="/signin">
                        <button className="inline-block w-[148px] font-['Mulish'] h-12 py-2.5  text-white font-bold text-xl hover:text-white leading-tight  rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 bg-[#376AED] active:shadow-lg transition duration-150 ease-in-out ">
                            Start Writing
                        </button>
                    </Link>
                </div>
            </div>

            <div>
                <div className="flex flex-row ml-28 mt-16">
                    <img className="w-5" src={Filter} />
                    <p className="text-base">Filter Article : sort by <b>category</b></p>
                </div>
            </div>


            <div className="ml-20">
                <p className="font-bold text-2xl mb-4">
                    Today's Popular
                </p>
                <div className="flex flex-row">
                    <div className="flex flex-row text-[#376AED] mb-4 w-[396px] bg-white rounded-[16px] shadow-2xl mr-2">
                        <div className="flex flex-row items-center">
                            <img src={covid} />
                            <div className="flex flex-col ml-9">
                                <p className="text-[#376AED] font-semibold text-xl">
                                    COVID-19
                                </p>
                                <p className="text-black font-semibold mt-3">
                                    Why corona never ends?<br /> Let’s see how its facts
                                </p>
                                <div className="flex flex-row mt-14">
                                    <div className="flex flex-row">
                                        <img className="mr-1" src={finger} />
                                        <p>2.1k</p>
                                    </div>
                                    <div className="ml-3.5 flex flex-row">
                                        <img className="mr-1" src={timer} />
                                        <p>3m ago</p>
                                    </div>
                                    <div className="ml-3 flex flex-row">
                                        <img src={saves} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row text-[#376AED] mb-4 w-[396px] bg-white rounded-[16px] shadow-2xl mr-2">
                        <div className="flex flex-row items-center">
                            <img src={covid} />
                            <div className="flex flex-col ml-9">
                                <p className="text-[#376AED] font-semibold text-xl">
                                    COVID-19
                                </p>
                                <p className="text-black font-semibold mt-3">
                                    Why corona never ends?<br /> Let’s see how its facts
                                </p>
                                <div className="flex flex-row mt-14">
                                    <div className="flex flex-row">
                                        <img className="mr-1" src={finger} />
                                        <p>2.1k</p>
                                    </div>
                                    <div className="ml-3.5 flex flex-row">
                                        <img className="mr-1" src={timer} />
                                        <p>3m ago</p>
                                    </div>
                                    <div className="ml-3 flex flex-row">
                                        <img src={saves} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="bg-[#0D253C] flex flex-row text-[#376AED] w-[396px] rounded-[16px] shadow-2xl z-20"> */}
                        <div className="flex flex-row text-[#376AED] mb-4 w-[396px] bg-[#0D253C] rounded-[16px]  shadow-2xl mr-2 z-0">
                            <div className="flex flex-row items-center">
                                <img src={covid} />
                                <div className="flex flex-col ml-9">
                                    <p className="text-[#376AED] font-semibold text-xl">
                                        COVID-19
                                    </p>
                                    <p className="text-black font-semibold mt-3">
                                        Why corona never ends?<br /> Let’s see how its facts
                                    </p>
                                    <div className="flex flex-row mt-14">
                                        <div className="flex flex-row">
                                            <img className="mr-1" src={finger} />
                                            <p>2.1k</p>
                                        </div>
                                        <div className="ml-3.5 flex flex-row">
                                            <img className="mr-1" src={timer} />
                                            <p>3m ago</p>
                                        </div>
                                        <div className="ml-3 flex flex-row">
                                            <img src={saves} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            {/* </div> */}
        </>
    )
}
export default Article