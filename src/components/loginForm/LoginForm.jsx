import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router";
import { toast } from "react-toastify";
import { Mail, RectangleEllipsis } from "lucide-react";

function LoginForm() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  setLoading(true);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const { data } = await axios.post("/api/auth/login", { email, password });

      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("login successfully");
        navigation("/");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <section className="w-full h-[80vh] flex  items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-4/5 sm:w-3/5 md:w-1/2 lg:w-1/3 h-auto space-y-3 bg-white p-7 rounded-sm shadow-md ring-1 ring-gray-200"
        >
          <h2 className="w-full text-center text-xl capitalize font-medium">
            Login
          </h2>

          <div className="flex flex-col items-start justify-center gap-1">
            <label
              htmlFor="email"
              className="text-lg font-medium text-gray-800 "
            >
              Email
            </label>
            <div className="w-full relative">
              <input
                type="email"
                id="email"
                placeholder="Enter Your Email"
                className="w-full ring-1 ring-gray-500 rounded-sm px-3 py-2 outline-none border-none"
                value={data.email}
                onChange={(e) => {
                  setData({ ...data, email: e.target.value });
                }}
              />
              <Mail className="absolute top-1/2 -translate-y-1/2 right-2 size-5 md:size-6 text-gray-500" />
            </div>
          </div>
          <div className="flex flex-col items-start justify-center gap-1">
            <label
              htmlFor="password"
              className="text-lg font-medium text-gray-800 "
            >
              Password
            </label>
            <div className="w-full relative">
              <input
                id="password"
                type="password"
                placeholder="Enter Your Password"
                className="w-full ring-1 ring-gray-500 rounded-sm px-3 py-2 outline-none border-none"
                value={data.password}
                onChange={(e) => {
                  setData({ ...data, password: e.target.value });
                }}
              />
              <RectangleEllipsis className="absolute top-1/2 -translate-y-1/2 right-2 size-5 md:size-6 text-gray-500" />
            </div>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gray-900 text-white py-2 text-lg capitalize rounded-sm border-none outline-none hover:bg-gray-800 transition-all duration-200 ease-in-out mt-5 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="size-5 animate-spin" />
                loading...
              </>
            ) : (
              "Login"
            )}
          </button>
          <p>
            Already have an account <br />{" "}
            <Link to="/forgotPassword" className="text-blue-600 underline">
              Forgot Password
            </Link>
          </p>
        </form>
      </section>
    </>
  );
}

export default LoginForm;
