export default function Card() {
  return (
    <div className="bg-white flex flex-col justify-center items-center w-full max-w-xs sm:max-w-sm lg:max-w-xs xl:max-w-sm h-32 sm:h-40 lg:h-36 xl:h-40 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-4 sm:p-6">
      <div className="rounded-full bg-black w-8 h-8 sm:w-10 sm:h-10 lg:w-8 lg:h-8 xl:w-10 xl:h-10 mb-2 sm:mb-3"></div>
      <h1 className="text-sm sm:text-base lg:text-sm xl:text-base font-semibold text-gray-800 text-center">
        Balaji
      </h1>
    </div>
  );
}