import { use } from "react";
import type { technologyType } from "./type";

export interface TechnologiesProps {
    useTechnologyPromise: Promise<technologyType[]>
}

const Technologies = ({ useTechnologyPromise }: TechnologiesProps) => {
    const technologies = use(useTechnologyPromise)
    console.log(technologies)
    return (
        <div>

        </div>
    )
}

export default Technologies;