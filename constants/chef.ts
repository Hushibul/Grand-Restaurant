import { IChef } from '@/types/chef';
import ChefOne from '../assets/images/chef-img-1.jpg';
import ChefTwo from '../assets/images/chef-img-2.jpg';
import ChefThree from '../assets/images/chef-img-3.jpg';
import ChefFour from '../assets/images/chef-img-4.jpg';

export const chefs: IChef[] = [
  {
    id: 1,
    title: 'Park Ji Sung',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
    img: {
      src: ChefOne.src,
    },
  },
  {
    id: 2,
    title: 'Mark Angelia',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
    img: {
      src: ChefTwo.src,
    },
  },
  {
    id: 3,
    title: 'Angel Masket',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
    img: {
      src: ChefThree.src,
    },
  },
  {
    id: 4,
    title: 'John Doe',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
    img: {
      src: ChefFour.src,
    },
  },
];
