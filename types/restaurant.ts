export type MenuCategory = 
  | 'all'
  | 'shawarma'
  | 'sandwiches'
  | 'platters'
  | 'sides'
  | 'beverages';

export interface MenuItem {
  id: string;
  name: string;
  nameAr?: string;
  category: MenuCategory;
  price: number; // in MAD (1-50)
  description: string;
  descriptionAr?: string;
  spicyLevel?: 'mild' | 'medium' | 'hot';
  isPopular?: boolean;
  isSpecialty?: boolean;
  preparationTime?: string;
  defaultBread?: string;
  ingredients: string[];
  imagePlaceholderColor?: string;
  iconName?: string;
}

export interface CustomizationOption {
  bread?: string;
  sauces: string[];
  extras: { name: string; price: number }[];
  instructions?: string;
}

export interface CartItem {
  cartItemId: string;
  item: MenuItem;
  quantity: number;
  customization: CustomizationOption;
  unitPrice: number;
  totalPrice: number;
}

export interface CustomerOrderDetails {
  customerName: string;
  phoneNumber: string;
  serviceType: 'takeaway' | 'dinein';
  pickupTime: string;
  notes?: string;
}

export interface ConfirmedOrder {
  orderId: string;
  timestamp: string;
  customer: CustomerOrderDetails;
  items: CartItem[];
  subtotal: number;
  total: number;
  estimatedMinutes: number;
}
