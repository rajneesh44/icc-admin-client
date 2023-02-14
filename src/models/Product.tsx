export default interface Product {
  id: string;
  name: string;
  description: string;
  images: string[];
  display_image: string;
  price: number;
  discount: number;
  quantity: number;
  sizes: string[];
  ratings: number;
  uuid: string;
}
