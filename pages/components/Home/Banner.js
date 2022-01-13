import { InformationCircleIcon } from "@heroicons/react/outline";
import { PlayIcon } from "@heroicons/react/solid";
function Banner() {
  return (
    <div className="mt-4 lg:mt-0 h-[120vh] lg:h-[100vh] max-w-[380px] lg:max-w-[1000px] xl:max-w-[1200px] mx-auto">
      <div className="lg:flex lg:justify-between items-center">
        <div className="space-y-4 text-center lg:text-left lg:w-[470px]">
          <h1 className="font-semibold text-3xl md:text-4xl xl:text-5xl">
            Discover, collect, and sell extraordinary NFTs
          </h1>
          <h2 className="font-semilight text-gray-700 text-xl lg:text-2xl lg:w-[280px]">
            on the world's first & largest NFT marketplace
          </h2>
          <div className="flex justify-evenly lg:pt-4 lg:justify-start lg:space-x-8">
            <button className="border border-blue-500 bg-blue-500 py-3 px-8 lg:px-12 rounded-xl font-bold text-white hover:bg-blue-600 hover:shadow-md active:scale-90 transform transition-150 ease-out">
              Explore
            </button>
            <button className="border py-3 px-8 lg:px-12 rounded-xl border-blue-500 font-bold text-blue-500 hover:border-blue-600 hover:shadow-md active:scale-90 transform transition-150 ease-out ">
              Create
            </button>
          </div>
        </div>
        <div className="mt-16 lg:mt-8 h-[460px] lg:h-[580px] rounded-md hover:shadow-2xl shadow-xl transform transition-200 ease-out cursor-pointer">
          <img
            className="lg:h-[500px] rounded-md object-cover mx-auto"
            src="/opensea/banner/featuredcollection.jpg"
            alt=""
          />
          <div className="flex items-center p-4 space-x-4">
            <img
              className="h-[40px]"
              src="/opensea/banner/nftcreatoricon.jpg"
            />
            <div className="flex-grow text-left">
              <p className="font-semibold">Sacred Spaces #4</p>
              <p className="text-blue-500">Jaime</p>
            </div>
            <InformationCircleIcon className="h-6" />
          </div>
        </div>
      </div>
      <div className="flex space-x-2 items-center cursor-pointer mt-8 justify-center lg:justify-start">
        <PlayIcon className="h-6 text-blue-600" />
        <p className="text-blue-600 font-bold">Learn more about OpenSea</p>
      </div>
    </div>
  );
}

export default Banner;
