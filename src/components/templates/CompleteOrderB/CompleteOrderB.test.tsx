import React from "react";
import { render } from "@testing-library/react";
import CompleteOrderB from "./CompleteOrderB";
import "@testing-library/jest-dom";

describe("CompleteOrderB Component", () => {
  test("renders without crashing", () => {
    const { getByText } = render(<CompleteOrderB />);
    expect(getByText("Complete Your Order")).toBeInTheDocument();
  });
});
