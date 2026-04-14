import {Tech as TechType} from "@/app/types";
import Tech from "@/app/components/Tech";
import styles from "@/app/styles";

type Props = {
    tech?:  TechType[]
}

export default function TechStack({tech}: Props) {
    return (
        <>
            <h2 className={styles.h2} id="tech-stack">Tech Stack</h2>
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
