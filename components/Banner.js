import Image from "next/image";

function Banner() {
  return (
    <>
      <div className=" my-1 mx-1 relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] ">
        <Image
          src="https://links.papareact.com/0fm"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="absolute -my-32 md:-my-20 lg:-my-10 xl:-my-5 2xl:my-0 top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">Not Sure where to go? perfect.</p>
        <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150 ">
          I'm flexible
        </button>
      </div>
    </>
  );
}

export default Banner;
