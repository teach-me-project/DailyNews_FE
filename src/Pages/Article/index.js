import Navbar from "../../components/components/Navbar";
import bgMain from "../../components/images/typing.png";
import { Link } from "react-router-dom";
import Filter from "../../components/images/Filter.svg";
import covid from "../../components/images/covid-19.png";
import finger from "../../components/images/jempol.svg";
import timer from "../../components/images/jam.svg";
import saves from "../../components/images/save.svg";
import Footer from "../../components/components/Footer";
import NewFooter from "./../../components/components/NewFooter";

const Article = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="flex flex-col bg-white">
          <img className="relative w-full" src={bgMain} alt=''/>
          <div className="absolute ml-28 text-7xl text-['Georgia'] mt-28">
            Start Writing an
            <br /> Article
            <p className="mt-5 mb-7 text-xl">
              You can be an author by being active in reading artciles
              <br /> in a month or you can request to be an author if you <br />{" "}
              have been a member for three months.
            </p>
            <Link to="/signin">
              <button className="inline-block w-[148px] font-['Mulish'] h-12 py-2.5  text-white font-bold text-xl hover:text-white leading-tight  rounded shadow-md hover:bg-[#7cbdc5] hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 bg-[#388087] active:shadow-lg transition duration-150 ease-in-out ">
                Start Writing
              </button>
            </Link>
          </div>
        </div>

        <div>
          <div className="flex flex-row mt-16 mb-20 ml-28">
            <img className="w-5" src={Filter} alt=''/>
            <p className="text-base">
              Filter Article : sort by <b>category</b>
            </p>
          </div>
        </div>

        {/* <SortBy /> */}

        <div className="ml-20 mb-4">
          <p className="mb-16 text-2xl font-bold">Today's Popular</p>
          <div className="flex flex-row my-5">
            <div className="flex flex-row text-[#388087] mb-4 w-[396px] bg-white rounded-[16px] shadow-2xl mr-2">
              <div className="flex flex-row items-center">
                <img src={covid} alt=''/>
                <div className="flex flex-col ml-9">
                  <p className="text-[#388087] font-semibold text-xl">
                    COVID-19
                  </p>
                  <p className="mt-3 font-semibold text-black">
                    Why corona never ends?
                    <br /> Let’s see how its facts
                  </p>
                  <div className="flex flex-row mt-14">
                    <div className="flex flex-row">
                      <img className="mr-1" src={finger} alt=''/>
                      <p>2.1k</p>
                    </div>
                    <div className="flex flex-row ml-3.5">
                      <img className="mr-1" src={timer} alt=''/>
                      <p>3m ago</p>
                    </div>
                    <div className="flex flex-row ml-3">
                      <img src={saves} alt=''/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row text-[#388087] mb-4 w-[396px] bg-white rounded-[16px] shadow-2xl mr-2">
              <div className="flex flex-row items-center">
                <img src={covid} alt=''/>
                <div className="flex flex-col ml-9">
                  <p className="text-[#388087] font-semibold text-xl">
                    COVID-19
                  </p>
                  <p className="mt-3 font-semibold text-black">
                    Why corona never ends?
                    <br /> Let’s see how its facts
                  </p>
                  <div className="flex flex-row mt-14">
                    <div className="flex flex-row">
                      <img className="mr-1" src={finger} alt=''/>
                      <p>2.1k</p>
                    </div>
                    <div className="flex flex-row ml-3.5">
                      <img className="mr-1" src={timer} alt=''/>
                      <p>3m ago</p>
                    </div>
                    <div className="flex flex-row ml-3">
                      <img src={saves} alt=''/>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="bg-[#0D253C] flex flex-row text-[#388087] w-[396px] rounded-[16px] shadow-2xl z-20"> */}
            <div className="w-[396px] bg-[#0D253C] rounded-[16px] opacity-70 h-auto z-30">
              <div className="flex flex-row text-[#388087] mb-4 w-[396px] rounded-[16px]  shadow-2xl mr-2 bg-white">
                <div className="flex z-20 flex-row items-center">
                  <img className="z-0" src={covid} alt=''/>
                  <div className="flex flex-col ml-9">
                    <p className="text-[#388087] font-semibold text-xl">
                      COVID-19
                    </p>
                    <p className="mt-3 font-semibold text-black">
                      Why corona never ends?
                      <br /> Let’s see how its facts
                    </p>
                    <div className="flex flex-row mt-14">
                      <div className="flex flex-row">
                        <img className="mr-1" src={finger} alt=''/>
                        <p>2.1k</p>
                      </div>
                      <div className="flex flex-row ml-3.5">
                        <img className="mr-1" src={timer} alt=''/>
                        <p>3m ago</p>
                      </div>
                      <div className="flex flex-row ml-3">
                        <img src={saves} alt=''/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row my-5">
            <div className="flex flex-row text-[#388087] mb-4 w-[396px] bg-white rounded-[16px] shadow-2xl mr-2">
              <div className="flex flex-row items-center">
                <img src={covid} alt=''/>
                <div className="flex flex-col ml-9">
                  <p className="text-[#388087] font-semibold text-xl">
                    COVID-19
                  </p>
                  <p className="mt-3 font-semibold text-black">
                    Why corona never ends?
                    <br /> Let’s see how its facts
                  </p>
                  <div className="flex flex-row mt-14">
                    <div className="flex flex-row">
                      <img className="mr-1" src={finger} alt=''/>
                      <p>2.1k</p>
                    </div>
                    <div className="flex flex-row ml-3.5">
                      <img className="mr-1" src={timer} alt=''/>
                      <p>3m ago</p>
                    </div>
                    <div className="flex flex-row ml-3">
                      <img src={saves} alt=''/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row text-[#388087] mb-4 w-[396px] bg-white rounded-[16px] shadow-2xl mr-2">
              <div className="flex flex-row items-center">
                <img src={covid} alt=''/>
                <div className="flex flex-col ml-9">
                  <p className="text-[#388087] font-semibold text-xl">
                    COVID-19
                  </p>
                  <p className="mt-3 font-semibold text-black">
                    Why corona never ends?
                    <br /> Let’s see how its facts
                  </p>
                  <div className="flex flex-row mt-14">
                    <div className="flex flex-row">
                      <img className="mr-1" src={finger} alt=''/>
                      <p>2.1k</p>
                    </div>
                    <div className="flex flex-row ml-3.5">
                      <img className="mr-1" src={timer} alt=''/>
                      <p>3m ago</p>
                    </div>
                    <div className="flex flex-row ml-3">
                      <img src={saves} alt=''/>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="bg-[#0D253C] flex flex-row text-[#388087] w-[396px] rounded-[16px] shadow-2xl z-20"> */}
            <div className="w-[396px] bg-[#0D253C] rounded-[16px] opacity-70 h-auto z-30">
              <div className="flex flex-row text-[#388087] mb-4 w-[396px] rounded-[16px]  shadow-2xl mr-2 bg-white">
                <div className="flex z-20 flex-row items-center">
                  <img className="z-0" src={covid} alt=''/>
                  <div className="flex flex-col ml-9">
                    <p className="text-[#388087] font-semibold text-xl">
                      COVID-19
                    </p>
                    <p className="mt-3 font-semibold text-black">
                      Why corona never ends?
                      <br /> Let’s see how its facts
                    </p>
                    <div className="flex flex-row mt-14">
                      <div className="flex flex-row">
                        <img className="mr-1" src={finger} alt=''/>
                        <p>2.1k</p>
                      </div>
                      <div className="flex flex-row ml-3.5">
                        <img className="mr-1" src={timer} alt=''/>
                        <p>3m ago</p>
                      </div>
                      <div className="flex flex-row ml-3">
                        <img src={saves} alt=''/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row my-5">
            <div className="flex flex-row text-[#388087] mb-4 w-[396px] bg-white rounded-[16px] shadow-2xl mr-2">
              <div className="flex flex-row items-center">
                <img src={covid} alt=''/>
                <div className="flex flex-col ml-9">
                  <p className="text-[#388087] font-semibold text-xl">
                    COVID-19
                  </p>
                  <p className="mt-3 font-semibold text-black">
                    Why corona never ends?
                    <br /> Let’s see how its facts
                  </p>
                  <div className="flex flex-row mt-14">
                    <div className="flex flex-row">
                      <img className="mr-1" src={finger} alt=''/>
                      <p>2.1k</p>
                    </div>
                    <div className="flex flex-row ml-3.5">
                      <img className="mr-1" src={timer} alt=''/>
                      <p>3m ago</p>
                    </div>
                    <div className="flex flex-row ml-3">
                      <img src={saves} alt=''/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row text-[#388087] mb-4 w-[396px] bg-white rounded-[16px] shadow-2xl mr-2">
              <div className="flex flex-row items-center">
                <img src={covid} alt=''/>
                <div className="flex flex-col ml-9">
                  <p className="text-[#388087] font-semibold text-xl">
                    COVID-19
                  </p>
                  <p className="mt-3 font-semibold text-black">
                    Why corona never ends?
                    <br /> Let’s see how its facts
                  </p>
                  <div className="flex flex-row mt-14">
                    <div className="flex flex-row">
                      <img className="mr-1" src={finger} alt=''/>
                      <p>2.1k</p>
                    </div>
                    <div className="flex flex-row ml-3.5">
                      <img className="mr-1" src={timer} alt=''/>
                      <p>3m ago</p>
                    </div>
                    <div className="flex flex-row ml-3">
                      <img src={saves} alt=''/>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="bg-[#0D253C] flex flex-row text-[#388087] w-[396px] rounded-[16px] shadow-2xl z-20"> */}
            <div className="w-[396px] bg-[#0D253C] rounded-[16px] opacity-70 h-auto z-30">
              <div className="flex flex-row text-[#388087] mb-4 w-[396px] rounded-[16px]  shadow-2xl mr-2 bg-white">
                <div className="flex z-20 flex-row items-center">
                  <img className="z-0" src={covid} alt=''/>
                  <div className="flex flex-col ml-9">
                    <p className="text-[#388087] font-semibold text-xl">
                      COVID-19
                    </p>
                    <p className="mt-3 font-semibold text-black">
                      Why corona never ends?
                      <br /> Let’s see how its facts
                    </p>
                    <div className="flex flex-row mt-14">
                      <div className="flex flex-row">
                        <img className="mr-1" src={finger} alt=''/>
                        <p>2.1k</p>
                      </div>
                      <div className="flex flex-row ml-3.5">
                        <img className="mr-1" src={timer} alt=''/>
                        <p>3m ago</p>
                      </div>
                      <div className="flex flex-row ml-3">
                        <img src={saves} alt=''/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center mt-20 mb-20">
          <button className="items-center w-96 text-[#388087] h-16 opacity-90 rounded  solid border bg-[#5282FF17]">
            {" "}
            Load another 30+ category{" "}
          </button>
        </div>
      </div>
      {/* </div> */}
      <NewFooter />
    </>
  );
};
export default Article;
