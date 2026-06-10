import type {MetadataRoute} from "next";
import {projects} from "@/app/projects";

export const SITE_URL = "https://www.ecatlin.com";
export const SITE_NAME = "eCatlin";

export const SITE_DESCRIPTION =
    "Portfolio of software engineering projects by Paul Catlin — React, TypeScript, Python, mobile apps, and self-hosted tools.";

export const PERSON_SAME_AS = [
    "https://github.com/pcatlin",
    "https://www.linkedin.com/in/paul-catlin-62a7983b6/",
    "https://www.youtube.com/@pcatlin",
    "https://www.instagram.com/reinstall/",
] as const;

export function absoluteUrl(path: string): string {
    return new URL(path, SITE_URL).toString();
}

export function buildSitemap(): MetadataRoute.Sitemap {
    const projectPages: MetadataRoute.Sitemap = Object.entries(projects).map(([slug, project]) => ({
        url: absoluteUrl(`/projects/${slug}`),
        lastModified: project.dt_end ?? project.dt_start,
        changeFrequency: "monthly",
        priority: 0.8,
    }));

    const privacyPages: MetadataRoute.Sitemap = Object.entries(projects)
        .filter(([, project]) => project.privacyNotice)
        .map(([slug]) => ({
            url: absoluteUrl(`/privacy-notice/${slug}`),
            changeFrequency: "yearly",
            priority: 0.3,
        }));

    return [
        {
            url: SITE_URL,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: absoluteUrl("/projects"),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: absoluteUrl("/privacy-notice"),
            changeFrequency: "yearly",
            priority: 0.4,
        },
        ...projectPages,
        ...privacyPages,
    ];
}
