

export interface CustomerElements extends HTMLFormControlsCollection {
    name: HTMLInputElement;
    email: HTMLInputElement;
    phone: HTMLInputElement;
    BillingstreetNumber: HTMLInputElement;
    BillingstreetName: HTMLInputElement;
    Billingapartment: HTMLInputElement;
    Billingcity: HTMLInputElement;
    BillingpostalCode: HTMLInputElement;
    Billingprovince: HTMLInputElement;
    ShippingstreetNumber: HTMLInputElement;
    ShippingstreetName: HTMLInputElement;
    Shippingapartment: HTMLInputElement;
    Shippingcity: HTMLInputElement;
    ShippingpostalCode: HTMLInputElement;
    Shippingprovince: HTMLInputElement;
}

export interface CustomerFormElement extends HTMLFormElement {
    readonly elements: CustomerElements
}