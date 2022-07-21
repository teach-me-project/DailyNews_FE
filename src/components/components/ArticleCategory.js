import money from "../images/money.png";
import man from "../images/man.png";
import donal from "../images/donaldTrump.png";
import VR from "../images/VR.png";
import nottrump from "../images/nottrump.png";
import sea from "../images/sea.png";


const ArticleCategory =()=>{
    return(
        <>
        <div className="container my-5 px-5">
            <div className="flex justify-between items-center">
            <div className="flex flex-col items-center ">
              <img src={man} alt="" />
              {/* <p className="absolute inset-28 font-['Avenir'] text-white font-semibold"> +200 <br/>Articles </p> */}
              <p className="mt-4 text-black font-bold">Health</p>
            </div>
            <div className="flex flex-col items-center ml-10">
              <img src={donal} alt="" />
              {/* <p className="absolute inset-28 font-['Avenir'] text-white font-semibold"> +200 <br/>Articles </p> */}
              <p className="mt-4 text-black font-bold">Politics</p>
            </div>
            <div className="flex flex-col items-center ml-10">
              <img src={money} alt="" />
              {/* <p className="absolute inset-28 font-['Avenir'] text-white font-semibold"> +200 <br/>Articles </p> */}
              <p className="mt-4 text-black font-bold">Economy</p>
            </div>
            <div className="flex flex-col items-center ml-10">
              <img src={nottrump} alt="" />
              {/* <p className="absolute inset-28 font-['Avenir'] text-white font-semibold"> +200 <br/>Articles </p> */}
              <p className="mt-4 text-black font-bold">Country</p>
            </div>
            <div className="flex flex-col items-center ml-10">
              <img src={VR} alt="" />
              {/* <p className="absolute inset-28 font-['Avenir'] text-white font-semibold"> +200 <br/>Articles </p> */}
              <p className="mt-4 text-black font-bold">Technology</p>
            </div>
            <div className="flex flex-col items-center ml-10">
              <img src={sea} alt="" />
              {/* <p className="absolute inset-28 font-['Avenir'] text-white font-semibold"> +200 <br/>Articles </p> */}
              <p className="mt-4 text-black font-bold">Holiday</p>
            </div>
            </div>
        </div>
        <div className="container my-5 px-5">
            <div className="flex justify-between items-center">
            <div className="flex flex-col items-center ">
              <img src={man} alt="" />
              {/* <p className="absolute inset-28 font-['Avenir'] text-white font-semibold"> +200 <br/>Articles </p> */}
              <p className="mt-4 text-black font-bold">Popular</p>
            </div>
            <div className="flex flex-col items-center ml-10">
              <img src={donal} alt="" />
              {/* <p className="absolute inset-28 font-['Avenir'] text-white font-semibold"> +200 <br/>Articles </p> */}
              <p className="mt-4 text-black font-bold">Trending</p>
            </div>
            <div className="flex flex-col items-center ml-10">
              <img src={money} alt="" />
              {/* <p className="absolute inset-28 font-['Avenir'] text-white font-semibold"> +200 <br/>Articles </p> */}
              <p className="mt-4 text-black font-bold">Popular</p>
            </div>
            <div className="flex flex-col items-center ml-10">
              <img src={nottrump} alt="" />
              {/* <p className="absolute inset-28 font-['Avenir'] text-white font-semibold"> +200 <br/>Articles </p> */}
              <p className="mt-4 text-black font-bold">Country</p>
            </div>
            <div className="flex flex-col items-center ml-10">
              <img src={VR} alt="" />
              {/* <p className="absolute inset-28 font-['Avenir'] text-white font-semibold"> +200 <br/>Articles </p> */}
              <p className="mt-4 text-black font-bold">Industry</p>
            </div>
            <div className="flex flex-col items-center ml-10">
              <img src={sea} alt="" />
              {/* <p className="absolute inset-28 font-['Avenir'] text-white font-semibold"> +200 <br/>Articles </p> */}
              <p className="mt-4 text-black font-bold">Travel</p>
            </div>
            </div>
        </div>
        <div className="container my-5 px-5">
            <div className="flex justify-between items-center">
            <div className="flex flex-col items-center ">
              <img src={man} alt="" />
              {/* <p className="absolute inset-28 font-['Avenir'] text-white font-semibold"> +200 <br/>Articles </p> */}
              <p className="mt-4 text-black font-bold">Health</p>
            </div>
            <div className="flex flex-col items-center ml-10">
              <img src={donal} alt="" />
              {/* <p className="absolute inset-28 font-['Avenir'] text-white font-semibold"> +200 <br/>Articles </p> */}
              <p className="mt-4 text-black font-bold">Politics</p>
            </div>
            <div className="flex flex-col items-center ml-10">
              <img src={money} alt="" />
              {/* <p className="absolute inset-28 font-['Avenir'] text-white font-semibold"> +200 <br/>Articles </p> */}
              <p className="mt-4 text-black font-bold">Economy</p>
            </div>
            <div className="flex flex-col items-center ml-10">
              <img src={nottrump} alt="" />
              {/* <p className="absolute inset-28 font-['Avenir'] text-white font-semibold"> +200 <br/>Articles </p> */}
              <p className="mt-4 text-black font-bold">Country</p>
            </div>
            <div className="flex flex-col items-center ml-10">
              <img src={VR} alt="" />
              {/* <p className="absolute inset-28 font-['Avenir'] text-white font-semibold"> +200 <br/>Articles </p> */}
              <p className="mt-4 text-black font-bold">Technology</p>
            </div>
            <div className="flex flex-col items-center ml-10">
              <img src={sea} alt="" />
              {/* <p className="absolute inset-28 font-['Avenir'] text-white font-semibold"> +200 <br/>Articles </p> */}
              <p className="mt-4 text-black font-bold">Holiday</p>
            </div>
            </div>
        </div>
        </>
    )
}

export default ArticleCategory