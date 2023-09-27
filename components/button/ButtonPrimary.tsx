const ButtonPrimary = ({ title }: any) => {
  return (
    <button
      className={`px-8 md:px-16 py-4 rounded-lg bg-yellow-500 text-white w-fit hover:bg-transparent border-2 border-transparent hover:border-yellow-500 transition-colors duration-300`}
    >
      {title}
    </button>
  );
};

export default ButtonPrimary;
