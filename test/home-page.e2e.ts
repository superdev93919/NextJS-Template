import { test, expect } from "@playwright/test";

test("home page", async({ page }) => {
  await page.goto("/");

  expect(true).toBeTruthy();
});