type Props = {
    name: string,
    description?: string,
    stackType: "frontend" | "backend" | "infrastructure" | "tools",
}

export default function Tech({name, description, stackType}: Props) {
    const colourByStackType: Record<Props["stackType"], string> = {
        frontend: "bg-orange-800 text-slate-100",
        backend: "bg-orange-200 text-slate-800",
        infrastructure: "bg-orange-300 text-slate-800",
        tools: "bg-orange-400 text-slate-800",
    }

    const colour = colourByStackType[stackType]

    return (
        <div className={`${colour} rounded-full px-3 py-1 text-base`}>
            {name}
            {description && <span className="text-xs ps-2">{description}</span>}
        </div>
    )
}