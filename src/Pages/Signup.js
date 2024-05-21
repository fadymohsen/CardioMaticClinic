import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios"; // Import axios

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState("patient");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Data validation
      if (
        !firstName ||
        !lastName ||
        !age ||
        !gender ||
        !email ||
        !password ||
        !confirmPassword
      ) {
        setError("Please fill in all fields");
        setLoading(false);
        return;
      }

      if (password !== confirmPassword) {
        setError("Passwords do not match");
        setLoading(false);
        return;
      }

      // Create a user object with the form data
      const user = {
        firstName,
        lastName,
        age,
        gender,
        email,
        password,
        role,
      };

      // Send a POST request to your API endpoint
      const response = await axios.post("/api/signup", user);

      // Handle successful response
      if (response.status === 201) {
        // Redirect to sign-in page after successful submission
        navigate("/login");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("An error occurred while processing your request");
    }

    setLoading(false);
  };
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm shadow-md rounded-md p-10 space-y-6">
          <h1 className="flex justify-center text-5xl gap-2 text-primary">
            CardioMatic
          </h1>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign up to your account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <div className="mt-2">
                <input
                  id="first_name"
                  name="first_name"
                  type="text"
                  autoComplete="name"
                  placeholder="Enter your first name"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="block w-full rounded-md outline-none border-0 py-1.5 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Enter your last name"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="block w-full rounded-md outline-none border-0 py-1.5 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md outline-none border-0 py-1.5 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md outline-none border-0 py-1.5 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="mt-2">
                <input
                  id="confirm_password"
                  name="confirm_password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="Confirm your password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="block w-full rounded-md outline-none border-0 py-1.5 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="mt-2 flex gap-3">
              <label htmlFor="age" className="w-1/3 flex items-center">
                Birth date
              </label>
              <input
                id="age"
                name="age"
                type="date"
                autoComplete="age"
                placeholder="Enter your age"
                required
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="block w-full rounded-md outline-none border-0 py-1.5 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
            </div>

            <div>
              <div className="mt-2">
                <select
                  id="gender"
                  name="gender"
                  required
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="block w-full rounded-md outline-none border-0 py-1.5 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>

            <div>
              <select
                id="role"
                name="role"
                className="mt-2 block w-full rounded-md outline-none border-0 py-1.5 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
                <option value="admin">Admin</option>
              </select>
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
                {"Sign up"}
              </button>
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold leading-6 text-primary hover:text-sky-500"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
