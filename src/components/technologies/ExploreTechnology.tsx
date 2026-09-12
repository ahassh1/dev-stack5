import React from "react";

import type { ItechType } from "../../types/TechType";
import TechnologyCard from "./technologyCard";

interface ExploreTechnologyProps {
  technologies: ItechType[];
}

const ExploreTechnology = ({ technologies }: ExploreTechnologyProps) => {
  return (
    <div className="grid grid-cols-1 gap-3 mt-8 md:grid-cols-2 lg:grid-cols-3">
      {technologies.map((technology: ItechType) => {
        return (
          <TechnologyCard
            key={technology.id}
            technology={technology}
          />
        );
      })}
    </div>
  );
};

export default ExploreTechnology;
