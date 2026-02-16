export interface HomeRestaurant {
  name: string;
  rating: number;
  reviewCount: number;
  deliveryTime: string;
  deliveryFee: string;
  avatar: string;
}

export interface HomeCategory {
  id: string;
  name: string;
  icon: string;
  active: boolean;
}
