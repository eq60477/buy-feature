import React from "react";
import { render } from "@testing-library/react";
import NewCustomerForm from "./NewCustomerForm.tsx";
import "@testing-library/jest-dom";
import {Theme} from "@radix-ui/themes";
import i18n from "../../../../i18n.ts";
import {I18nextProvider} from "react-i18next";

describe("New Customer form Component", () => {
  test("renders without crashing", () => {
    const { getByText } = render(
        <Theme>
          <I18nextProvider i18n={i18n}>
            <NewCustomerForm />
          </I18nextProvider>
        </Theme>
    );
    expect(getByText("Name" as any)).toBeInTheDocument();
  });
});
