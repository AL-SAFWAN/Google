import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import Avatar from "../FrontPage/Avatar";
import HeaderOptions from "./HeaderOptions";
function Header() {
  const router = useRouter();
  const inputRef = useRef();

  const search = (e) => {
    e.preventDefault();
    const { value } = inputRef.current;
    if (!value) return;
    router.push(`/search?term=${value}`);
  };
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          onClick={() => router.push("/")}
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          height={40}
          width={120}
          className="cursor-pointer"
        />
        <form className="flex flex-grow px-6 py-3 ml-10 mr-5 max-w-3xl border border-gray-300 rounded-full shadow-lg items-center">
          <input
            ref={inputRef}
            type="text"
            className="flex-grow w-full focus:outline-none"
          />
          <XIcon
            className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
            onClick={() => (inputRef.current.value = "")}
          />
          <MicrophoneIcon className=" mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-5 border-gray-300" />
          <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>{" "}
        <Avatar
          className="ml-auto"
          url="https://lh3.googleusercontent.com/-9ieZ5JYxRQA/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucky9hy0FxsYfg5ETadAGXDz1vpM4Q/photo.jpg?sz=46"
        />
      </div>
      <HeaderOptions />
    </header>
  );
}

export default Header;
