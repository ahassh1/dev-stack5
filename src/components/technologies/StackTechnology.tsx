import  { type Dispatch, type SetStateAction } from "react";

import type { ItechType } from "../../types/TechType";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

interface StackTechnologyProps {
  selectedTechnology: ItechType[];
  setSelectedTechnology:Dispatch<SetStateAction<ItechType[]>>
}

const StackTechnology = ({ selectedTechnology, setSelectedTechnology }: StackTechnologyProps) => {
      const handleRemoveTechnology = (technology:ItechType)=>{
        const restTechnology = selectedTechnology.filter(selectedTechnology => selectedTechnology.name != technology.name)
        setSelectedTechnology(restTechnology)
        toast.warning( `${technology.name} removed form the stack`)
      }
   if (selectedTechnology.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-sm p-4">
        <h2 className="text-xl font-bold text-gray-700">My Stack</h2>

        <p className="text-[12px] text-gray-500 mt-4">
          No technology selected yet
        </p>

        <p className="text-sm text-gray-600 text-center mt-4">
          Your stack is empty
        </p>
      </div>
    );
  }

     return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <h2 className="text-xl font-bold text-gray-700">My Stack</h2>

      <div className="mt-4 space-y-3">
        {selectedTechnology.map((technology) => (
          <div
            key={technology.id}
            className="flex items-center gap-3 border border-gray-200 rounded-lg p-3"
          >
            <img
              src={technology.icon}
              alt={technology.name}
              className="w-10 h-10 object-contain"
            />

            <div className="flex justify-between items-center w-full">
              <div>
                <h3 className="font-semibold text-gray-700">
                  {technology.name}
                </h3>

                <p className="text-xs text-gray-400">
                  {technology.category}
                </p>
              </div>

              <button
                onClick={() => handleRemoveTechnology(technology)}
                className="bg-pink-100 rounded-full cursor-pointer p-2 hover:bg-pink-200 transition"
              >
                <MdDelete className="text-pink-500 text-xl" />
              </button>
            </div>
             
          </div>
        ))}
      </div>
       <button onClick={() => {setSelectedTechnology([]) 
        toast.error("All technology are removed from the stack")
       }}
      className="btn text-pink-500 bg-white hover:bg-black hover:text-white rounded-md btn-sm w-full mt-4"
    >
      Remove All
    </button>
    </div>
  );
};
export default StackTechnology;