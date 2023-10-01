export interface IFoodMenu {
  id: number;
  title: string;
  pricing: number;
  desc: string;
}

export interface IFoodItemsProps {
  image: { src: string };
  variant: 'left' | 'right';
  data: IFoodMenu[];
}
