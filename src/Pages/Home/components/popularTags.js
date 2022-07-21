import donal from '../../../components/images/donaldTrump.png'
import covid from '../../../components/images/covid-19.png'
import finger from '../../../components/images/jempol.svg'
import timer from '../../../components/images/jam.svg'
import saves from '../../../components/images/save.svg'
import video from '../../../components/images/video-bicara.png'

const PopularTags = () => {
    return (
        <>
            <div>
                {/* categories */}
                <div className="ml-20 mr-20">
                    <div className="flex flex-row justify-between mb-4 text-2xl">
                        <h3 className="font-bold text-2xl">
                            Popular Tags
                        </h3>
                        <h3 className="font-semibold text-[#376AED]">
                            More
                        </h3>
                    </div>
                    <div className="flex flex-row text-[#376AED] mb-4">
                        <p className="rounded-md bg-[#EFF4FF] p-1">
                            #ladygaga
                        </p>
                        <p className="ml-10 rounded-md bg-[#EFF4FF] p-1">
                            #jokowidodo
                        </p>
                        <p className="ml-10 rounded-md bg-[#EFF4FF] p-1">
                            #dayniki
                        </p>
                        <p className="ml-10 rounded-md bg-[#EFF4FF] p-1">
                            #ladygaga
                        </p>
                        <p className="ml-10 rounded-md bg-[#EFF4FF] p-1">
                            #ladygaga
                        </p>
                        <p className="ml-10 rounded-md bg-[#EFF4FF] p-1">
                            #jokowidodo
                        </p>
                        <p className="ml-10 rounded-md bg-[#EFF4FF] p-1">
                            #dayniki
                        </p>
                        <p className="ml-10 rounded-md bg-[#EFF4FF] p-1">
                            #ladygaga
                        </p>
                        <p className="ml-10 rounded-md bg-[#EFF4FF] p-1">
                            #dayniki
                        </p>
                        <p className="ml-10 rounded-md bg-[#EFF4FF] p-1">
                            #ladygaga
                        </p>
                        <p className="ml-10 rounded-md bg-[#EFF4FF] p-1">
                            #dayniki
                        </p>
                        <p className="ml-10 rounded-md bg-[#EFF4FF] p-1">
                            #ladygaga
                        </p>
                    </div>
                </div>

                {/* category */}
                <div className="mt-11">
                    <div className="ml-20 mr-20">
                        <div className="flex flex-row justify-between mb-4 text-2xl">
                            <h3 className="font-bold">
                                Category
                            </h3>
                            <h3 className="font-semibold text-[#376AED]">
                                More
                            </h3>
                        </div>
                        <div className="flex flex-row text-[#376AED] mb-4">
                            <div className="flex flex-col items-center">
                                <img src={donal} />
                                <p className="text-black font-semibold">
                                    Goverments
                                </p>
                            </div>
                            <div className="flex flex-col items-center ml-5">
                                <img src={donal} />
                                <p className="text-black font-semibold">
                                    Goverments
                                </p>
                            </div>
                            <div className="flex flex-col items-center ml-5">
                                <img src={donal} />
                                <p className="text-black font-semibold">
                                    Goverments
                                </p>
                            </div>
                            <div className="flex flex-col items-center ml-5">
                                <img src={donal} />
                                <p className="text-black font-semibold">
                                    Goverments
                                </p>
                            </div>
                            <div className="flex flex-col items-center ml-5">
                                <img src={donal} />
                                <p className="text-black font-semibold">
                                    Goverments
                                </p>
                            </div>
                            <div className="flex flex-col items-center ml-5">
                                <img src={donal} />
                                <p className="text-black font-semibold">
                                    Goverments
                                </p>
                            </div>
                            <div className="flex flex-col items-center ml-5">
                                <img src={donal} />
                                <p className="text-black font-semibold">
                                    Goverments
                                </p>
                            </div>
                            <div className="flex flex-col items-center ml-5">
                                <img src={donal} />
                                <p className="text-black font-semibold">
                                    Goverments
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* recommended */}
                <div className="mt-11">
                    <div className="ml-20 mr-20">
                        <div className="flex flex-row justify-between mb-4 text-2xl">
                            <h3 className="font-bold">
                                Recommended
                            </h3>
                            <h3 className="font-semibold text-[#376AED]">
                                More
                            </h3>
                        </div>

                        <div className="flex flex-row">
                            <div className="flex flex-row text-[#376AED] mb-4 w-[396px] bg-white rounded-[16px] shadow-2xl">
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
                            <div className="flex flex-row text-[#376AED] mb-4 w-[396px] bg-white rounded-[16px] ml-6 shadow-2xl">
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
                            <div className="flex flex-row text-[#376AED] mb-4 w-[396px] bg-white rounded-[16px] ml-6 shadow-2xl">
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
                </div>
            </div>
            <div className="flex flex-row w-full">
                <div className="flex flex-col mt-20 ml-32">
                    <p className="text-4xl mb-8">
                        Let's hear about <br /> Kayla's success story
                    </p>
                    <p className="mb-20">
                        See how well News Today works in a real user’s life.
                    </p>
                    <button className="inline-block w-[148px] font-['Mulish'] h-12 py-2.5 bg- text-black font-bold text-xl hover:text-white leading-tight  rounded-lg shadow-md hover:bg-purple-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 bg-amber-400 active:shadow-lg transition duration-150 ease-in-out ">
                        Let's get started
                    </button>
                </div>
                <div>
                    <img className="w-[671px] m-28" src={video} />
                </div>
            </div>            
        </>
    )

}

export default PopularTags