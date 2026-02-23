import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import { RectangleEllipsis, Loader2 } from "lucide-react";

function ResetPasswordForm() {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigation = useNavigate();
  const { id, token } = useParams();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(
        `api/auth/resetPassword/${id}/${token}`,
        { password },
      );
      if (data.error) {
        toast.error(data.error);
      } else {
        setPassword("");
        toast.success("password reset successfully");
        navigation("/login");
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
            Reset password
          </h2>

          <div className="flex flex-col items-start justify-center gap-1">
            <label
              htmlFor="userName"
              className="text-lg font-medium text-gray-800 "
            >
              Password
            </label>
            <div className="w-full relative">
              <input
                type="password"
                placeholder="Enter Your Password"
                className="w-full ring-1 ring-gray-500 rounded-sm px-3 py-2 outline-none border-none"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
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
                Sending...
              </>
            ) : (
              "Send"
            )}
          </button>
        </form>
      </section>
    </>
  );
}

export default ResetPasswordForm;
