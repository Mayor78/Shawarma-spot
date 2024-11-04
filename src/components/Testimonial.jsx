 // Added different icons
import { useEffect, useState } from "react";
import bg from '../assets/receta-shawarma.jpg'
import john from '../assets/avatar12.jpg'
import monica from '../assets/avatar13.jpg'
import Ayo from '../assets/avatar14.jpg'
import Abraham from '../assets/avatar15.jpg'
import mayor from '../assets/avatar16.jpg'
import Magret from '../assets/avatar17.jpg'

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Carousel items with icons and images
  const carouselItems = [
    {
      title: "John Doe",
      description: "AB Shawarma is hands-down the best shawarma spot I’ve ever tried! The spices are just right, and the meat is always tender and juicy. You can taste the quality and care in every bite. The garlic sauce? Absolutely heavenly! I’m hooked for life! ",
      image: john, // Different icon
    },
    {
      title: "Abrahm Ola's",
      description: "I stopped by AB Shawarma on my lunch break, and I was blown away. Not only was the service fast, but the food was unbelievably fresh! The veggies were crisp, and the meat was perfectly seasoned. It’s my new favorite lunch spot, and I can't recommend it enough!",
     
      image: Abraham,
    },
    {
      title: "Monica",
      description: "Craving something tasty and filling late at night? Look no further than AB Shawarma! I ordered from here after a long day, and it was everything I needed. The flavors, the freshness, and the portion sizes are just perfect. A true gem in the neighborhood!",
      image: monica,
    },
    {
      title: "Ayo Olasile",
      description: "AB Shawarma took me back to my travels in the Middle East. The flavors are so authentic and rich—it’s like having a mini-vacation with every bite. Highly recommend for anyone who loves genuine Middle Eastern cuisine. You won’t be disappointed!",
      image: Ayo, // Another slide with an image
    },
    {
        title: "Mayowa Ola's",
        description: "We had a family night at AB Shawarma, and everyone was raving about it! From the kids to the grandparents, everyone found something they loved. The portions are generous, and the staff was so friendly and accommodating. AB Shawarma made our night memorable!",
        image: mayor, // Another slide with an image
      },
      {
        title: "Jesse",
        description: "AB Shawarma took me back to my travels in the Middle East. The flavors are so authentic and rich—it’s like having a mini-vacation with every bite. Highly recommend for anyone who loves genuine Middle Eastern cuisine. You won’t be disappointed!",
        image: Magret, // Another slide with an image
      },
  ];

  const totalItems = carouselItems.length;

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
    }, 6000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Clear the interval when component unmounts
  }, [totalItems]);

  return (
    <div
      className="relative w-full h-full mt-10 overflow-hidden"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "300px",
      }}
    >
      <div className="secondary-wrapper bg-black/80 w-full  h-full text-white flex flex-col items-center justify-center">
        <div className="caro p-2 text-center">
          <h1 className="text-[18px] font-bold text-white pt-3 mt-10">What Our Customers Say</h1>
        </div>
        
        {/* Carousel container */}
        <div
          className="flex transition-transform duration-1000 w-full"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {carouselItems.map((item, index) => (
            <div
              key={index}
              className="w-full  mt- flex-shrink-0 h-full flex flex-col items-center justify-center p- text-center"
              style={{ minWidth: "100%" }} // Ensures each item takes full width of the carousel container
            >
              {/* Description First */}
              <p className="text-xs md:text-sm mb-4 md:max-w-[40rem]">{item.description}</p>

              {/* Conditionally Render Icon or Image */}
              {item.image ? (
                <img src={item.image} alt={item.title} className="w-24 h-24 mb-4 bord object-cover" />
              ) : (
                <div className="mb-4">{item.icon}</div> // Display icon if no image is provided
              )}

              {/* Title */}
              <h1 className="text-lg font-semibold mb-10">{item.title}</h1>
              
              {/* Button */}
             
            </div>
          ))}
        </div>

        {/* Indicators */}
        <div className="absolute bottom-2 left-1/2 mt-6  transform -translate-x-1/2 flex space-x-2">
          {carouselItems.map((_, index) => (
            <div
              key={index}
              className={`w-6 h-1  rounded-full ${
                index === currentIndex ? "bg-white" : "bg-gray-900"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
