import { Dispatch, SetStateAction } from "react";
import { clearItemFromStorage } from "../lib/storage";

interface Props {
  loggedIn: boolean;
  setLoggedIn: Dispatch<SetStateAction<boolean>>;
}

function Nav({ loggedIn, setLoggedIn }: Props) {
  const handleSignOut = (e: React.SyntheticEvent) => {
    e.preventDefault();
    clearItemFromStorage("token");
    clearItemFromStorage("userId");
    setLoggedIn(false);
  };
  return (
    <header className="w-full absolute flex items-center top-0 z-10 h-20 border-b border-gray-300">
      <div className="flex items-center justify-between w-full h-full px-10">
        <h1 className="text-xl font-semibold text-white">FileStore</h1>
        {loggedIn ? (
          <button
            onClick={(e) => handleSignOut(e)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Sign Out
          </button>
        ) : null}
      </div>
    </header>
  );
}

export default Nav;
