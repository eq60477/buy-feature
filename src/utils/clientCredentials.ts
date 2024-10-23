<<<<<<< HEAD
export const CT_CLIENT_CREDENTIALS: {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  PROJECT_KEY: string;
} = {
  CLIENT_ID: process.env.PUBLIC_CT_CLIENT_ID || "default-client-id",
  CLIENT_SECRET: process.env.PUBLIC_CT_CLIENT_SECRET || "default-client-secret",
  PROJECT_KEY: process.env.PUBLIC_CT_PROJECT_KEY || "default-project-key"
};

export const CT_BASE_URLS: { CT_HOST: string; AUTH_URL: string } = {
  CT_HOST: process.env.PUBLIC_CT_HOST || "default-ct-host",
  AUTH_URL: process.env.PUBLIC_AUTH_URL || "default-auth-url"
};

export const CONTENTSTACK_CREDENTIALS: {
  API_KEY: string;
  DELIVERY_TOKEN: string;
  ENVIRONMENT: string;
} = {
  API_KEY: process.env.PUBLIC_CONTENTSTACK_API_KEY || "default-api-key",
  DELIVERY_TOKEN:
    process.env.PUBLIC_CONTENTSTACK_DELIVERY_TOKEN || "default-delivery-token",
  ENVIRONMENT:
    process.env.PUBLIC_CONTENTSTACK_ENVIRONMENT || "default-environment"
};
=======
export const CT_CLIENT_CREDENTIALS : any = {
  CLIENT_ID: process.env.PUBLIC_CT_CLIENT_ID,
  CLIENT_SECRET: process.env.PUBLIC_CT_CLIENT_SECRET,
  PROJECT_KEY: process.env.PUBLIC_CT_PROJECT_KEY,
}

export const CT_BASE_URLS : any = {
  CT_HOST: process.env.PUBLIC_CT_HOST,
  AUTH_URL: process.env.PUBLIC_AUTH_URL,
}
>>>>>>> 95e4da0 (fix: removed all hard coded secrets)
