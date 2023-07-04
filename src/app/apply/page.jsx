'use client'
import { useState } from 'react';

export default function Apply() {
  const [file, setFile] = useState(null);
  const [user, setUser] = useState('')
  const [dec, setDec] = useState('')
  const [value, setValue] = useState('');
  
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };
  
  const handleValueChange = (e) => {
    setValue(e.target.value);
  };
  const handleuserChange = (e) => {
    setUser(e.target.value);
  };
  const handledecChange = (e) => {
    setDec(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('file', file);
    formData.append('value', value);
    formData.append('user',user)
    formData.append('dec',dec)

    
    const jsonData = JSON.stringify(Object.fromEntries(formData));
    localStorage.setItem('fileData', jsonData);
    alert("Your file is being uploaded in local storage in JSON Format.")
    
    // Reset the form fields
    setFile(null);
    setValue('');
    setUser('')
    setDec('')
  };
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow">
        <h1 className="text-2xl font-bold mb-6">Job Application</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              id="name"
              type="text"
              value={user} onChange={handleuserChange }
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label  className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              id="email"
              value={value} onChange={handleValueChange}
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="resume">
              Resume
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              id="resume"
              type="file"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="coverLetter">
              Cover Letter
            </label>
            <textarea
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              id="coverLetter"
              value={dec} onChange={handledecChange }
              rows="4"
              placeholder="Enter your cover letter"
              required
            />
          </div>
          <button
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}


{/* <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="file">File:</label>
        <input type="file" id="file" onChange={handleFileChange} />
      </div>
      <div>
        <label htmlFor="value">Value:</label>
        <input type="text" id="value" value={value} onChange={handleValueChange} />
      </div>
      <button type="submit">Submit</button>
    </form> */}