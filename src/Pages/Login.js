import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Ensure useNavigate is imported and initialized

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log("Submitting form...");

      const response = await axios.get("http://localhost:3000/users/login");

      if (response.status !== 200) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = response.data;
      console.log("Data:", data);

      const user = data.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        console.log("Login successful!");
        localStorage.setItem("role", user.role);

        switch (user.role) {
          case "Admin":
            navigate("/Statistics");
            break;
          case "Patient":
            navigate("/Records");
            break;
          case "PCP":
            navigate("/ViewPatient");
            break;
          default:
            break;
        }
      } else {
        setError("Invalid email, password");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("An error occurred while processing your request");
    }

    setLoading(false);
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 mt-20 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm shadow-md rounded-md p-10">
          <h1 className="flex justify-center text-5xl gap-2 text-primary">
            CardioMatic
          </h1>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>

          <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
            <div>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full rounded-md outline-none border-0 py-1.5 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
            </div>

            <div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded-md outline-none border-0 py-1.5 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
            </div>

            {error && <div className="text-red-600 text-sm">{error}</div>}

            <div>
              <button
                type="submit"
                disabled={loading}
                className={`flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                  loading && "opacity-50 cursor-not-allowed"
                }`}
              >
                {loading ? "Signing in..." : "Sign in"}
              </button>
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-gray-500">
            Not a member?{" "}
            <Link
              to="/signup"
              className="font-semibold leading-6 text-primary hover:text-sky-500"
            >
              Create new account
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
