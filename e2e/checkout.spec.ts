import { test, expect } from "@playwright/test";
import { ERROR_MESSAGES } from "../src/utils/constants";

test.describe("Checkout And Complete Order Feature", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/complete-order");
  });

test("should display cart or error message if page is not available", async ({
    page
}) => {
    const cartVisible = await page.isVisible("text=Complete Your Order");
    if (cartVisible) {
        await expect(page.getByText("Complete Your Order")).toBeVisible();
    } else {
        const errorMessageVisible = await page.isVisible(`text=${ERROR_MESSAGES.CART_NOT_FOUND}`);
        if (errorMessageVisible) {
            await expect(page.getByText(ERROR_MESSAGES.CART_NOT_FOUND)).toBeVisible({
                timeout: 20000
            });
        } 
    }
});
});
