import spot from "../assets/shawarmaSpot.jpeg";
import shawarmapic from "../assets/shawarma1.jpeg";
import secondshawarma from "../assets/shawarma2.jpeg";
import thirdshawarma from "../assets/shawarma3.jpeg";
import bg from "../assets/receta-shawarma.jpg";
import chicken from '../assets/shawarma4.jpeg';
import beef from '../assets/shawarma6.jpeg';
import sauce from '../assets/shawarma7.jpeg';
import turkey from '../assets/shawarma8.jpeg'
import fish from '../assets/shawarma9.jpeg'
import Testimonial from "./Testimonial";
import spag from '../assets/dish1.jpeg'
import mac from '../assets/dish2.jpeg'
import rice from '../assets/dish3.jpeg'
import porato from '../assets/dish4.jpeg'
import fried from '../assets/dish5.jpeg'
import kitchen1 from '../assets/kitchen1.jpeg'
import kitchen2 from '../assets/kitchen2.jpeg'
import kitchen3 from '../assets/kitchen3.jpeg'
import kitchen4 from '../assets/kitchen4.jpeg'
const About = () => {
  return (
    <div className="relative bottom-12 bg-[#3E2723] pb-[4rem]">
      {/* card section */}
      <div className="flex relative top-[-3rem] flex-wrap justify-center gap-10">
        <div className="bg-[#4e2f2a] shadow-lg shadoW transition duration-300 hover:scale-105 text-white  customRadius rounded-t-3xl w-[10rem] px-3 py-3">
          <img
            src={shawarmapic}
            alt="food"
            className="mx-4 roundedCustom w-[90px]"
          />
          <h3 className="text-center text-sm">
            {" "}
            Sed non consectetur nisi.
            <span className="text-green-500"> Aliquam erat volutpat.</span>
          </h3>
          <p className="text-[11px] text-wrap leading-2 roboto-regular bg-slate-10 customRadius  break-words w-[rem] text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            quasi repellendus laborum? Pariatur, excepturi labore tempora{" "}
          </p>
        </div>
        <div className="bg-[#4e2f2a] text-white shadoW transition duration-300 hover:scale-105 customRadius rounded-t-3xl w-[10rem] px-3 py-3">
          <img
            src={secondshawarma}
            alt="food"
            className="mx-4 roundedCustom w-[90px]"
          />
          <h3 className="text-center text-sm text-green-500">
            {" "}
            <span className="text-red-500">Sed non consectetur nisi.</span>{" "}
            Aliquam erat volutpat.
          </h3>
          <p className="text-[11px] text-wrap leading-2 roboto-regular bg-slate-10 customRadius  break-words w-[rem] text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            quasi repellendus laborum? Pariatur, excepturi labore tempora{" "}
          </p>
        </div>
        <div className="bg-[#4e2f2a] text-white shadoW transition duration-300 hover:scale-105 customRadius rounded-t-3xl w-[10rem] px-3 py-3">
          <img
            src={thirdshawarma}
            alt="food"
            className="mx-4 roundedCustom w-[90px]"
          />
          <h3 className="text-center text-sm text-green-500">
            {" "}
            Sed non consectetur{" "}
            <span className="text-red-500">Aliquam erat volutpat.</span>{" "}
          </h3>
          <p className="text-[11px] text-wrap leading-2 roboto-regular bg-slate-10 customRadius  break-words w-[rem] text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            quasi repellendus laborum? Pariatur, excepturi labore tempora{" "}
          </p>
        </div>
      </div>

      <div className="wrapper mx-2 bg-whit flex flex-wrap md:flex-nowrap justify-evenly">
        <div className="story w-[400px]">
          <h1 className="text-center mb-3 roboto-bold text-3xl text-green-500">
            OUR <span className="text-red-500">STORY</span>
          </h1>

          <p className="text-[16px] shadow-2xl  clipForText bg-[#7F4145] text-white text-wrap leading-8 roboto-regular bg-slate-10 customRadius py-6 px-6 break-words h-[30rem] w-[24rem] text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            consectetur nisi. Aliquam erat volutpat. Donec et neque at justo
            dictum dictum. Nulla facilisi. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Totam officiis placeat, harum dicta
            doloribus suscipit maxime nesciunt quae debitis eaque? Deleniti,
            dolores iste? Ad, qui! Architecto fugit incidunt, maxime pariatur
            id, nobis sequi alias magnam magni minus
          </p>

          <div className="scrores  block text-center md:mx-0 md:flex text-white gap-4 flex-wrap">
            <div className="py-2">
              <h3 className="roboto-bold text-red-500  text-2xl">300K+</h3>
              <p className="text-xs">Satisfied Client</p>
            </div>
            <div className="py-2">
              <h3 className="roboto-bold text-green-500 text-2xl">350K+</h3>
              <p className="text-xs">Happy Client</p>
            </div>
            <div className="py-2">
              <h3 className="roboto-bold text-red-500 text-2xl">100K+</h3>
              <p className="text-xs">Review Client</p>
            </div>
          </div>
        </div>
        <div className="w-[400px]">
          <img
            src={spot}
            alt="about us"
            className="w-full roundedCustom h-[430px] object-cover"
          />
        </div>
      </div>

      {/* another section */}
      <div
        className="big-wrapper mt-16 flex flex-wrap "
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "300px",
        }}
      >
        <div className="parent-wrapper flex flex-wrap  justify-center gap-5  text-white bg-black/80 w-full">
          <div className="mt-20 mx-2 md:mx-0">
            <h2 className="text-justify text-wrap text-[1.5rem] md:text-3xl w-[25rem]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Incidunt, nesciunt!
            </h2>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              explicabo accusantium deserunt.
            </p>
          </div>
          <div className=" md:mt-20">
            <button className="py-2 px-4 rounded-lg bg-green-500 hover:bg-green-400">
              Show More
            </button>
          </div>
        </div>
      </div>

      {/* our menu */}

      <div className="menu-big-wrapper">
        <div className="text-center text-3xl text-white my-3">OUR MENU</div>

        {/* MENU CONTAINER */}
        <div className="parent-conatiner flex flex-wrap justify-evenly ">
          <div className="grid grid-cols-2 gap-2 w-full  max-w-md ">
            <img
              src={shawarmapic}
              alt=""
              className="col-span-2 w-full h-[200px] object-cover rounded-md"
            />

            <div>
              <img
                src={sauce}
                alt=""
                className="w-full h-[150px] object-cover pb-3 rounded-md"
              />
              <img
                src={shawarmapic}
                alt=""
                className="col-span-2 w-full h-[150px]   object-cove rounded-md"
              />
            </div>
            <img
              src={thirdshawarma}
              alt=""
              className="w-[300px] h-[300px] object-cover rounded-md"
            />
          </div>
            
            {/* secon container */}
          <div className="containerTwo  mx-2 text-white">
            <div className="flex bg-white/10 w-[15rem] my-5 rounded-r-3xl rounded-t-3xl">
              <img src={chicken} alt="" className="rounded-full relative top-[-10px] right-3 w-20" />
              <div>
                <h3 className="text-md mb-1 mt-2 ">Chicken Shawarma</h3>
                <p className="text-xs w-[11rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>


            <div className="flex bg-white/10 w-[15rem] my-5 rounded-r-3xl rounded-t-3xl">
              <img src={beef} alt="" className="rounded-full relative top-[-10px] right-3 w-20" />
              <div>
                <h3 className="text-md mb-1 mt-2 "> Beef Shawarma</h3>
                <p className="text-xs w-[11rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
              

              
            <div className="flex bg-white/10 w-[15rem] my-5 rounded-r-3xl rounded-t-3xl">
              <img src={turkey} alt="" className="rounded-full relative top-[-10px] right-3 w-20" />
              <div>
                <h3 className="text-md mb-1 mt-2 ">Turkey Shawarma</h3>
                <p className="text-xs w-[11rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="flex bg-white/10 w-[15rem] my-5 pb-2 rounded-r-3xl rounded-t-3xl">
              <img src={fish} alt="" className="rounded-full relative top-[-10px] right-3 w-20" />
              <div>
                <h3 className="text-md mb-1 mt-2 ">Fish Shawarma</h3>
                <p className="text-xs w-[11rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div>
                <button className="py-2 px-4 rounded-lg my-5 bg-green-500 hover:bg-green-400"> Order now</button>
            </div>
          </div>
        </div>
      </div>
      <Testimonial/>

      {/* spaghettin menu */}

      <div>
        <h1 className="text-center mb-4 roboto-bold text-red-500 text-3xl">OUR <span className="text-green-500">SIDE </span>DISHES</h1>

        <div className="flex flex-col ">
            <div className="flex flex-wrap gap-6 justify-center">
            <img src={spag} alt="" className="w-[200px] md:w-[400px] h-[200px] rounded-md"  />
            <img src={fried} alt="" className=" w-[200px] h-[200px] rounded-md"  />
            <img src={porato} alt="" className=" w-[200px] h-[200px] rounded-md" />
            </div>
           <div className="flex flex-wrap mt-4 gap-6 justify-center">
           <img src={rice} alt="" className=" w-[200px] h-[200px] rounded-md" />
           <img src={mac} alt="" className=" w-[200px] h-[200px] rounded-md" />
           <img src={rice} alt=""  className=" w-[200px] md:w-[400px] h-[200px] rounded-md" />
           </div>
            
        </div>
      </div>

      {/* our kitchen */}


      <div className="kitchen-wraper">
        <div className="text-center text-3xl text-green-500 my-3 mt-10"><span className="text-red-500">OUR </span>KITCHEN</div>
        <div className="flex flex-wrap flex-col justify-center gap-5">
            <div className="flex flex-wrap justify-center gap-5 ">
                <img src={kitchen1}alt="" className="w-full md:w-[200px] h-[200px] rounded-lg"/>
                <img src={kitchen2}alt=""className="w-full md:w-[200px]  h-[200px] rounded-lg" />
                <img src={kitchen3}alt=""  className="w-full md:w-[200px]  h-[200px] rounded-lg"/>
            </div>
            <div className="flex justify-center">
                <img src={kitchen4} alt="" className="w-[300px] h-[200px] md:w-[500px] md:h-[400px] imgbord" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
