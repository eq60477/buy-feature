import axios from 'axios'; 
import { CT_BASE_URLS, CT_CLIENT_CREDENTIALS } from '../../utils/clientCredentials';
import { CART_ID, ERROR_MESSAGES } from '../../utils/constants';
import { fetchAccessToken } from './token-service';

const cartUrl = CT_BASE_URLS.CT_HOST + '/' + CT_CLIENT_CREDENTIALS.PROJECT_KEY + '/orders';
const cartId = CART_ID;


export const confirmOrder = async () => {
    try {
        console.log("CALLED FROM SERVICE"); 
        const token = await fetchAccessToken(); 
        const response = await axios.post(
            cartUrl, 
            {
                version: 3, 
                cart: {
                    id: CART_ID
                }
            }, 
            {
                headers: {
                  Authorization: `Bearer ${token}`,
                  'Content-Type': 'application/json'
                }
            }
        ); 
        console.log("THIS IS THE RESPONSE DATA:", response.data); 
        return response.data; 

    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            console.error("Error response:", error.response.data);
            throw new Error(`Failed to confirm the order: ${error.response.data.message}`);
        } else {
            console.error("Error:", error);
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