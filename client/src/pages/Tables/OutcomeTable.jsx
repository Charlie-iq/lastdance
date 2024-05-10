import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'; // Importing left and right arrow icons

const OutcomeTable = () => {
  const [incomes, setIncomes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // Number of items to display per page

  useEffect(() => {
    const fetchIncomes = async () => {
      try {
        const apiUrl = 'http://localhost:1337/api/outcomings';
        const token = '200c078420d853c65301869bc630cb90048ae53944baf4f3f205f3d1b5462a65ee94e5ecc804ac0170258ecab15b0752ab7f88bcc702c9e3df11017e45b231831cf035cb27ff96551782c15dc61457d1500e35b577845f821e8abf9b88ffcfbc8693711cf692acab62dc87c462782304cba700659de947517e102a66b0f54050';

        const response = await axios.get(apiUrl, {
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

  // Logic to get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = incomes.data && incomes.data.slice(indexOfFirstItem, indexOfLastItem);

  // Logic to paginate
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container -my-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-600">Outcome Records</h1>
      <div className="overflow-x-auto">
        <table className="w-full table-fixed border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="w-1/12 px-6 py-3 text-left text-gray-800">Serial</th>
              <th className="w-1/6 px-6 py-3 text-left text-gray-800">Date</th>
              <th className="w-1/4 px-6 py-3 text-left text-gray-800">Department Name</th> {/* Adjusted width */}
              <th className="w-1/6 px-6 py-3 text-left text-gray-800">Book Number</th>
              <th className="w-1/6 px-6 py-3 text-left text-gray-800">Book Date</th>
              <th className="px-6 py-3 text-left text-gray-800">Subject</th>
            </tr>
          </thead>
          <tbody>
            {currentItems && currentItems.map((income) => (
              <tr key={income.id} className="border-t">
                <td className="px-6 py-4">{income.id}</td> {/* Displaying ID as serial */}
                <td className="px-6 py-4">{income.attributes.date}</td>
                <td className="px-6 py-4 overflow-hidden">{income.attributes.departmentName}</td> {/* Expanded width with overflow handling */}
                <td className="px-6 py-4">{income.attributes.bookNum}</td>
                <td className="px-6 py-4">{income.attributes.bookDate}</td>
                <td className="px-6 py-4 break-all">{income.attributes.subject}</td> {/* Expanding subject column */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 mr-2 rounded bg-gray-500 text-white disabled:bg-gray-400 disabled:text-gray-800"
        >
          <AiOutlineLeft className="inline-block text-lg" />
          Previous
        </button>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={!incomes.data || indexOfLastItem >= (incomes.data.length || 0)}
          className="px-4 py-2 ml-2 rounded bg-gray-500 text-white disabled:bg-gray-400 disabled:text-gray-800"
        >
          Next
          <AiOutlineRight className="inline-block text-lg ml-1" />
        </button>
      </div>
    </div>
  );
};

export default OutcomeTable;
