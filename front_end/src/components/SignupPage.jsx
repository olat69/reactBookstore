import { useState } from "react";
import image from "../assets/logo1.jpg";

const SignupPage = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(inputs));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-4xl w-full p-6 lg:p-12 gap-16">
        <img
          src={image}
          alt="logo"
          className="w-full lg:w-1/2 h-auto lg:h-3/4 rounded-lg mb-6 lg:mb-0"
        />

        <form
          onSubmit={handleSubmit}
          className="flex flex-col text-2xl items-center font-primary gap-6 w-full lg:w-1/2"
        >
          <h1 className="text-4xl mb-6">Register</h1>
          <label className="w-full">
            Create Username:
            <input
              className="w-full py-2 pl-2 text-xl mt-2 rounded-md"
              type="text"
              name="username"
              value={inputs.username || ""}
              onChange={handleChange}
            />
          </label>

          <label className="w-full mt-4">
            Create Password:
            <input
              className="w-full py-2 pl-2 text-xl mt-2 rounded-md"
              type="password"
              name="password"
              value={inputs.password || ""}
              onChange={handleChange}
            />
          </label>

          <button
            type="submit"
            className="mt-6 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Create Account
          </button>

          <a
            href="/Login"
            className="mt-4 text-sm text-blue-500 hover:underline"
          >
            Already have an account?
          </a>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
