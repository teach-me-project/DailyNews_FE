import covid from "../images/covid-19.png";
import finger from "../images/jempol.svg";
import timer from "../images/jam.svg";
import saves from "../images/save.svg";

const Recomended = () => {
  return (
    <>
      <div className="mt-11">
        <div className="ml-20 mr-20">
          <div className="flex flex-row justify-between mb-4 text-2xl">
            <h3 className="font-bold">Recommended</h3>
            <h3 className="font-semibold text-[#376AED]">More</h3>
          </div>

          <div className="flex flex-row">
            <div className="flex flex-row text-[#376AED] mb-4 w-[396px] bg-white rounded-[16px] shadow-2xl">
              <div className="flex flex-row items-center">
                <img src={covid} alt="" />
                <div className="flex flex-col ml-9">
                  <p className="text-[#376AED] font-semibold text-xl">
                    COVID-19
                  </p>
                  <p className="text-black font-semibold mt-3">
                    Why corona never ends?
                    <br /> Let’s see how its facts
                  </p>
                  <div className="flex flex-row mt-14">
                    <div className="flex flex-row">
                      <img className="mr-1" src={finger} alt="" />
                      <p>2.1k</p>
                    </div>
                    <div className="ml-3.5 flex flex-row">
                      <img className="mr-1" src={timer} alt="" />
                      <p>3m ago</p>
                    </div>
                    <div className="ml-3 flex flex-row">
                      <img src={saves} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row text-[#376AED] mb-4 w-[396px] bg-white rounded-[16px] ml-6 shadow-2xl">
              <div className="flex flex-row items-center">
                <img src={covid} alt="" />
                <div className="flex flex-col ml-9">
                  <p className="text-[#376AED] font-semibold text-xl">
                    COVID-19
                  </p>
                  <p className="text-black font-semibold mt-3">
                    Why corona never ends?
                    <br /> Let’s see how its facts
                  </p>
                  <div className="flex flex-row mt-14">
                    <div className="flex flex-row">
                      <img className="mr-1" src={finger} alt="" />
                      <p>2.1k</p>
                    </div>
                    <div className="ml-3.5 flex flex-row">
                      <img className="mr-1" src={timer} alt="" />
                      <p>3m ago</p>
                    </div>
                    <div className="ml-3 flex flex-row">
                      <img src={saves} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row text-[#376AED] mb-4 w-[396px] bg-white rounded-[16px] ml-6 shadow-2xl">
              <div className="flex flex-row items-center">
                <img src={covid} alt="" />
                <div className="flex flex-col ml-9">
                  <p className="text-[#376AED] font-semibold text-xl">
                    COVID-19
                  </p>
                  <p className="text-black font-semibold mt-3">
                    Why corona never ends?
                    <br /> Let’s see how its facts
                  </p>
                  <div className="flex flex-row mt-14">
                    <div className="flex flex-row">
                      <img className="mr-1" src={finger} alt="" />
                      <p>2.1k</p>
                    </div>
                    <div className="ml-3.5 flex flex-row">
                      <img className="mr-1" src={timer} alt="" />
                      <p>3m ago</p>
                    </div>
                    <div className="ml-3 flex flex-row">
                      <img src={saves} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recomended;
