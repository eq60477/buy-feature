import { formatPrice } from "../formatter";

describe('formatPrice', () => {
    it('should format price with two decimal places', () => {
        const price = 1234.5;
        const formattedPrice = formatPrice(price);
        expect(formattedPrice).toBe('$1234.50');
    });
});