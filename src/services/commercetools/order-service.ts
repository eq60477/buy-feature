import { CT_BASE_URLS, CT_CLIENT_CREDENTIALS } from '../../utils/clientCredentials';
import { CART_ID, ERROR_MESSAGES } from '../../utils/constants';

const cartUrl = CT_BASE_URLS.CT_HOST + '/' + CT_CLIENT_CREDENTIALS.PROJECT_KEY + '/orders';
const cartId = CART_ID;

export const createOrderExistingCustomer = async (token: string) => {
    return Promise.resolve()
};

export const createOrderNewCustomer = async (token: string) => {

    return Promise.resolve()
};