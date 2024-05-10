import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { AiOutlineLeft, AiOutlineRight, AiOutlineClose } from 'react-icons/ai'; 

const API_URL = 'http://localhost:1337/api/incomes';
const token = '200c078420d853c65301869bc630cb90048ae53944baf4f3f205f3d1b5462a65ee94e5ecc804ac0170258ecab15b0752ab7f88bcc702c9e3df11017e45b231831cf035cb27ff96551782c15dc61457d1500e35b577845f821e8abf9b88ffcfbc8693711cf692acab62dc87c462782304cba700659de947517e102a66b0f54050';

const IncomesTable = () => {
  const [incomes, setIncomes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); 
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [selectedIncome, setSelectedIncome] = useState(null);
  const [deletionMessage, setDeletionMessage] = useState('');
  const [date, setDate] = useState('');
  const [departmentName, setDepartmentName] = useState('');
  const [bookNum, setBookNum] = useState('');
  const [subject, setSubject] = useState('');
  const [bookDate, setBookDate] = useState('');

  useEffect(() => {
    const fetchIncomes = async () => {
      try {
        const response = await axios.get(API_URL, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        setIncomes(response.data);
      } catch (error) {
        console.error('Error fetching incomes:', error);
      }
    };

    fetchIncomes();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = incomes.data && incomes.data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleEdit = (income) => {
    setSelectedIncome(income);
    setEditModalVisible(true);
  };

  const handleDelete = async (incomeId) => {
    try {
      await axios.delete(`${API_URL}/${incomeId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const updatedIncomes = incomes.data.filter((income) => income.id !== incomeId);
      setIncomes({ data: updatedIncomes });
      setEditModalVisible(false);
      setDeletionMessage('Deleted successfully');
      setTimeout(() => {
        setDeletionMessage('');
      }, 2000);
    } catch (error) {
      console.error('Error deleting income:', error);
    }
  };

  const handleSaveEdit = async (updatedIncome) => {
    try {
      await axios.put(`${API_URL}/${updatedIncome.id}`, updatedIncome, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const updatedIncomes = incomes.data.map((income) =>
        income.id === updatedIncome.id ? updatedIncome : income
      );
      setIncomes({ data: updatedIncomes });
      setEditModalVisible(false);
    } catch (error) {
      console.error('Error updating income:', error);
    }
  };

  const renderFormFields = () => (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
        Date
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="date"
        type="date"
        placeholder="Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        name="date"
      />
      <label className="block text-gray-700 text-sm font-bold mt-4 mb-2" htmlFor="departmentName">
        Department Name
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="departmentName"
        type="text"
        placeholder="Department Name"
        value={departmentName}
        onChange={(e) => setDepartmentName(e.target.value)}
        name="departmentName"
      />
      <label className="block text-gray-700 text-sm font-bold mt-4 mb-2" htmlFor="bookNum">
        Book Number
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="bookNum"
        type="text"
        placeholder="Book Number"
        value={bookNum}
        onChange={(e) => setBookNum(e.target.value)}
        name="bookNum"
      />
      <label className="block text-gray-700 text-sm font-bold mt-4 mb-2" htmlFor="subject">
        Subject
      </label>
      <textarea
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="subject"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        name="subject"
      />
      <label className="block text-gray-700 text-sm font-bold mt-4 mb-2" htmlFor="bookDate">
        Book Date
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="bookDate"
        type="date"
        placeholder="Book Date"
        value={bookDate}
        onChange={(e) => setBookDate(e.target.value)}
        name="bookDate"
      />
    </div>
  );

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Income Record</h1>
      {editModalVisible && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-8 rounded shadow-md relative w-full sm:max-w-md">
            <button
              onClick={() => setEditModalVisible(false)}
              className="absolute top-0 right-0 mt-4 mr-4 text-gray-500 hover:text-gray-700"
            >
              <AiOutlineClose className="h-6 w-6 fill-current" />
            </button>
            {renderFormFields()}
            <div className="flex justify-between mt-4">
              <button
                onClick={() => handleSaveEdit(selectedIncome)}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                Save
              </button>
              <button
                onClick={() => handleDelete(selectedIncome.id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Delete Field
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-2 bg-gray-200 text-gray-600 border-b">Serial</th>
              <th className="px-4 py-2 bg-gray-200 text-gray-600 border-b">Date</th>
              <th className="px-4 py-2 bg-gray-200 text-gray-600 border-b">Department Name</th>
              <th className="px-4 py-2 bg-gray-200 text-gray-600 border-b">Book Number</th>
              <th className="px-4 py-2 bg-gray-200 text-gray-600 border-b">Book Date</th>
              <th className="px-4 py-2 bg-gray-200 text-gray-600 border-b">Subject</th>
              <th className="px-4 py-2 bg-gray-200 text-gray-600 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems && currentItems.map((income) => (
              <tr key={income.id}>
                <td className="border px-4 py-2">{income.id}</td>
                <td className="border px-4 py-2">{income.attributes.date}</td>
                <td className="border px-4 py-2">{income.attributes.departmentName}</td>
                <td className="border px-4 py-2">{income.attributes.bookNum}</td>
                <td className="border px-4 py-2">{income.attributes.bookDate}</td>
                <td className="border px-4 py-2">{income.attributes.subject}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleEdit(income)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded bg-blue-500 text-white disabled:bg-gray-400 disabled:text-gray-800"
        >
          <AiOutlineLeft className="inline-block text-lg" />
          Previous
        </button>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={!incomes.data || indexOfLastItem >= (incomes.data.length || 0)}
          className="px-4 py-2 rounded bg-blue-500 text-white disabled:bg-gray-400 disabled:text-gray-800"
        >
          Next
          <AiOutlineRight className="inline-block text-lg ml-1" />
        </button>
      </div>
      {deletionMessage && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-8 rounded shadow-md relative">
            <h2 className="text-lg font-bold mb-4">{deletionMessage}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default IncomesTable;
