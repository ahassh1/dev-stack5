import type { ItechType } from "../../types/TechType";
import TechnologyCard from "./TechnologyCard";


interface ExploreTechnologyProps {
  technologies: ItechType[];
  handleAddToSelect: (technology:ItechType) => void
}


const ExploreTechnology = ({ technologies, handleAddToSelect }: ExploreTechnologyProps) => {
  return (
    <div className="grid grid-cols-1 gap-3 mt-8 md:grid-cols-2 lg:grid-cols-3">
      {technologies.map((technology: ItechType) => {
        return (
          <TechnologyCard
            key={technology.id}
            technology={technology}
            handleAddToSelect={handleAddToSelect}
          />
        );
      })}
    </div>
  );
};

export default ExploreTechnology;
