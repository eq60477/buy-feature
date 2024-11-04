import axios from 'axios'; 
import { CT_BASE_URLS, CT_CLIENT_CREDENTIALS } from '../../utils/clientCredentials';
import { CART_ID, ERROR_MESSAGES } from '../../utils/constants';
import { fetchAccessToken } from './token-service';

const cartUrl = CT_BASE_URLS.CT_HOST + '/' + CT_CLIENT_CREDENTIALS.PROJECT_KEY + '/orders';
const cartId = CART_ID;


export const confirmOrder = async (cartVersion: number, accessToken: string) => {
    try {
        // const token = await fetchAccessToken(); // Todo: change later
        const response = await axios.post(
            cartUrl, 
            {
                version: cartVersion || 0, 
                cart: {
                    id: CART_ID
                }
            }, 
            {
                headers: {
                  Authorization: `Bearer ${accessToken}`,
                  'Content-Type': 'application/json'
                }
            }
        ); 
        return response.data; 

    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            throw new Error(`Failed to confirm the order: ${error.response.data.message}`);
        } else {
            throw new Error('Failed to confirm the order'); 
        }
    }
};

export const createOrderExistingCustomer = async (token: string) => {
    return Promise.resolve()
};

export const createOrderNewCustomer = async (token: string) => {

    return Promise.resolve()
};