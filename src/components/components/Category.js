import donal from "../images/donaldTrump.png";
import money from "../images/money.png";
import man from "../images/man.png";

const Category = () => {
  return (
    <>
      <div className="mt-11">
        <div className="ml-20 mr-20">
          <div className="flex flex-row justify-between mb-4 text-2xl">
            <h3 className="font-bold">Category</h3>
            <h3 className="font-semibold text-[#376AED]">More</h3>
          </div>
          <div className="flex flex-row text-[#376AED] mb-4 ">
            <div className="flex flex-col items-center">
              <img src={donal} alt="" />
              <p className="text-black font-semibold">Goverments</p>
            </div>
            <div className="flex flex-col items-center ml-5">
              <img src={money} alt="" />
              <p className="text-black font-semibold">Economy</p>
            </div>
            <div className="flex flex-col items-center ml-5">
              <img src={man} alt="" />
              <p className="text-black font-semibold">Health</p>
            </div>
            <div className="flex flex-col items-center ml-5">
              <img src={donal} alt="" />
              <p className="text-black font-semibold">Goverments</p>
            </div>
            <div className="flex flex-col items-center ml-5">
              <img src={money} alt="" />
              <p className="text-black font-semibold">Economy</p>
            </div>
            <div className="flex flex-col items-center ml-5">
              <img src={man} alt="" />
              <p className="text-black font-semibold">Health</p>
            </div>
            <div className="flex flex-col items-center ml-5">
              <img src={donal} alt="" />
              <p className="text-black font-semibold">Goverments</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
