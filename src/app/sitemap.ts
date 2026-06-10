import type {MetadataRoute} from "next";
import {buildSitemap} from "@/app/site";

export default function sitemap(): MetadataRoute.Sitemap {
    return buildSitemap();
}
