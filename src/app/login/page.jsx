import React from 'react';
import classes from './login.module.css';

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="border w-1/3 border-gray-700 rounded-lg shadow-xl p-8 bg-gray-800">
        <h1 className="text-center font-semibold text-4xl text-white my-10">Login</h1>

        <form className="text-lg text-white">

          <label htmlFor="email" className="text-gray-300">Email</label><br />
          <input 
            type="text" 
            placeholder="Enter your email here" 
            className="border border-gray-600 w-full p-2 mb-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
          /><br />

          <label htmlFor="password" className="text-gray-300">Password</label><br />
          <input 
            type="password" 
            placeholder="Enter your password here" 
            className="border border-gray-600 w-full p-2 mb-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
          /><br />

          <button className="border w-full rounded-lg bg-blue-500 text-white py-2 my-2 hover:bg-blue-600 transition duration-300">Submit</button>
          <button className={classes.localBtn}>Local button</button>

        </form>
      </div>
    </div>
  )
}

export default Login;
