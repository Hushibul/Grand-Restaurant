const MiddleBanner = ({ title, desc, bgImage }: any) => {
  // This adjustment is because of next js
  const bgImageUrl = `url(${bgImage.src})`;
  return (
    <section
      className={`flex flex-col mt-36 gap-y-8 justify-center items-center min-h-[480px]  bg-no-repeat bg-cover`}
      style={{
        backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), ${bgImageUrl}`,
      }}
    >
      <h2 className='text-white font-bold font-lobster text-6xl'>{title}</h2>
      <p className='text-white text-2xl'>{desc}</p>
    </section>
  );
};

export default MiddleBanner;
