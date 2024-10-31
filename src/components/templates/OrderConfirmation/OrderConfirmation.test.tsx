import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Theme } from "@radix-ui/themes";
import OrderConfirmation from "./OrderConfirmation";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppProvider } from "../../../contexts/AppContext";

const queryClient = new QueryClient();

describe("OrderConfirmation Component", () => {
  test("renders without crashing", () => {
    const { getByText }: { getByText: (a: string) => Element } = render(
      <Theme>
        <AppProvider>
          <QueryClientProvider client={queryClient}>
            <Router>
              <OrderConfirmation />
            </Router>
          </QueryClientProvider>
        </AppProvider>
      </Theme>
    );
    expect(getByText("Loading...")).toBeInTheDocument();
  });
});