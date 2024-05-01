import { useState } from "react";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Fetching data from a JSON file (assuming the JSON structure has 'email' and 'password' fields)
      const response = await fetch("/src/Assets/data.json"); // Adjust the path as needed
      const data = await response.json();

      // Verifying email and password
      const user = data.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        // Success: Do something (e.g., redirect)
        console.log("Login successful!");
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("An error occurred while processing your request");
    }

    setLoading(false);
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm shadow-md rounded-md p-6">
          <h1 className="flex justify-center text-5xl gap-2 text-primary">
            Pulse
          </h1>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign up to your account
          </h2>

          <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md outline-none border-0 py-1.5 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900 "
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="/"
                    className="font-semibold text-primary hover:text-sky-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className=" block w-full rounded-md outline-none border-0 py-1.5 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>
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
            <a
              href="/"
              className="font-semibold leading-6 text-primary hover:text-sky-500"
            >
              Create new account
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
