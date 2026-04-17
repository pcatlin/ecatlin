import {describe, it, expect} from "vitest"
import {sortProjectEntries} from "@/app/projects"
import type {Project} from "@/app/types"

// --- fixtures ----------------------------------------------------------------

function project(overrides: Partial<Project> & Pick<Project, "dt_start">): Project {
    return {name: "", description: "", ...overrides}
}

const active1   = project({name: "Active Recent",       dt_start: new Date("2025-01-01")})
const active2   = project({name: "Active Older",        dt_start: new Date("2024-01-01")})
const ended_recent      = project({name: "Ended Recent",         dt_start: new Date("2023-01-01"), dt_end: new Date("2025-06-01")})
const ended_older       = project({name: "Ended Older",          dt_start: new Date("2022-01-01"), dt_end: new Date("2024-06-01")})
const ended_tie_newer_start = project({name: "Same End Newer Start", dt_start: new Date("2023-06-01"), dt_end: new Date("2024-06-01")})

function entries(map: Record<string, Project>): [string, Project][] {
    return Object.entries(map)
}

// --- tests -------------------------------------------------------------------

describe("sortProjectEntries", () => {
    it("puts active projects (no dt_end) before ended projects", () => {
        const result = sortProjectEntries(entries({ended_recent, active1}))
        const names = result.map(([slug]) => slug)
        expect(names.indexOf("active1")).toBeLessThan(names.indexOf("ended_recent"))
    })

    it("sorts multiple active projects by dt_start descending", () => {
        const result = sortProjectEntries(entries({active2, active1}))
        expect(result.map(([s]) => s)).toEqual(["active1", "active2"])
    })

    it("sorts ended projects by dt_end descending", () => {
        const result = sortProjectEntries(entries({ended_older, ended_recent}))
        expect(result.map(([s]) => s)).toEqual(["ended_recent", "ended_older"])
    })

    it("breaks dt_end ties using dt_start descending", () => {
        const result = sortProjectEntries(entries({ended_older, ended_tie_newer_start}))
        expect(result.map(([s]) => s)).toEqual(["ended_tie_newer_start", "ended_older"])
    })

    it("active projects come before ended even if active started earlier", () => {
        const old_active = project({name: "Old Active", dt_start: new Date("2010-01-01")})
        const result = sortProjectEntries(entries({ended_recent, old_active}))
        expect(result.map(([s]) => s)).toEqual(["old_active", "ended_recent"])
    })

    it("returns all entries when no limit given", () => {
        const result = sortProjectEntries(entries({active1, active2, ended_recent, ended_older}))
        expect(result).toHaveLength(4)
    })

    it("limits results when limit is provided", () => {
        const result = sortProjectEntries(entries({active1, active2, ended_recent, ended_older}), 2)
        expect(result).toHaveLength(2)
    })

    it("returns the top N entries after sorting when limited", () => {
        const result = sortProjectEntries(entries({ended_older, active2, active1, ended_recent}), 2)
        expect(result.map(([s]) => s)).toEqual(["active1", "active2"])
    })

    it("returns empty array for empty input", () => {
        expect(sortProjectEntries([])).toEqual([])
    })

    it("returns empty array when limit is 0", () => {
        expect(sortProjectEntries(entries({active1, active2}), 0)).toEqual([])
    })
})


