import {
  CT_BASE_URLS,
  CT_CLIENT_CREDENTIALS
} from "../../utils/clientCredentials";

export const fetchAccessToken = async () => {
  const { CLIENT_ID, CLIENT_SECRET } = CT_CLIENT_CREDENTIALS;
  const { AUTH_URL } = CT_BASE_URLS;
  try {
    const response = await fetch(AUTH_URL as string, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " +
          btoa(
            `${CLIENT_ID}:${CLIENT_SECRET}`
          )
      },
      body: new URLSearchParams({
        grant_type: "client_credentials"
      })
    });

    if (!response.ok) {
      throw new Error("Failed to fetch access token");
    }

    const data = await response.json();
    return data.access_token;
  } catch (error) {
    throw error;
  }
};
