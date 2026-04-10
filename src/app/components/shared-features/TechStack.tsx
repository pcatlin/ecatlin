import {Tech as TechType} from "@/app/types";
import Tech from "@/app/components/Tech";

type Props = {
    tech?:  TechType[]
}

export default function TechStack({tech}: Props) {
    const h2_classes = "text-orange-500 font-bold text-3xl mt-30 mb-10"

    return (
        <>
            <h2 className={h2_classes} id="tech-stack">Tech Stack</h2>
            <div className="flex flex-wrap gap-x-2 gap-y-3">
                {tech && tech.map(({name, description, stackType}, index) => (
                    <Tech key={index}
                          name={name}
                          description={description}
                          stackType={stackType} />
                ))}
            </div>
        </>
    )
}
