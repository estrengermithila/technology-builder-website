import { Suspense } from "react"
import Banner from "./components/Banner"
import Navbar from "./components/Navbar"
import Technologies from "./components/Technologies"
import type { technologyType } from "./components/type"

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
      <Suspense fallback={<p>Loading Technologies.....</p>}>
        <Technologies useTechnologyPromise={useTechnologyPromise()}></Technologies>
      </Suspense>
    </>
  )
}

export default App
