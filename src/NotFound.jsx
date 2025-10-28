import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react"; // or any icon from react-icons
import React from "react";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center bg-gray-50 px-6">
      <AlertTriangle className="text-accent w-16 h-16 mb-4" />
      <h1 className="text-6xl font-bold text-gray-800 mb-2">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
      <p className="text-gray-500 mb-8 max-w-md">
        The page you’re looking for doesn’t exist or may have been moved.
      </p>
      <Link
        to="/"
        className="bg-accent text-white px-6 py-2 rounded-full hover:bg-accent/80 transition-all duration-300"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
