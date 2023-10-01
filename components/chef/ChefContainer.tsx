import { chefs } from '@/constants/chef';
import HeadingPrimary from '../heading/HeadingPrimary';
import ChefCard from './ChefCard';

const ChefContainer = () => {
  return (
    <section className='container'>
      <HeadingPrimary title={'Our chefs'} />

      <div className='flex gap-x-6 items-center'>
        {chefs.map((item) => (
          <ChefCard
            key={item.id}
            title={item.title}
            imgUrl={item.img?.src}
            desc={item.desc}
          />
        ))}
      </div>
    </section>
  );
};

export default ChefContainer;
