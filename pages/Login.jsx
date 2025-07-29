import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="pt-20 overflow-hidden flex items-center justify-center px-4">
      <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md ">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Kirish
        </h2>

        <form>
          <label className="flex items-center gap-2 border px-3 py-2 rounded-md mb-4 bg-white focus-within:ring-2 ring-blue-500">
            <svg
              className="h-5 w-5 opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </g>
            </svg>
            <input
              type="text"
              required
              placeholder="Foydalanuvchi nomi"
              className="w-full outline-none"
              pattern="[A-Za-z][A-Za-z0-9\-]*"
              minLength="3"
              maxLength="30"
              title="Faqat harflar, raqamlar va chiziqcha bo'lishi mumkin"
            />
          </label>

          <label className="flex items-center gap-2 border px-3 py-2 rounded-md mb-4 bg-white focus-within:ring-2 ring-blue-500">
            <svg
              className="h-5 w-5 opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
              </g>
            </svg>
            <input
              type="password"
              required
              placeholder="Parolingiz"
              className="w-full outline-none"
              minLength="8"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="8 ta belgidan ko‘p, kamida 1 son, 1 kichik va 1 katta harf bo‘lishi kerak"
            />
          </label>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Kirish
          </button>
        </form>
        <p className="text-sm text-center mt-4 text-gray-600">
          or {" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
