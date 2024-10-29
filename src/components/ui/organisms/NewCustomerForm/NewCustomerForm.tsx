import React from "react";
import AddressForm from "@ui/molecules/AddressForm/AddressForm.tsx";
import InputFormField from "@ui/molecules/InputFormField/InputFormField.tsx";
import {useTranslation} from "react-i18next";
import {Translation} from "@customTypes/i18n.type.ts";


const NewCustomerForm: React.FC = () => {
  const { t }: { t: Translation } = useTranslation();
  return (
      <>
          <InputFormField placeholder={ t("newCustomerForm.fields.name.placeholder")} name="name">{t("newCustomerForm.fields.name.label")}</InputFormField>
          <InputFormField placeholder={ t("newCustomerForm.fields.email.placeholder")} name="email">{t("newCustomerForm.fields.email.label")}</InputFormField>
          <InputFormField placeholder={ t("newCustomerForm.fields.phone.placeholder")} name="phone">{t("newCustomerForm.fields.phone.label")}</InputFormField>
          <h4>{t('newCustomerForm.billingAddress')}</h4>
          <AddressForm key='BillingAddressForm' formType="Billing"/>
          <h4>{t('newCustomerForm.shippingAddress')}</h4>
          <AddressForm key='ShippingAddressForm' formType="Shipping"/>
      </>
  );
};

export default NewCustomerForm;
