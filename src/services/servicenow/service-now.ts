interface CustomerService {
  id: string;
  services: any[];
}

const mockData: CustomerService = {
  id: "12345",
  services: [
    {
      id: "123-3232-sssd",
      name: { "en-CA": "Bell Internet", "fr-CA": "" },
      variant: { sku: "Internet Speed" }
    }
  ]
};

export const fetchCustomerService = async (): Promise<CustomerService> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData);
    }, 100); // Simulate network delay
  });
};
