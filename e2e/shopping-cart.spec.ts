import { test, expect } from "@playwright/test";

test.describe("Shopping Cart Feature", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should display shopping cart feature and add item to cart", async ({ page }) => {
    await expect(page.getByText("Shopping Cart Feature App")).toBeVisible();

    // Click the add to cart button.
    await page.getByRole("button", { name: "Add to Cart" }).click();

    await expect(page.getByText("Cart Items: 1")).toBeVisible();
  });
});
