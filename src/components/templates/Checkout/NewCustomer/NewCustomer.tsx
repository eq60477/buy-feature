import React, {SyntheticEvent} from "react";
import NewCustomerForm from "@ui/organisms/NewCustomerForm/NewCustomerForm.tsx";
import {useTranslation} from "react-i18next";
import Button from "@ui/atoms/Button.tsx";
import {Translation} from "@customTypes/i18n.type.ts";
import Layout from "@ui/Layout/Layout.tsx";
import {CustomerFormElement} from "@customTypes/customer.type.ts";
import useCheckout from "../../../../hooks/useCheckout"; 
import { useNavigate } from "react-router-dom"; 

const CheckoutNewCustomer: React.FC = () => {
  const { t } : { t: Translation }= useTranslation();
  const { handleCompleteOrder, orderConfirmation, orderError } = useCheckout(); 
  const navigate = useNavigate(); 

  const handleSubmit = async (e: React.FormEvent<CustomerFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget.elements;
    const formValues =  {
        name: form.name.value,
        email: form.email.value,
        phone: form.phone.value,
        billing: {
            streetNumber: form["BillingstreetNumber"].value,
            streetName: form["BillingstreetName"].value,
            apartment: form["Billingapartment"].value,
            city: form["Billingcity"].value,
            postalCode: form["BillingpostalCode"].value,
            province: form["Billingprovince"].value
        },
        shipping: {
            streetNumber: form["ShippingstreetNumber"].value,
            streetName: form["ShippingstreetName"].value,
            apartment: form["Shippingapartment"].value,
            city: form["Shippingcity"].value,
            postalCode: form["ShippingpostalCode"].value,
            province: form["Shippingprovince"].value
        }
    };
    console.log("formValues = ", formValues)
    try {
      const order = await handleCompleteOrder();
      console.log("TRUE FROM NEW CUSTOMER ", order);
      navigate("/confirmation", { state: { orderConfirmation: order } });
    } catch (error) {
      console.log("FALSE FROM NEW CUSTOMER ", error);
      navigate("/confirmation", { state: { orderError: "There was an error submitting the order." } });
    }
  };
  return (
      <>
          <form onSubmit={handleSubmit}>
              <Layout
                mainComponentTitle="Complete Your Order you new client!"
                  mainComponent={
                    <NewCustomerForm/>
                  }
                  sidebarComponent={
                  <>
                    <h2>{t('orderSidebarTitle')}</h2>
                    <Button
                      title={t("completeOrderNewClient.submitButton")}
                      type="submit"
                      className="Button"
                      style={{ marginTop: 20 }}
                    />
                  </>
                    }
                />
          </form>
      </>
    );
};

export default CheckoutNewCustomer;
