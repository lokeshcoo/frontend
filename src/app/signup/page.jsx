import React from 'react'

const Signup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="border border-gray-800 w-1/3 p-6 rounded-xl shadow-gray-800 shadow-xl bg-white">
        <h1 className="text-3xl text-center font-bold my-6">Register Your Details</h1>

        <form className="text-xl">

          <label htmlFor="first_name">First Name</label><br />
          <input type="text" placeholder="Enter your first name here" className="border border-gray-800 w-full p-2 mb-4" /><br />

          <label htmlFor="last_name">Last Name</label><br />
          <input type="text" placeholder="Enter your last name here" className="border border-gray-800 w-full p-2 mb-4" /><br />

          <label htmlFor="email">Email</label><br />  
          <input type="text" placeholder="Enter your email" className="border border-gray-800 w-full p-2 mb-4" /><br/>

          <label htmlFor="username">Username</label><br />
          <input type="text" placeholder="Create your username" className="border border-gray-800 w-full p-2 mb-4" /><br />

          <label htmlFor="password">Create Password</label><br />
          <input type="password" placeholder="Create your password" className="border border-gray-800 w-full p-2 mb-4" /><br />

          <label htmlFor="confirm_password">Confirm Password</label><br />
          <input type="password" placeholder="Confirm your password" className="border border-gray-800 w-full p-2 mb-4" /><br />

          <button className="border w-full rounded-lg bg-blue-500 text-white text-center my-8 p-2">Register</button>        

        </form>

      </div>
    </div>
  )
}

export default Signup;
