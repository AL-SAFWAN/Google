import {
  MicrophoneIcon,
  SearchCircleIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import Image from "next/image";

function Body() {
  return (
    <form className="flex flex-col items-center mt-44 flex-grow ">
      <Image
        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        height={100}
        width={300}
      />
      <div
        className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border px-5 py-3 items-center
      sm:max-w-xl
      lg:max-w-2xl
      "
      >
        <SearchIcon className="h-5 mr-3 text-gray-500" />
        <input type="text" className="focus:outline-none flex-grow" />
        <MicrophoneIcon className="h-5  text-gray-500" />
      </div>

      <div>
        <button className="btn">Google Search</button>
        <button className="btn">I'm Feeling Lucky</button>
      </div>
    </form>
  );
}

export default Body;
