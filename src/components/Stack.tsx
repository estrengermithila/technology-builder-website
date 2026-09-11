import { FaXmark } from "react-icons/fa6";
import type { technologyType } from "./type";


export interface StackProps {
  technologies: technologyType[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const Stack = ({
  technologies,
  onRemove,
  onRemoveAll,
}: StackProps) => {

  return (
    <div className="bg-white border border-base-200 rounded-2xl p-5 shadow-sm">
      <h2 className="text-xl font-bold text-gray-800">
        Your Stack
      </h2>
      <p className="text-sm text-gray-400 mt-1">
        {technologies.length} Technology
        {technologies.length !== 1 && "ies"} Selected
      </p>
      <div className="mt-4 space-y-2">
        {technologies.map((technology) => (
          <div
            key={technology.id}
            className="border border-gray-200 rounded-lg p-3 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">

              <img
                src={technology.icon}
                alt={technology.name}
                className="w-9 h-9 object-contain"
              />
              <div>

                <h3 className="text-sm font-semibold text-gray-800">
                  {technology.name}
                </h3>
                <p className="text-[9px] text-gray-400">
                  {technology.category}
                </p>

              </div>

            </div>
            <button
              onClick={() => onRemove(technology.id)}
              className="text-gray-400 hover:text-red-500 transition-colors"
            >
              <FaXmark className="text-lg" />
            </button>
          </div>
        ))}

      </div>
      {technologies.length > 0 && (
        <button
          onClick={onRemoveAll}
          className="btn btn-outline btn-error w-full mt-6"> Remove All
        </button>
      )}

    </div>
  );
};

export default Stack;