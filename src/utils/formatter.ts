export function formatPrice(price: number): string {
    return `$${price.toFixed(2)}`;
}

export function getMonthlyExpiryDate(){
    return new Date(new Date().setMonth(new Date().getMonth() + 1)).toLocaleDateString()
 }