import { use, useState } from "react";
import type { technologyType } from "./type";
import TechnologyCard from "./TechnologyCard ";
import Stack from "./Stack";
import { toast } from "react-toastify";

export interface TechnologiesProps {
    useTechnologyPromise: Promise<technologyType[]>
}

const Technologies = ({ useTechnologyPromise }: TechnologiesProps) => {
    const technologies = use(useTechnologyPromise)
    console.log(technologies)


      const [selectedTechnologies, setSelectedTechnologies] =useState<technologyType[]>([]);

const handleStackTechnology = (technology:technologyType)=>{
const newStack = [...selectedTechnologies,technology]
setSelectedTechnologies(newStack)
toast.success('Add To Stack Successfully', {
position: "top-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",

});
}
 const handleRemove = (id: string) => {

    setSelectedTechnologies(
      selectedTechnologies.filter((technology) => technology.id !== id)
    );

  };
  const handleRemoveAll = () => {

    setSelectedTechnologies([]);

  };

    return (
     <div className="md:flex">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
{
    technologies.map((technology)=><TechnologyCard handleStackTechnology={handleStackTechnology} technology={technology}></TechnologyCard>)
}
        </div>


        <div>
            <Stack 
          onRemove={handleRemove}
          onRemoveAll={handleRemoveAll} technologies={selectedTechnologies}></Stack>
        </div>
     </div>
    )
}

export default Technologies;