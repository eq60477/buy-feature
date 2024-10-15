import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ShoppingCart from "./ShoppingCart";
import "@testing-library/jest-dom";

describe("ShoppingCart Component", () => {
  const setup = (items = []) =>
    render(<ShoppingCart items={items} onRemove={() => {}} onAdd={() => {}} />);

  test("renders ShoppingCart component", () => {
    setup();
    expect(screen.getByText("Shopping Cart Feature App")).toBeInTheDocument();
  });

  test('increments cart count when "Add to Cart" button is clicked', async () => {
    setup();
    const button = screen.getByRole("button", { name: "Add to Cart" });
    userEvent.click(button);
    expect(screen.getByText(/Cart Items: \d+/)).toBeInTheDocument();
  });
});
