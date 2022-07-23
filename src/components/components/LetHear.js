// import video from 'video-bicara.png'
import video from '../images/video-bicara.png'

const LetHear = () => {
    return (
        <>
            <div className="flex flex-row w-full">
                <div className="flex flex-col mt-20 ml-32">
                    <p className="mb-8 text-4xl">
                        Let's hear about <br /> Kayla's success story
                    </p>
                    <p className="mb-20">
                        See how well News Today works in a real user’s life.
                    </p>
                    <button className="inline-block w-[170px] font-['Mulish'] h-12 py-2.5 text-white font-bold text-xl hover:text-white leading-tight  rounded-lg shadow-md hover:bg-[#7cbdc5] hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 bg-[#388087] active:shadow-lg transition duration-150 ease-in-out ">Let's get started</button>
                    {/* <button className="inline-block w-[148px] font-['Mulish'] h-12 py-2.5 bg- text-black font-bold text-xl hover:text-white leading-tight  rounded-lg shadow-md hover:bg-purple-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 bg-amber-400 active:shadow-lg transition duration-150 ease-in-out ">
                        Let's get started
                    </button> */}
                </div>
                <div>
                    <img className="w-[671px] m-28" src={video} alt=''/>
                </div>
            </div>
        </>
    )
}

export default LetHear