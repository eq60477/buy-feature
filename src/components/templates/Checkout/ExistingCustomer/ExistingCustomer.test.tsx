import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutExistingCustomer from "./ExistingCustomer";
import useCart from "../../../../hooks/useCart";
import useCheckout from "../../../../hooks/useCheckout";
import { BrowserRouter as Router  } from "react-router-dom";

jest.mock("../../../../hooks/useCart");
jest.mock("../../../../hooks/useCheckout");

describe("CheckoutExistingCustomer", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render the component without crashing", () => {
    (useCart as jest.Mock).mockReturnValue({
      cartData: { lineItems: [] },
      cartError: null,
      status: "pending",
      loading: false,
    });

    (useCheckout as jest.Mock).mockReturnValue({
      serviceNowData: { services: [] },
      serviceNowIsPending: false,
      status: "idle",
    });

    render(<Router><CheckoutExistingCustomer /></Router>);
    expect(screen.getByText("Complete Your Order")).toBeInTheDocument();
  });

  it("should throw an error if cartError is present", () => {
    const mockCartError = new Error("Cart error");

    (useCart as jest.Mock).mockReturnValue({
      cartData: null,
      cartError: mockCartError,
      status: "idle",
      loading: false,
    });

    (useCheckout as jest.Mock).mockReturnValue({
      serviceNowData: { services: [] },
      serviceNowIsPending: false,
      status: "idle",
    });

    expect(() => render(<CheckoutExistingCustomer />)).toThrow("Cart error");
  });
});