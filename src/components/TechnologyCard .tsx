import { FaStar } from "react-icons/fa";
import type { technologyType } from "./type";


const TechnologyCard  = ({ technology,handleStackTechnology }: {technology:technologyType, handleStackTechnology: (technology: technologyType) => void}) => {
  console.log(technology)
  
// const handleStackTechnology = ()=>{

//   toast.success('Add To Stack Successfully', {
// position: "top-center",
// autoClose: 5000,
// hideProgressBar: false,
// closeOnClick: false,
// pauseOnHover: true,
// draggable: true,
// progress: undefined,
// theme: "light",

// });
// }
     return (
    <div className="card bg-base-100 border border-base-200 shadow-sm hover:shadow-md transition-all duration-300 w-full max-w-[500px]">
      
      <div className="card-body p-4">
        <div className="flex items-start justify-between">         
          <div className="h-9 flex items-center justify-center">
            <img
              src={technology.icon}
              alt={technology.name}
              className="w-8 h-8 object-contain"
            />
          </div>

          {technology.badge && (
            <div className="badge badge-info badge-soft text-[10px]">
              {technology.badge}
            </div>
          )}
        </div>
        <h2 className="card-title text-[15px] mt-2 text-base-content">
          {technology.name}
        </h2>
        <p className="text-[10px] leading-[15px] text-base-content/60 line-clamp-3">
          {technology.description}
        </p>
        <div className="divider my-1"></div>
        <div className="flex items-center justify-between gap-1">

          <div className="badge badge-ghost text-[9px]">
            {technology.category}
          </div>

          <span className="text-[9px] text-base-content/60">
            {technology.difficulty}
          </span>
          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-400 text-[9px]" />
            <span className="text-[10px] font-medium">
              {technology.rating}
            </span>
          </div>

        </div>
        <div className="card-actions mt-2">
          <button onClick={() => handleStackTechnology(technology)} className="btn btn-neutral btn-sm w-full text-[10px] font-normal">
            Add to Stack
          </button>
        </div>

      </div>
    </div>
  ); 
}

export default TechnologyCard ;