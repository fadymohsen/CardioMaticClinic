import { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";

export default function AddPatient() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [visitDate, setVisitDate] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [medicine, setMedicine] = useState("");
  const [dosage, setDosage] = useState("");
  const [frequency, setFrequency] = useState("");
  const [tests, setTests] = useState("");
  const [treatment, setTreatment] = useState("");
  const [medicalHistory, setMedicalHistory] = useState("");
  // const [error, setError] = useState("");
  // const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleBookAppointmentClick = () => {
    navigate("/home");
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   try {
  //     // Your submit logic here
  //   } catch (error) {
  //     console.error("Error submitting data:", error);
  //     setError("An error occurred while processing your request");
  //   }

  //   setLoading(false);
  // };

  return (
    <>
      <Navbar></Navbar>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-lg shadow-md rounded-md p-6">
          <h1 className="flex justify-center text-5xl gap-2 text-primary">
            Add Patient
          </h1>

          <form
            className="mt-6 space-y-6"
            onSubmit={handleBookAppointmentClick}
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full rounded-md outline-none border-0 py-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>

              <div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md outline-none border-0 py-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>

              <div>
                <input
                  id="age"
                  name="age"
                  type="date"
                  autoComplete="age"
                  placeholder="Age"
                  required
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="block w-full rounded-md outline-none border-0 py-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>

              <div>
                <select
                  id="gender"
                  name="gender"
                  required
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="block w-full rounded-md outline-none border-0 py-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              <div>
                <input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  autoComplete="tel"
                  placeholder="Mobile"
                  required
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="block w-full rounded-md outline-none border-0 py-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>

              <div>
                <input
                  id="visitDate"
                  name="visitDate"
                  type="date"
                  placeholder="Visit Date"
                  required
                  value={visitDate}
                  onChange={(e) => setVisitDate(e.target.value)}
                  className="block w-full rounded-md outline-none border-0 py-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>

              <div>
                <input
                  id="diagnosis"
                  name="diagnosis"
                  type="text"
                  autoComplete="diagnosis"
                  placeholder="Diagnosis"
                  required
                  value={diagnosis}
                  onChange={(e) => setDiagnosis(e.target.value)}
                  className="block w-full rounded-md outline-none border-0 py-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>

              <div>
                <input
                  id="medicine"
                  name="medicine"
                  type="text"
                  autoComplete="medicine"
                  placeholder="Medicine"
                  required
                  value={medicine}
                  onChange={(e) => setMedicine(e.target.value)}
                  className="block w-full rounded-md outline-none border-0 py-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>

              <div>
                <input
                  id="dosage"
                  name="dosage"
                  type="text"
                  autoComplete="dosage"
                  placeholder="Dosage"
                  required
                  value={dosage}
                  onChange={(e) => setDosage(e.target.value)}
                  className="block w-full rounded-md outline-none border-0 py-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>

              <div>
                <input
                  id="frequency"
                  name="frequency"
                  type="text"
                  autoComplete="frequency"
                  placeholder="Frequency per day"
                  required
                  value={frequency}
                  onChange={(e) => setFrequency(e.target.value)}
                  className="block w-full rounded-md outline-none border-0 py-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>

              <div>
                <input
                  id="tests"
                  name="tests"
                  type="text"
                  autoComplete="tests"
                  placeholder="Tests"
                  required
                  value={tests}
                  onChange={(e) => setTests(e.target.value)}
                  className="block w-full rounded-md outline-none border-0 py-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>

              <div>
                <input
                  id="treatment"
                  name="treatment"
                  type="text"
                  autoComplete="treatment"
                  placeholder="Treatment"
                  required
                  value={treatment}
                  onChange={(e) => setTreatment(e.target.value)}
                  className="block w-full rounded-md outline-none border-0 py-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>

              <div>
                <input
                  id="medicalHistory"
                  name="medicalHistory"
                  type="text"
                  autoComplete="medicalHistory"
                  placeholder="Medical History"
                  required
                  value={medicalHistory}
                  onChange={(e) => setMedicalHistory(e.target.value)}
                  className="block w-full rounded-md outline-none border-0 py-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {error && <div className="text-red-600 text-sm">{error}</div>}

            <div>
              <button
                type="submit"
                disabled={loading}
                className={`flex w-full justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                  loading && "opacity-50 cursor-not-allowed"
                }`}
              >
                {loading ? "Adding Patient..." : "Add Patient"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
