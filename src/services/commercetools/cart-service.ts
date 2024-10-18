import { CT_BASE_URLS, CT_CLIENT_CREDENTIALS } from '../../utils/clientCredentials';
import { CART_ID } from '../../utils/constants';

const cartUrl = CT_BASE_URLS.CT_HOST + '/' + CT_CLIENT_CREDENTIALS.PROJECT_KEY + '/carts';

const cartId = CART_ID;

export const getCart = async (token: string) => {
    try {
      console.log('Cart URL:', cartUrl);
      const response = await fetch(cartUrl+'/'+cartId+'?expand=lineItems[*].price.discounted.discount.id', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to get cart');
      }

      const cartData = await response.json();
      console.log('Cart retrieved successfully:', cartData);
      return cartData;
    } catch (error) {
      console.error('Error retrieving cart:', error);
    }
  };