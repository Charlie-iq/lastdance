import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:1337/api/Incomes';
const API_TOKEN = 'Bearer 200c078420d853c65301869bc630cb90048ae53944baf4f3f205f3d1b5462a65ee94e5ecc804ac0170258ecab15b0752ab7f88bcc702c9e3df11017e45b231831cf035cb27ff96551782c15dc61457d1500e35b577845f821e8abf9b88ffcfbc8693711cf692acab62dc87c462782304cba700659de947517e102a66b0f54050';

const IncomeInsert = () => {
  const [formData, setFormData] = useState({
    date: '',
    departmentName: '',
    bookNum: '',
    subject: '',
    bookDate: '',
  });
  const [errors, setErrors] = useState({});
  const [currentId, setCurrentId] = useState('');

  // Function to fetch the current ID from the database
  const fetchCurrentId = async () => {
    try {
      const response = await axios.get(API_URL, {
        headers: {
          Authorization: API_TOKEN,
        },
      });
      setCurrentId(response.data.id);
    } catch (error) {
      console.error('Error fetching current ID:', error);
    }
  };

  // Fetch the current ID when the component mounts
  useEffect(() => {
    fetchCurrentId();
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        API_URL,
        { data: formData },
        {
          headers: {
            Authorization: API_TOKEN,
          },
        }
      );
      console.log(res.data);
      // Clear form data after successful submission
      setFormData({
        date: '',
        departmentName: '',
        bookNum: '',
        subject: '',
        bookDate: '',
      });
    } catch (err) {
      console.error(err.response.data);
      setErrors(err.response.data);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-auto bg-gray-200 p-4 rounded-lg">
      <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">Enter the <span className='text-red-400'>outcoming</span> data</h2>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">Date:</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="date"
              id="date"
              placeholder="Date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="departmentName">Department Name:</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="departmentName"
              placeholder="Department Name"
              value={formData.departmentName}
              onChange={(e) => setFormData({ ...formData, departmentName: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bookNum">Book Number:</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="bookNum"
              placeholder="Book Number"
              value={formData.bookNum}
              onChange={(e) => setFormData({ ...formData, bookNum: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">Subject:</label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bookDate">Book Date:</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="date"
              id="bookDate"
              placeholder="Book Date"
              value={formData.bookDate}
              onChange={(e) => setFormData({ ...formData, bookDate: e.target.value })}
              required
            />
          </div>
        </div>
        <div className="flex items-center justify-end mt-4">
          <button
            className="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default IncomeInsert;
