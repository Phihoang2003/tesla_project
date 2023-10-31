
import teslaIcon from "../assets/tesla_icon/tesla_icon.png";
import teslaBlack from "../assets/tesla_icon/tesla_black.png";
import { BsQuestionCircle } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { useState } from "react";
import Navbar from "../component/Navbar";
const Home = () => {
  const [hoverItem, sethoverItem] = useState(null);

  const handleMouseEnter = (item) => {
    sethoverItem(item);
  };

  const handleMouseLeave = () => {
    sethoverItem(null);
  };

  return (
    <>
      <div className="relative  scroll-pt-16 snap-y scroll-smooth overflow-y-scroll">
        <Navbar title="Model X" hoverItem={hoverItem} />
        <Navbar title="Model Y" hoverItem={hoverItem} />
        <Navbar title="Model Z" hoverItem={hoverItem} />
     
      
        {hoverItem && (
          <div className="fixed top-0 right-0 left-0 bottom-0 w-full h-[100vh] bg-[rgba(0,0.3,0.2,0.9)]"></div>
        )}
        <div
          // onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`fixed top-0 w-full transition-all ease-in-out duration-300 delay-100 ${
            hoverItem
              ? "fixed top-0 left-0 pb-10 w-full max-h-[560px] bg-white text-black z-10 "
              : " text-white "
          }`}
        >
           
          <div className="grid grid-cols-12 gap-4 mt-10">
            <img
              src={hoverItem ? teslaBlack : teslaIcon}
              className="ml-16 w-[168px] h-[47px] col-span-3"
            />

            <div className="col-start-5 col-span-4">
              <ul className="flex justify-between items-center font-bold ">
                <li onMouseEnter={() => handleMouseEnter("Vehicles")}>
                  Vehicles
                </li>
                <li onMouseEnter={() => handleMouseEnter("Energy")}>Energy</li>
                <li onMouseEnter={() => handleMouseEnter("Charging")}>
                  Charging
                </li>
                <li>Discover</li>
                <li>Shop</li>
              </ul>
            </div>
            <div className="ml-[3px] col-start-11 col-span-1 flex justify-between items-center text-2xl">
              <BsQuestionCircle />
              <AiOutlineGlobal />
              <BiUserCircle />
            </div>
          </div>

          {hoverItem == "Vehicles" && (
            <div
              className={`flex mt-[80px]   ${
                hoverItem == "Vehicles" ? "h-fit" : "h-0"
              }  `}
            >
              <div className="w-[60%] grid grid-cols-4 gap-2 ml-[10rem]   ">
                <div className="w-fit">
                  <img
                    className="w-[170px]"
                    src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-S.png"
                    alt=""
                  />
                  <p className="text-center text-lg tracking-widest font-bold leading-4 mt-6">
                    Model S
                  </p>
                  <div className="flex items-center justify-evenly mt-3 text-gray-400 opacity-90">
                    <div className=" underline tracking-widest left-4 text-sm">
                      Learn
                    </div>
                    <div className=" underline text-sm">Order</div>
                  </div>
                </div>
                <div className="w-fit">
                  <img
                    className="w-[170px]"
                    src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-3.png"
                    alt=""
                  />
                  <p className="text-center text-lg tracking-widest font-bold leading-4 mt-6">
                    Model S
                  </p>
                  <div className="flex items-center justify-evenly mt-3 text-gray-400 opacity-90">
                    <div className=" underline tracking-widest left-4 text-sm">
                      Learn
                    </div>
                    <div className=" underline text-sm">Order</div>
                  </div>
                </div>
                <div className="w-fit">
                  <img
                    className="w-[170px]"
                    src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-X.png"
                    alt=""
                  />
                  <p className="text-center text-lg tracking-widest font-bold leading-4 mt-6">
                    Model S
                  </p>
                  <div className="flex items-center justify-evenly mt-3 text-gray-400 opacity-90">
                    <div className=" underline tracking-widest left-4 text-sm">
                      Learn
                    </div>
                    <div className=" underline text-sm">Order</div>
                  </div>
                </div>
                <div className="w-fit">
                  <img
                    className="w-[170px]"
                    src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-Y.png"
                    alt=""
                  />
                  <p className="text-center text-lg tracking-widest font-bold leading-4 mt-6">
                    Model S
                  </p>
                  <div className="flex items-center justify-evenly mt-3 text-gray-400 opacity-90">
                    <div className=" underline tracking-widest left-4 text-sm">
                      Learn
                    </div>
                    <div className=" underline text-sm">Order</div>
                  </div>
                </div>
                <div className="w-fit">
                  <img
                    className="w-[170px]"
                    src="https://digitalassets.tesla.com/tesla-contents/image/upload/v1697244584/Mega-Menu-Vehicles-HMC-RedBlue.png"
                    alt=""
                  />
                  <p className="text-center text-lg tracking-widest font-bold leading-4 mt-6">
                    Model S
                  </p>
                  <div className="flex items-center justify-evenly mt-3 text-gray-400 opacity-90">
                    <div className=" underline tracking-widest left-4 text-sm">
                      Learn
                    </div>
                    <div className=" underline text-sm">Order</div>
                  </div>
                </div>
              </div>

              <div className="w-fit pl-16 border-l border-solid border-gray-300">
                <ul className="font-semibold">
                  <li>Inventory</li>
                  <li>Used Cars</li>
                  <li>Demo Drive</li>
                  <li>Trade-in</li>
                  <li>Help me choose</li>
                  <li>Compare</li>
                  <li>Fleet</li>
                  <li>Cybertruck</li>
                </ul>
              </div>
            </div>
          )}

          {hoverItem == "Energy" && (
            <div className="flex mt-[80px] animate-fade-down animate-once animate-duration-[3000ms] animate-delay-[1ms] animate-ease-in-out animate-fill-forwards">
              <div className="w-[60%] grid grid-cols-4 gap-2 ml-[10rem]   ">
                <div className="w-fit">
                  <img
                    className="w-[170px]"
                    src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Energy-Solar-Panels.png"
                    alt=""
                  />
                  <p className="text-center text-lg tracking-widest font-bold leading-4 mt-6">
                    Model S
                  </p>
                  <div className="flex items-center justify-evenly mt-3 text-gray-400 opacity-90">
                    <div className=" underline tracking-widest left-4 text-sm">
                      Learn
                    </div>
                    <div className=" underline text-sm">Order</div>
                  </div>
                </div>
                <div className="w-fit">
                  <img
                    className="w-[170px]"
                    src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Energy-Solar-Roof.png"
                    alt=""
                  />
                  <p className="text-center text-lg tracking-widest font-bold leading-4 mt-6">
                    Model S
                  </p>
                  <div className="flex items-center justify-evenly mt-3 text-gray-400 opacity-90">
                    <div className=" underline tracking-widest left-4 text-sm">
                      Learn
                    </div>
                    <div className=" underline text-sm">Order</div>
                  </div>
                </div>
                <div className="w-fit">
                  <img
                    className="w-[170px]"
                    src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Energy-Powerwall-US.png"
                    alt=""
                  />
                  <p className="text-center text-lg tracking-widest font-bold leading-4 mt-6">
                    Model S
                  </p>
                  <div className="flex items-center justify-evenly mt-3 text-gray-400 opacity-90">
                    <div className=" underline tracking-widest left-4 text-sm">
                      Learn
                    </div>
                    <div className=" underline text-sm">Order</div>
                  </div>
                </div>
                <div className="w-fit">
                  <img
                    className="w-[170px]"
                    src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Energy-Megapack.png"
                    alt=""
                  />
                  <p className="text-center text-lg tracking-widest font-bold leading-4 mt-6">
                    Model S
                  </p>
                  <div className="flex items-center justify-evenly mt-3 text-gray-400 opacity-90">
                    <div className=" underline tracking-widest left-4 text-sm">
                      Learn
                    </div>
                    <div className=" underline text-sm">Order</div>
                  </div>
                </div>
              </div>

              <div className="w-fit pl-16 border-l border-solid border-gray-300">
                <ul className="font-semibold">
                  <li>Inventory</li>
                  <li>Used Cars</li>
                  <li>Demo Drive</li>
                  <li>Trade-in</li>
                  <li>Help me choose</li>
                </ul>
              </div>
            </div>
          )}

          {hoverItem == "Charging" && (
            <div className="flex mt-[80px] animate-fade-down animate-once animate-duration-[3000ms] animate-delay-[1ms] animate-ease-in-out animate-fill-forwards">
              <div className="w-[60%] grid grid-cols-4 gap-2 ml-[10rem]   ">
                <div className="w-fit">
                  <img
                    className="w-[170px]"
                    src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Charging-Charging.png"
                    alt=""
                  />
                  <p className="text-center text-lg tracking-widest font-bold leading-4 mt-6">
                    Model S
                  </p>
                  <div className="flex items-center justify-evenly mt-3 text-gray-400 opacity-90">
                    <div className=" underline tracking-widest left-4 text-sm">
                      Learn
                    </div>
                    <div className=" underline text-sm">Order</div>
                  </div>
                </div>
                <div className="w-fit">
                  <img
                    className="w-[170px]"
                    src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Charging-Home-Charging.png"
                    alt=""
                  />
                  <p className="text-center text-lg tracking-widest font-bold leading-4 mt-6">
                    Model S
                  </p>
                  <div className="flex items-center justify-evenly mt-3 text-gray-400 opacity-90">
                    <div className=" underline tracking-widest left-4 text-sm">
                      Learn
                    </div>
                    <div className=" underline text-sm">Order</div>
                  </div>
                </div>

                <div className="w-fit">
                  <img
                    className="w-[170px]"
                    src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Charging-Supercharging-NA.png"
                    alt=""
                  />
                  <p className="text-center text-lg tracking-widest font-bold leading-4 mt-6">
                    Model S
                  </p>
                  <div className="flex items-center justify-evenly mt-3 text-gray-400 opacity-90">
                    <div className=" underline tracking-widest left-4 text-sm">
                      Learn
                    </div>
                    <div className=" underline text-sm">Order</div>
                  </div>
                </div>
              </div>

              <div className="w-fit pl-16 border-l border-solid border-gray-300">
                <ul className="font-semibold">
                  <li>Inventory</li>
                  <li>Used Cars</li>
                  <li>Demo Drive</li>
                  <li>Trade-in</li>
                  <li>Help me choose</li>
                </ul>
              </div>
            </div>
          )}
        
        </div>
        
    </div>
        
    </>
  );
};

export default Home;
