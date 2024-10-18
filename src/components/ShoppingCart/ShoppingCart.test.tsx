import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ShoppingCart from "./ShoppingCart";
import "@testing-library/jest-dom";

describe("ShoppingCart Component", () => {
  const setup = (items = []) =>
    render(<ShoppingCart data={{ lineItems: [], totalPrice: { centAmount: 0 }, discount: { centAmount: 0 }, tax: { centAmount: 0 } }} onRemove={() => {}} onAdd={() => {}} />);

  test("renders ShoppingCart component", () => {
    setup();
    expect(screen.getByText("Your cart is empty")).toBeInTheDocument();
  });
});
