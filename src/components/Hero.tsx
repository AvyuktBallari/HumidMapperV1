import React from "react";
import { Star } from "lucide-react";
import hero from '../assets/hero.png'
import { RoughNotation } from "react-rough-notation";

const HeroSection: React.FC = () => {
  const [email, setEmail] = React.useState("");
  return (
    <div>
      <div className="max-w-6xl font-cute mx-auto font-inter text-[#CFCFCF] px-6 py-12 md:py-20 lg:py-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Turn Humidity Data{" "}
            <RoughNotation
              animate={false}
              type="highlight"
              show={true}
              color="#d2cbc6"
            >
              <span className="text-[#2e1a05]"> ​ into Action.</span>
            </RoughNotation>
          </h1>
          <p className="text-lg text-gray-400 mb-8 max-w-md mx-auto md:mx-0">
          Analyze real-time moisture levels and visualize insights on an interactive map—enhancing sustainability and efficiency in agriculture.
          </p>
        
          <div className="flex flex-col gap-4 items-center md:items-start ">
            <a href="/dashboard" className="bg-[#1aff9c] text-black font-bold hover:cursor-pointer  py-3 px-6 rounded-lg md:w-2/3 w-full text-center ">
              Try it Out
            </a>
          </div>
          <hr className="md:w-2/3 w-full my-6 border-gray-400 text-center" />
          <div className="flex flex-col gap-4 items-center md:items-start">
            <div className="relative w-full md:w-2/3">
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Enter work email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none pr-24"
              />
              <a href={"/contact/"+email} className="absolute text-black top-0 right-0 bg-white px-6 py-2 rounded-r-lg h-full">
                Book a demo
              </a>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-6 relative">
            <div className="absolute inset-y-0 left-1/2 w-px bg-gray-200"></div>
          </div>

          <div className="mt-6 flex items-center gap-2">
            <div className="flex">
              {Array.from({ length: 5 }, (_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-[#CFCFCF]"
                  fill="currentColor" 
                />
              ))}
            </div>
            <p className="text-gray-400 text-sm">4.9 Average user rating</p>

          </div>
        </div>

        <div className="relative">
          <img
            src={hero}
            alt="Abstract representation of mobile app UI"
            className="rounded-lg w-full"
          />
        </div>


        
      </div>


    </div>
    </div>
  );
};

export default HeroSection;