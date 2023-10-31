import video from "../assets/home/banner_video.mp4";

const Navbar = ({title,hoverItem}) => {
 
  return (
    <>
      <section className="relative snap-start snap-always ">

        <video
          className="max-h-[200vh] w-full object-cover  "
          src={video}
          autoPlay
          muted
          loop
        ></video>
        <div className={`${hoverItem ? "none" : "block"} absolute top-[250px] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white`}>
          <h1 className="w-full text-center text-4xl mt-10 tracking-widest font-bold  ">
            {title}
          </h1>
          <div className="w-full text-center tracking-widest mt-5 text-lg">
            Lease starting at $399/mo*
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
