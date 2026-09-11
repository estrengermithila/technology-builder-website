import { Suspense } from "react"
import Banner from "./components/Banner"
import Navbar from "./components/Navbar"
import Technologies from "./components/Technologies"
import type { technologyType } from "./components/type"
import Footer from "./components/Footer"

function App() {

  const useTechnologyPromise = async():Promise<technologyType[]>=>{
    const res = await fetch('/data.json')
    const data = await res.json()
    return data;
  }

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
     <div className="lg:max-w-[1440px] md:max-w-7xl mx-auto gap-10">
       <Suspense fallback={<p>Loading Technologies.....</p>}>
        <Technologies useTechnologyPromise={useTechnologyPromise()}></Technologies>
     
      </Suspense>
      
     </div>
     <Footer></Footer>
    </>
  )
}

export default App
