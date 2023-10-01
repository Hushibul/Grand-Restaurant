import Image from 'next/image';
import AboutUsOne from '../../assets/images/about-img-1.jpg';
import AboutUsTwo from '../../assets/images/about-img-2.jpg';

const AboutUs = () => {
  return (
    <section className='container my-20 flex gap-x-12'>
      <div className='w-1/2'>
        <div className='relative float-right'>
          <Image
            className='absolute top-20 -left-44'
            width={370}
            src={AboutUsOne}
            alt='Our work One'
          />
          <Image width={370} src={AboutUsTwo} alt='Our work Two' />
        </div>
      </div>
      <div className='w-1/2 flex flex-col gap-y-4 '>
        <h3 className='text-yellow-500 text-4xl font-lobster font-bold'>
          Welcome at
        </h3>
        <h2 className='text-black text-6xl font-bold'>Grand Restaurant</h2>
        <p className='text-gray-800 leading-relaxed'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis.
        </p>
        <p className='text-gray-800 leading-relaxed'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.
        </p>

        <h3 className='text-gray-700 pl-4 border-l-2 border-yellow-400 text-2xl mt-10'>
          About Us
        </h3>
      </div>
    </section>
  );
};

export default AboutUs;
