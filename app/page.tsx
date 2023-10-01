import AboutUs from '@/components/about-us/AboutUs';
import HeroMain from '@/components/hero/HeroMain';
import MiddleBanner from '@/components/hero/MiddleBanner';

import ChefContainer from '@/components/chef/ChefContainer';
import FoodHeading from '@/components/food-menu/FoodHeading';
import FoodItems from '@/components/food-menu/FoodItems';
import { foodMenuOne } from '@/constants/foodmenu';
import MiddleHeroImgOne from '../assets/images/chef-recommended-bg-img.jpg';
import FoodMenuOne from '../assets/images/food-menu-img-one.jpg';
import MiddleHeroImgTwo from '../assets/images/popular-dishes-bg-img.jpg';

export default function Home() {
  return (
    <>
      <HeroMain />
      <AboutUs />
      <MiddleBanner
        title={'Chef Recommended'}
        desc={'Lorem ipsum dolor sit amet, consectetur adipiscing'}
        bgImage={MiddleHeroImgOne}
      />

      <FoodHeading />
      <FoodItems image={FoodMenuOne} data={foodMenuOne} variant={'right'} />

      <MiddleBanner
        title={'Popular Dishes'}
        desc={'Lorem ipsum dolor sit amet, consectetur adipiscing'}
        bgImage={MiddleHeroImgTwo}
      />

      <ChefContainer />
    </>
  );
}
