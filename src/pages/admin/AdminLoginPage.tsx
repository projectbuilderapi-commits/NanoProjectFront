import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { loginAdmin } from "../../services/authService";
import toast from "react-hot-toast";

const AdminLoginPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      const response =
        await loginAdmin({
          email: formData.email,
          password: formData.password,
        });

      localStorage.setItem(
        "token",
        response.token
      );

      navigate(
        "/ASKadmin/dashboard"
      );

    } catch (error) {
      if(error instanceof Error){
            toast.error(`Failed to fetch projects: ${error.message}`);
          }

      setError(
        "Invalid Email or Password"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
        min-h-screen
        bg-slate-950
        flex
        items-center
        justify-center
        px-4
      "
    >
      <div
        className="
          w-full
          max-w-md
          bg-slate-900
          border
          border-slate-800
          rounded-3xl
          p-8
        "
      >
        {/* Header */}

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white">
            Admin Login
          </h1>

          <p className="text-slate-400 mt-2">
            Access your dashboard
          </p>
        </div>

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          {/* Email */}

          <div>
            <label className="block text-slate-300 mb-2">
              Email
            </label>

            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
              placeholder="admin@gmail.com"
              className="
                w-full
                bg-slate-950
                border
                border-slate-700
                rounded-xl
                px-4
                py-3
                text-white
                focus:outline-none
                focus:border-blue-500
              "
              required
            />
          </div>

          {/* Password */}

          <div>
            <label className="block text-slate-300 mb-2">
              Password
            </label>

            <input
              type="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  password: e.target.value,
                })
              }
              placeholder="********"
              className="
                w-full
                bg-slate-950
                border
                border-slate-700
                rounded-xl
                px-4
                py-3
                text-white
                focus:outline-none
                focus:border-blue-500
              "
              required
            />
          </div>

          {/* Remember Me */}

          <label className="flex items-center gap-3 text-slate-300">
            <input
              type="checkbox"
              checked={formData.remember}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  remember:
                    e.target.checked,
                })
              }
            />

            Remember Me
          </label>

          {/* Error Message */}

          {error && (
            <div
              className="
                bg-red-500/10
                border
                border-red-500
                text-red-400
                p-3
                rounded-xl
              "
            >
              {error}
            </div>
          )}

          {/* Login Button */}

          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              bg-blue-600
              hover:bg-blue-700
              py-3
              rounded-xl
              text-white
              font-medium
              transition-all
              disabled:opacity-50
              disabled:cursor-not-allowed
            "
          >
            {loading
              ? "Logging In..."
              : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginPage;