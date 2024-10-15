export interface CartProps {
  items: CartItem[];
  onRemove: (id: string) => void;
  onAdd: (item: CartItem) => void;
}
export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}
