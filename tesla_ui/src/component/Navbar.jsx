import video from "../assets/video/banner_video.mp4";
import { BsQuestionCircle } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { useState } from "react";

const Navbar = () => {
  const [hoverItem, sethoverItem] = useState(null);
  

  const handleMouseEnter = (item) => {
    sethoverItem(item);
  };

  const handleMouseLeave = () => {
    sethoverItem(null);
  };

  return (
    <>
      <div className={`relative`}>
        <video
          className="max-h-[740px] w-full object-cover "
          src={video}
          autoPlay
          muted
          loop
        ></video>
        {hoverItem && (
          <div className="fixed top-0 right-0 left-0 bottom-0 w-full h-full bg-[rgba(0,0.3,0.2,0.9)]"></div>
        )}
        <div
          // onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`absolute top-0 w-full transition-all ease-in-out duration-300 delay-100 ${
            hoverItem
              ? "absolute top-0 left-0 pb-10 w-full max-h-[560px] bg-white text-black z-10 "
              : " text-white "
          }`}
        >
          <div className="grid grid-cols-12 gap-4 mt-10">
            <div className="flex text-base sm:text-4xl tracking-widest col-span-2 justify-center items-center uppercase">
              Tesla
            </div>
            <div className="col-start-5 col-span-4">
              <ul className="flex justify-between items-center font-bold ">
                <li
                  onMouseEnter={()=>handleMouseEnter("Vehicles")}
                  
                >
                  Vehicles
                </li>
                <li onMouseEnter={()=>handleMouseEnter("Energy")}>Energy</li>
                <li>Charging</li>
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

          <div className={`${hoverItem ? "hidden" : "block"}`}>
            <h1 className="w-full text-center text-4xl mt-10 tracking-widest font-bold">
              Model Y
            </h1>
            <div className="w-full text-center tracking-widest mt-5 text-lg">
              Lease starting at $399/mo*
            </div>
          </div>

          {hoverItem =="Vehicles" && (
            <div className="flex mt-[80px] transition-all ease-in-out duration-300 delay-100  ">
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

      {hoverItem =="Energy" && (
            <div className="flex mt-[80px]">
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

          
        </div>
      </div>
    </>
  );
};

export default Navbar;
