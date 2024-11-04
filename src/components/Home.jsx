import { useState, useEffect } from "react";
import video from "../assets/bgvid2.mp4";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const Home = () => {
  const [nav, setNav] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        src={video}
        type="video/mp4"
        className="object-cover w-full h-screen"
      />

      {/* Navigation */}
      <nav
        className={`${
          isSticky ? "fixed top-0 left-0 w-full bg-black/80 shadow-lg z-20" : "absolute top-0 left-0 w-full bg-black/50"
        } flex justify-between p-4 text-white transition-all duration-300`}
      >
        <div className="wrapper flex items-center">
          <h1 className="mr-2 text-2xl md:text-3xl roboto-regular-italic text-red-600">
            <span className="text-2xl md:text-5xl text-green-400">AB</span>{" "}
            <span className="text-red-600 text-3xl md:text-5xl">
              S<span className="text-[1rem] md:text-3xl">HAWARMA</span>
            </span>{" "}
            <span className="text-3xl md:text-5xl">S</span>
            <span className="text-[1rem] md:text-3xl">
              P<span className="text-green-500">O</span>T
            </span>
          </h1>
        </div>
        <ul className="hidden gap-5 text-2xl md:flex">
          <li className="hover:bg-gradient-to-r hover:from-red-500 hover:via-green-500 hover:to-red-600 transition duration-300 ease-in-out cursor-pointer p-1 px-2 rounded-lg">
            Home
          </li>
          <li className="hover:bg-gradient-to-r hover:from-red-500 hover:via-green-500 hover:to-red-600 transition duration-300 ease-in-out cursor-pointer p-1 px-2 rounded-lg">
            About
          </li>
          <li className="hover:bg-gradient-to-r hover:from-red-500 hover:via-green-500 hover:to-red-600 transition duration-300 ease-in-out cursor-pointer p-1 px-2 rounded-lg">
            Contact
          </li>
        </ul>
        <div>
          <button className="bg-green-500 hover:bg-green-400 px-4 py-2 rounded-md mr-2">Sign in</button>
        </div>
        <div className="flex md:hidden mt-2" onClick={handleNav}>
          {nav ? (
            <IoMdClose className="text-white" size={30} />
          ) : (
            <RxHamburgerMenu className="text-white" size={30} />
          )}
          {nav && (
            <ul className="text-2xl bg-black/50 z-10 text-center h-screen w-full absolute left-0 top-[4.5rem] navbar">
              <li className="hover:bg-gradient-to-r hover:from-red-500 hover:via-green-500 hover:to-red-600 transition duration-300 ease-in-out cursor-pointer p-1 px-2 rounded-lg">
                Home
              </li>
              <li className="hover:bg-gradient-to-r hover:from-red-500 hover:via-green-500 hover:to-red-600 transition duration-300 ease-in-out cursor-pointer p-1 px-2 rounded-lg">
                About
              </li>
              <li className="hover:bg-gradient-to-r hover:from-red-500 hover:via-green-500 hover:to-red-600 transition duration-300 ease-in-out cursor-pointer p-1 px-2 rounded-lg">
                Contact
              </li>
            </ul>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex justify-center top-[15rem] absolute">
        <div>
          <h1 className="text-center text-white text-3xl md:text-4xl mb-2 roboto-medium-italic">
            Savor the Best Shawarma in Town! Authentic flavors, made fresh daily.
          </h1>
          <p className="text-wrap text-white mx-4 roboto-light-italic text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quaerat itaque optio, soluta
            dolorem blanditiis ea delectus, est ipsum, veritatis et amet ut nihil fuga totam a, inventore
            atque veniam. Quaerat, molestias?
          </p>
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-10 md:mt-0 text-white relative top-[-10rem]">
        <button className="py-2 px-4 rounded-lg bg-green-500 hover:bg-green-400">Order Now</button>
        <button className="py-2 px-4 rounded-lg bg-red-600 hover:bg-red-500">Get the App</button>
      </div>
    </div>
  );
};

export default Home;
