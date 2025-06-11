import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CampusMap from '../components/CampusMap';

const Dashboard = () => {
  const [showMap, setShowMap] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header Section with Animation */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4 py-8"
      >
        <div className="mb-8 bg-white rounded-2xl shadow-lg p-8 transform hover:scale-[1.02] transition-transform duration-300">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            College Dashboard
          </h1>
          <p className="text-gray-600 mt-2">Welcome to your college management portal</p>
        </div>

        {/* Quick Stats with Hover Effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { title: 'Upcoming Events', value: '12', color: 'from-blue-500 to-blue-600' },
            { title: 'Active Courses', value: '24', color: 'from-green-500 to-green-600' },
            { title: 'Faculty Members', value: '45', color: 'from-purple-500 to-purple-600' },
            { title: 'Hackathons', value: '3', color: 'from-orange-500 to-orange-600' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              <h3 className="text-lg font-semibold text-gray-700">{stat.title}</h3>
              <p className={`text-4xl font-bold bg-gradient-to-r ${stat.color} text-transparent bg-clip-text`}>
                {stat.value}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Main Content Grid with Glass Effect */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Events Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-2 h-8 bg-blue-500 rounded-full mr-3"></span>
              Upcoming Events
            </h2>
            <div className="space-y-4">
              {[
                { title: 'Tech Symposium 2024', date: 'March 15, 2024', location: 'Main Auditorium', color: 'blue' },
                { title: 'Cultural Fest', date: 'March 20, 2024', location: 'College Ground', color: 'green' }
              ].map((event, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className={`border-l-4 border-${event.color}-500 pl-4 py-3 bg-white/50 rounded-r-lg hover:bg-white/80 transition-colors duration-300`}
                >
                  <h3 className="font-semibold text-lg">{event.title}</h3>
                  <p className="text-sm text-gray-600 flex items-center mt-1">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {event.date} • {event.location}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Faculty Directory with Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-2 h-8 bg-purple-500 rounded-full mr-3"></span>
              Faculty Directory
            </h2>
            <div className="space-y-4">
              {[
                { name: 'Dr. Sarah Johnson', dept: 'Computer Science', room: '302' },
                { name: 'Prof. Michael Chen', dept: 'Mathematics', room: '205' }
              ].map((faculty, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-4 p-4 bg-white/50 rounded-xl hover:bg-white/80 transition-colors duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    {faculty.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{faculty.name}</h3>
                    <p className="text-sm text-gray-600 flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      {faculty.dept} • Room {faculty.room}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Course Materials with Interactive Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-2 h-8 bg-green-500 rounded-full mr-3"></span>
              Course Materials
            </h2>
            <div className="space-y-4">
              {[
                { title: 'Data Structures', code: 'CS201', update: '2 days ago' },
                { title: 'Web Development', code: 'CS301', update: '1 week ago' }
              ].map((course, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center justify-between p-4 bg-white/50 rounded-xl hover:bg-white/80 transition-colors duration-300"
                >
                  <div>
                    <h3 className="font-semibold text-lg">{course.title}</h3>
                    <p className="text-sm text-gray-600 flex items-center">
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs mr-2">
                        {course.code}
                      </span>
                      Updated {course.update}
                    </p>
                  </div>
                  <button className="px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                    Download
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Campus Map with Interactive Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-2 h-8 bg-orange-500 rounded-full mr-3"></span>
              Campus Map
            </h2>
            <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl overflow-hidden">
              {showMap ? (
                <CampusMap />
              ) : (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <svg className="w-16 h-16 mx-auto text-orange-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    <p className="text-gray-600 font-medium">Interactive Campus Map</p>
                    <button 
                      onClick={() => setShowMap(true)}
                      className="mt-4 px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
                    >
                      View Map
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Hackathons Section with Modern Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="w-2 h-8 bg-indigo-500 rounded-full mr-3"></span>
            Upcoming Hackathons
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'CodeFest 2024', date: 'March 25-26, 2024', desc: '24-hour coding competition', color: 'from-indigo-500 to-purple-500' },
              { title: 'AI Challenge', date: 'April 10-11, 2024', desc: 'Machine Learning competition', color: 'from-blue-500 to-cyan-500' },
              { title: 'Web Warriors', date: 'April 20-21, 2024', desc: 'Web development hackathon', color: 'from-green-500 to-emerald-500' }
            ].map((hackathon, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300"
              >
                <div className={`h-2 bg-gradient-to-r ${hackathon.color}`}></div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2">{hackathon.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {hackathon.date}
                  </p>
                  <p className="text-gray-700 mb-4">{hackathon.desc}</p>
                  <button className="w-full py-2 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-lg hover:from-gray-800 hover:to-gray-700 transition-all duration-300 transform hover:scale-105">
                    Register Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Dashboard; 