import Image from 'next/image';

const ChefCard = ({ title, imgUrl, desc }: any) => {
  console.log(imgUrl);
  return (
    <div className='flex flex-col gap-y-2 justify-center items-center'>
      <Image width={270} height={340} src={imgUrl} alt={title} />

      <h4 className='text-yellow-500 font-bold capitalize mt-2'>{title}</h4>

      <p className='text-neutral-700 font-semibold leading-relaxed text-center w-2/3'>
        {desc}
      </p>
    </div>
  );
};

export default ChefCard;
