import ButtonPrimary from '../button/ButtonPrimary';

const HeroMain = () => {
  return (
    <div className="bg-[url('./../assets/images/hero-img.jpg')] bg-no-repeat bg-cover max-w-full h-screen md:h-[calc(100vh-93px)]">
      <div className='container  flex flex-col justify-center h-full gap-y-6'>
        <h1 className='text-white font-lobster text-3xl md:text-6xl font-bold'>
          Welcome to
        </h1>
        <h1 className='text-yellow-500 uppercase text-3xl md:text-6xl font-[800]'>
          GRAND RESTAURANT
        </h1>
        <p className='text-white w-full md:w-1/2 leading-loose'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna Risus.
        </p>
        <ButtonPrimary title='Order Now' />
      </div>
    </div>
  );
};

export default HeroMain;
