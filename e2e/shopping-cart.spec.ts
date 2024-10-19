import { test, expect } from "@playwright/test";

test.describe("Shopping Cart Feature", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should display cart", async ({ page }) => {
    await expect(page.getByText("Review your Cart")).toBeVisible();
  });
});
