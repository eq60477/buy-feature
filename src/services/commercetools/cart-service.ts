import { CT_BASE_URLS, CT_CLIENT_CREDENTIALS } from '../../utils/clientCredentials';
import { CART_ID, ERROR_MESSAGES } from '../../utils/constants';

const cartUrl = CT_BASE_URLS.CT_HOST + '/' + CT_CLIENT_CREDENTIALS.PROJECT_KEY + '/carts';
const cartId = CART_ID;

export const getCart = async (token: string) => {
    try {
      const response = await fetch(cartUrl+'/'+cartId+'?expand=lineItems[*].price.discounted.discount.id', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        if(response.status === 404){
            throw new Error(ERROR_MESSAGES.CART_NOT_FOUND)
        }
        throw new Error(ERROR_MESSAGES.CART_FAILED);
      }

      const cartData = await response.json();
      return cartData;
    } catch (error) {
      throw error;
    }
  };

export const removeLineItem = async (token: string, itemId: string, cartVersion: number) => {
  console.log("version ", cartVersion);
    try {
      const response = await fetch(cartUrl+'/'+cartId, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          version: cartVersion,
          actions: [
            {
              action: 'removeLineItem',
              lineItemId: itemId
            }
          ]
        })
      });

      if (!response.ok) {
        throw new Error(ERROR_MESSAGES.REMOVE_ITEM_FAILED);
      }

      return response;
    } catch (error) {
      throw error;
    }
  }