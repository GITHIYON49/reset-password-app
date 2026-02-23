import { useNavigate } from "react-router";

function Navbar() {
  const navigation = useNavigate();
  return (
    <>
      <header className="w-full bg-gray-900 h-20 text-gray-100 flex items-center justify-center">
        <nav className="w-11/12 mx-auto flex items-center justify-between">
          <h2 className="text-lg md:text-xl font-semibold capitalize tracking-wide">
            Password Reset
          </h2>
          <div className="space-x-5 text-gray-800 font-medium">
            <button
              onClick={() => {
                navigation("/register");
              }}
              className="px-4 py-1.5 md:px-5 md:py-1.5 text-sm md:text-base bg-gray-50 rounded-md cursor-pointer  outline-none hover:bg-gray-900 hover:text-white hover:border-2 hover:border-white transition-all duration-200 ease-in-out active:scale-105"
            >
              Register
            </button>
            <button
              onClick={() => {
                navigation("/login");
              }}
              className="px-4 py-1.5 md:px-5 md:py-1.5 text-sm md:text-base bg-gray-50 rounded-md cursor-pointer  outline-none hover:bg-gray-900 hover:text-white hover:border-2 hover:border-white transition-all duration-200 ease-in-out active:scale-105"
            >
              Login
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
