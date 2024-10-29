interface Address {
    unit: String,
    streetNumber: String,
    streetName: String,
    city: String,
    province: String,
    postalCode: String,
    country: String,
}

interface NewCustomerForm {
    name: String,
    email: String,
    billingAddress: Address,
    shippingAddress: Address,
    phone: String,
}