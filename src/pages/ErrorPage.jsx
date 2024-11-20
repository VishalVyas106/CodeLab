import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-green-300 to-yellow-300 text-gray-800">
      {/* Top Bar for Beta Info */}
      <div className="w-full bg-green-200 py-2 text-center">
        <span className="font-semibold">
          This is our <strong>Beta v0</strong>. Stay tuned!
        </span>
      </div>
      <div className="w-full bg-yellow-300 py-2 text-center">
        <span>
          <strong>v1.0</strong> will include all features and release soon!
        </span>
      </div>

      {/* Main Content */}
      <div className="text-center mt-10 px-6">
        <div className="mb-6">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Our Beta Version
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          We're excited to introduce our beta release. Version 1.0 is under development and will include complete features to enhance your experience. Stay connected for the latest updates.
        </p>
        <p className="text-sm">
          Check back soon for the official release or follow our updates on{' '}
          <Link
            to="/github"
            className="text-blue-600 underline font-medium hover:text-blue-800"
          >
            GitHub.
          </Link>
        </p>
      </div>

      {/* Mobile App Preview */}
      {/* <div className="mt-8">
        <img
          src="https://via.placeholder.com/200x400" // Replace with your app screenshot
          alt="Mobile App UI"
          className="w-72 mx-auto drop-shadow-md"
        />
      </div> */}
    </div>
  );
};

export default ErrorPage;
