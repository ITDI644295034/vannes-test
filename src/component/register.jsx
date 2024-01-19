import { data } from 'autoprefixer';
import React from 'react'
import { useState, useEffect } from "react";
import axios from 'axios';

function Register() {
    const [gpa, setGpa] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [faculty, setFaculty] = useState("");
    const [major, setMajor] = useState("");
    const [entrance, setEntrance] = useState("");

    const postData = async () => {
        try {
          const response = await axios
            .post("http://localhost:3333/student", {
              name: name,
              surname: surname,
              faculty: faculty,
              major: major,
              gpa: gpa,
              entrance: entrance

            })
            // .then(() => navigate("/allUser"));
        } catch (error) {
          console.log(error);
        }
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        postData();
      };

  return (
    <>
    

    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                name
              </label>
              
            </div>
            <div className="mt-2">
              <input
            value={name}
            onChange={(e) => setName(e.target.value)}
              
                type="text"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                surname
              </label>
              
            </div>
            <div className="mt-2">
              <input
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                type="text"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                faculty
              </label>
              
            </div>
            <div className="mt-2">
              <input
               value={faculty}
               onChange={(e) => setFaculty(e.target.value)}
                type="text"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                major
              </label>
              
            </div>
            <div className="mt-2">
              <input
               value={major}
               onChange={(e) => setMajor(e.target.value)}
                id="password"
                name="password"
                type="text"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                enatrance date
              </label>
              
            </div>
            <div className="mt-2">
              <input
                 value={entrance}
                 onChange={(e) => setEntrance(e.target.value)}
                type="date"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                GPA
              </label>
              
            </div>
            <div className="mt-2">
              <input
                 value={gpa}
                 onChange={(e) => setGpa(e.target.value)}
                type="number"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  </>
  )
}

export default Register