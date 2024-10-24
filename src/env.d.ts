/// <reference types="@rsbuild/core/types" />
declare namespace NodeJS {
    interface ProcessEnv {
        PUBLIC_CT_CLIENT_ID: string;
        PUBLIC_CT_CLIENT_SECRET: string;
        PUBLIC_CT_PROJECT_KEY: string;
        PUBLIC_CT_HOST: string;
        PUBLIC_AUTH_URL: string;
        PUBLIC_CONTENTSTACK_API_KEY: string;
        PUBLIC_CONTENTSTACK_DELIVERY_TOKEN: string;
        PUBLIC_CONTENTSTACK_ENVIRONMENT: string;
    }
  }