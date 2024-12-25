
import React from 'react';
import Navbar from '../Components/Navbar';

const Home = () => {
  return (
    <>
      <Navbar />

      {/* Main Content Section */}
      <div className="h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
        <div className="bg-white bg-opacity-40 backdrop-blur-md p-12 rounded-xl shadow-soft hover:shadow-soft-hover transition-all duration-300 w-full max-w-3xl">
          <h1 className="text-4xl font-bold text-white text-center mb-6">Welcome to Life Navigator</h1>
          <p className="text-white text-lg text-center mb-8">
            Your journey begins here. Let's navigate life together!
          </p>

          <div className="flex justify-center mb-6">
            <button className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-full shadow-soft hover:bg-blue-700 transition-all duration-200 focus:outline-none">
              Start Your Journey
            </button>
          </div>

          <p className="text-white text-center text-sm">
           <b> <h3> LifeNavigator helps you manage your goals,<br></br> track progress, and achieve a balanced life with our specialized features.
           </h3></b> </p>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
        <div className="container mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Features of LifeNavigator</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Feature 1: Study Tracker */}
            <div className="bg-white bg-opacity-30 backdrop-blur-md p-6 rounded-lg shadow-soft hover:shadow-soft-hover transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4">Study Tracker</h3>
              <p className="mb-4">Track your study habits and productivity with detailed analytics to stay ahead in academics.</p>
              <button className="px-4 py-2 text-sm font-medium text-blue-600 bg-white rounded-full shadow hover:bg-blue-100 transition-all duration-200">
                Learn More
              </button>
            </div>
            {/* Feature 2: Career Development */}
            <div className="bg-white bg-opacity-30 backdrop-blur-md p-6 rounded-lg shadow-soft hover:shadow-soft-hover transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4">Career Development</h3>
              <p className="mb-4">Plan and achieve your career goals with personalized roadmaps and skill development tracking.</p>
              <button className="px-4 py-2 text-sm font-medium text-purple-600 bg-white rounded-full shadow hover:bg-purple-100 transition-all duration-200">
                Get Started
              </button>
            </div>
            {/* Feature 3: Health Monitor */}
            <div className="bg-white bg-opacity-30 backdrop-blur-md p-6 rounded-lg shadow-soft hover:shadow-soft-hover transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4">Health Monitor</h3>
              <p className="mb-4">Monitor your physical and mental health with tools to track fitness, diet, and mindfulness.</p>
              <button className="px-4 py-2 text-sm font-medium text-pink-600 bg-white rounded-full shadow hover:bg-pink-100 transition-all duration-200">
                View Insights
              </button>
            </div>
            {/* Feature 4: Goal and Life Tracker */}
            <div className="bg-white bg-opacity-30 backdrop-blur-md p-6 rounded-lg shadow-soft hover:shadow-soft-hover transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4">Goal and Life Tracker</h3>
              <p className="mb-4">Set and track your life goals, from short-term tasks to long-term dreams, with ease.</p>
              <button className="px-4 py-2 text-sm font-medium text-blue-600 bg-white rounded-full shadow hover:bg-blue-100 transition-all duration-200">
                Explore Goals
              </button>
            </div>
            {/* Feature 5: Failure Insights */}
            <div className="bg-white bg-opacity-30 backdrop-blur-md p-6 rounded-lg shadow-soft hover:shadow-soft-hover transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4">Failure Insights</h3>
              <p className="mb-4">Learn from past mistakes with detailed insights and turn failures into stepping stones.</p>
              <button className="px-4 py-2 text-sm font-medium text-purple-600 bg-white rounded-full shadow hover:bg-purple-100 transition-all duration-200">
                Analyze Failures
              </button>
            </div>
            {/* Feature 6: Finance Management */}
            <div className="bg-white bg-opacity-30 backdrop-blur-md p-6 rounded-lg shadow-soft hover:shadow-soft-hover transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4">Finance Management</h3>
              <p className="mb-4">Manage your personal finances with budgeting tools, spending analysis, and saving plans.</p>
              <button className="px-4 py-2 text-sm font-medium text-pink-600 bg-white rounded-full shadow hover:bg-pink-100 transition-all duration-200">
                Manage Finances
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 py-6 text-center text-white">
        <p>&copy; 2024 LifeNavigator. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook text-2xl"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter text-2xl"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin text-2xl"></i>
          </a>
        </div>
      </footer>
    </>
  );
};

export default Home;
