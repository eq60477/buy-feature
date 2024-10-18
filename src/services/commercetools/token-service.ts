import { CT_BASE_URLS, CT_CLIENT_CREDENTIALS } from '../../utils/clientCredentials';

export const fetchAccessToken = async () => {
    try {
      const response = await fetch(CT_BASE_URLS.AUTH_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + btoa(`${CT_CLIENT_CREDENTIALS.CLIENT_ID}:${CT_CLIENT_CREDENTIALS.CLIENT_SECRET}`)
        },
        body: new URLSearchParams({
          grant_type: 'client_credentials'
        })
      });

      if (!response.ok) {
        throw new Error('Failed to fetch access token');
      }

      const data = await response.json();
        console.log('Access token fetched successfully:', data.access_token);
      return data.access_token;
    } catch (error) {
      console.error('Error fetching access token:', error);
    }
  };