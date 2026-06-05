export function externalUrl(url: string): string {
    const parsed = new URL(url);
    parsed.searchParams.set("utm_source", "ecatlin");
    return parsed.toString();
}
