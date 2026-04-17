import {expect, test} from "@playwright/test";

test("root page loads and contains h1 content", async ({page}) => {
    const response = await page.goto("/");

    expect(response).not.toBeNull();
    expect(response?.status()).toBe(200);
    await expect(page.getByRole("heading", {level: 1, name: /Paul Catlin/i})).toBeVisible();
});

test("projects page loads and has more than five project cards", async ({page}) => {
    const response = await page.goto("/projects");

    expect(response).not.toBeNull();
    expect(response?.status()).toBe(200);
    await expect(page.getByRole("heading", {level: 1, name: "Projects"})).toBeVisible();
    const cards = page.locator("section article");
    expect(await cards.count()).toBeGreaterThan(5);
});

test("cashback python project page loads and shows Tech Stack", async ({page}) => {
    const response = await page.goto("/projects/cashback-python");

    expect(response).not.toBeNull();
    expect(response?.status()).toBe(200);
    await expect(page.getByRole("heading", {name: "Tech Stack"})).toBeVisible();
});

test("unknown project route returns 404", async ({page}) => {
    const response = await page.goto("/projects/not-here");

    expect(response).not.toBeNull();
    expect(response?.status()).toBe(404);
    await expect(page.getByText(/(404|not found|could not be found)/i)).toBeVisible();
});
