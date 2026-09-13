import { Suspense, useState } from "react";

import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Technologies from "./components/technologies/Technologies";

import type { ItechType } from "./types/TechType";
import Footer from "./components/Footer";

const technologyfetch = async (): Promise<ItechType[]> => {
  const res = await fetch("/technologyData.json");
  const data = await res.json();

  return data;
};

function App() {
  const [technologyPromise] = useState(() => technologyfetch())
  const [selectedTechnology, setSelectedTechnology] = useState<ItechType[]>([])
  
  const handleAddToSelect =(technology:ItechType)=>{
    setSelectedTechnology([...selectedTechnology, technology])
  }
  return (
    <>
      <Navbar />
      <Banner />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Technologies selectedTechnology={selectedTechnology} setSelectedTechnology={setSelectedTechnology} technologyPromise={technologyPromise} handleAddToSelect={handleAddToSelect}/>
      </Suspense>
      <Footer/>
    </>
  );
}

export default App;