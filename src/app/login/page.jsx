import React from 'react';
import classes from './login.module.css'

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="border w-1/3 border-gray-800 rounded-lg shadow-xl p-8 bg-white">
        <h1 className="text-center font-bold my-10 text-3xl">Login</h1>

        <form className="text-xl">

          <label htmlFor="email">Email</label><br />
          <input type="text" placeholder="Enter your email here" className="border border-gray-800 w-full p-2 mb-4" /><br />

          <label htmlFor="password">Password</label><br />
          <input type="password" placeholder="Enter your password here" className="border border-gray-800 w-full p-2 mb-4" /><br />

          <button className="border w-full rounded-lg bg-blue-500 text-white py-2 my-2">Submit</button>
          <button className={classes.localBtn}>Local button</button>

        </form>
      </div>
    </div>
  )
}

export default Login;
