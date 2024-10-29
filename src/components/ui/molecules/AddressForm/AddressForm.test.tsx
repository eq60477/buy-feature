import React from "react";
import { render } from "@testing-library/react";
import AddressForm from "./AddressForm.tsx";
import "@testing-library/jest-dom";
import {Theme} from "@radix-ui/themes";
import i18n from "../../../../i18n.ts";
import {I18nextProvider} from "react-i18next";

describe("Address form Component", () => {
  test("renders without crashing", () => {
    const { getByText } = render(
        <Theme>
          <I18nextProvider i18n={i18n}>
            <AddressForm formType="Billing" />
          </I18nextProvider>
        </Theme>
    );
    expect(getByText("Street name")).toBeInTheDocument();
  });
});
