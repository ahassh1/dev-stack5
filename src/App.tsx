import { Suspense } from "react";

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
  const technologyPromise = technologyfetch();

  return (
    <>
      <Navbar />
      <Banner />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Technologies technologyPromise={technologyPromise} />
      </Suspense>
      <Footer/>
    </>
  );
}

export default App;