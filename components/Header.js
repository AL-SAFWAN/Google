import Avatar from "./Avatar";
import { ViewGridIcon, MicrophoneIcon } from "@heroicons/react/solid";
function Header() {
  return (
    <header className=" flex w-full p-5 justify-between text-sm text-gray-700">
      <div className="flex space-x-4">
        <p className="link">About</p>
        <p className="link">Store</p>
      </div>
      <div className="flex space-x-4">
        <p className="link">Gmail</p>
        <p className="link">Images</p>
        <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
        <Avatar url="https://lh3.googleusercontent.com/-9ieZ5JYxRQA/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucky9hy0FxsYfg5ETadAGXDz1vpM4Q/photo.jpg?sz=46" />
      </div>
    </header>
  );
}

export default Header;
