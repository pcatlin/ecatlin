export interface SidebarLink {
    href: `#${string}`;
    label: string;
}

export type ProjectsMap = { [slug: string]: Project};

export type Project = {
    name: string,
    description: string,
    dt_start: Date,
    dt_end?: Date,
    colour?: string,
    tech?: Tech[],
    sidebar?: SidebarLink[],
}

export type Tech = {
    name: string,
    description?: string,
    stackType?: "frontend" | "backend" | "infrastructure" | "tools",
    primary?: boolean,
}