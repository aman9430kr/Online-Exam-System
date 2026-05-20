// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import API from "../services/api";

// function Register() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "student",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();

//     try {
//       await API.post("/auth/register", formData);

//       alert("Registration Successful ✅");

//       window.location.href = "/";
//     } catch (error) {
//       alert("Registration Failed ❌");
//       console.log(error);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white shadow-xl rounded-2xl p-8 w-[420px]">
//         <h2 className="text-3xl font-bold text-center text-green-600 mb-6">
//           Student Register
//         </h2>

//         <form onSubmit={handleRegister} className="space-y-4">
//           <input
//             type="text"
//             name="name"
//             placeholder="Enter Name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full p-3 border rounded-lg outline-none"
//           />

//           <input
//             type="email"
//             name="email"
//             placeholder="Enter Email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full p-3 border rounded-lg outline-none"
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Enter Password"
//             value={formData.password}
//             onChange={handleChange}
//             className="w-full p-3 border rounded-lg outline-none"
//           />

//           <button
//             type="submit"
//             className="w-full bg-green-600 text-white p-3 rounded-lg font-semibold hover:bg-green-700"
//           >
//             Register
//           </button>
//         </form>

//         <p className="text-center mt-4 text-gray-600">
//           Already have an account?{" "}
//           <Link
//             to="/"
//             className="text-green-600 font-semibold hover:underline"
//           >
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Register;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";

function Register() {
  const [formData, setFormData] = useState({
    studentCode: "",
    name: "",
    email: "",
    password: "",
    role: "student",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await API.post("/auth/register", formData);

      alert("Registration Successful ✅");

      window.location.href = "/";
    } catch (error) {
      alert("Registration Failed ❌");
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-[420px]">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-6">
          Student Register
        </h2>

        <form onSubmit={handleRegister} className="space-y-4">

          {/* Student Code Input */}
          <input
            type="text"
            name="studentCode"
            placeholder="Enter Student ID (Example: STU001)"
            value={formData.studentCode}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg outline-none"
          />

          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg outline-none"
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg outline-none"
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white p-3 rounded-lg font-semibold hover:bg-green-700"
          >
            Register
          </button>
        </form>

        <p className="text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <Link
            to="/"
            className="text-green-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;