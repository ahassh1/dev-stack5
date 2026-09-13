import React from "react";

import type { ItechType } from "../../types/TechType";

interface StackTechnologyProps {
  selectedTechnology: ItechType[];
}

const StackTechnology = ({
  selectedTechnology,
}: StackTechnologyProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4">

      <h2 className="text-xl font-bold text-gray-700">
        My Stack
      </h2>

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

            <div>
              <h3 className="font-semibold text-gray-700">
                {technology.name}
              </h3>

              <p className="text-xs text-gray-400">
                {technology.category}
              </p>
            </div>
          </div>
        ))}

      </div>

    </div>
  );
};

export default StackTechnology;