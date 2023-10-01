import { IFoodItemsProps } from '@/types/foodmenu';
import Image from 'next/image';

const FoodItems = ({ image, variant, data }: IFoodItemsProps) => {
  return (
    <section className='container flex my-8  gap-x-12 items-center'>
      {/* <Image src={image.src} alt='Food Menu' /> */}
      <div
        className={`basis-1/2 ${variant === 'right' ? '-order-1' : 'order-1'}`}
      >
        <Image width={425} height={411} src={image?.src} alt={'Food Items'} />
      </div>

      <div className='flex flex-col gap-y-6 basis-1/2'>
        {data?.map((item: any) => (
          <div className='border-b border-gray-300' key={item?.id}>
            <div className='flex items-center justify-between mb-4'>
              <h3 className='text-2xl font-semibold text-neutral-900'>
                # {item?.title}
              </h3>
              <h3 className='text-2xl font-semibold text-neutral-700'>
                $ {item?.pricing}
              </h3>
            </div>
            <div className='pb-6 w-2/3'>
              <p className='text-gray-500 leading-relaxed'>{item?.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FoodItems;
