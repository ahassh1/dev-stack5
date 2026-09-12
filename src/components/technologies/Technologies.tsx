import React, { use } from "react";
import type { ItechType } from "../../types/TechType";
import ExploreTechnology from "./ExploreTechnology";
import StackTechnology from "./StackTechnology";
interface technologyProps {
  technologyPromise: Promise<ItechType[]>;
}
const Technologies = ({ technologyPromise }: technologyProps) => {
  const technologies = use(technologyPromise);
  console.log(technologies);
  return (
    <div className="bg-sky-100 py-8">
      <div className="mx-auto container px-3 md:px-0">
        <div>
          <h1 className="font-bold text-3xl my-2 md:text-4xl text-gray-700">
            Explore the {" "}
            <span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">Technologies</span>
          </h1>
          <p className="text-[11px] md:text-sm text-gray-500">Pick one technology per category to build your ideal stack.</p>
        </div>

     <div className=" flex flex-col md:flex-row gap-4 mb-2 ">
       <div className="md:w-3/4 w-full">
         <ExploreTechnology technologies={technologies} />
       </div >
       <div className="md:w-1/4 w-full md:mt-8"> 
        <StackTechnology/>
        </div> 
     </div>
      </div>
    </div>
  );
};

export default Technologies;
