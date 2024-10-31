import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import {Theme} from "@radix-ui/themes";
import CheckoutNewCustomer from "./NewCustomer.tsx";
import i18n from "../../../../i18n.ts";
import {I18nextProvider} from "react-i18next";
import { AppProvider } from "../../../../contexts/AppContext.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router } from "react-router-dom";

const queryClient = new QueryClient();

describe("CompleteOrderNewClient Component", () => {
  test("renders without crashing", () => {
    const { getByText }: {getByText: (a:string) => Element} = render(
      <Theme>
        <AppProvider>
          <QueryClientProvider client={queryClient}>
            <Router>
              <I18nextProvider i18n={i18n}>
                <CheckoutNewCustomer />
              </I18nextProvider>
            </Router> 
          </QueryClientProvider>
        </AppProvider>
    </Theme>
    );
    expect(getByText("Complete Your Order you new client!")).toBeInTheDocument();
  });
});
