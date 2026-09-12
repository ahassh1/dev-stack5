import { Suspense } from "react"
import Banner from "./components/Banner"
import Navbar from "./components/Navbar"
import Technologies from "./components/technologies/Technologies"
import type { ItechType } from "./types/TechType"


 const technologyfetch = async (): Promise<ItechType[]> =>{
  const res = await fetch("/technologyData.json")
  const data = await res.json()
  return data
 }
function App() {
  const technologyPromise = technologyfetch() 
    return (
    <>
     <Navbar/>
     <Banner/>
    <Suspense fallback={<h1>Lodding...</h1>}>
       <Technologies technologyPromise={technologyPromise}/>
    </Suspense>
    </>
  )
}
export default App