
import axios from 'axios'
import React, { useState, useEffect } from 'react';

const OutcomeTable = () => {
const [incomes, setIncomes] = useState([]);

  useEffect(() => {
    const fetchIncomes = async () => {
      try {
        const apiUrl = 'http://localhost:1337/api/Outcomings';
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

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl  font-bold mb-4">Incomes</h1>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-8 py-2">Serial</th>
            <th className="px-8 py-2">Date</th>
            <th className="px-8 py-2">Department Name</th>
            <th className="px-8 py-2">Book Number</th>
            <th className="px-8 py-2">Book Date Number</th>
            <th className="px-8 py-2">Subject</th>
          </tr>
        </thead>
<tbody>
  {incomes.data && incomes.data.map(income => (
    <tr key={income.id}>
      <td className="border px-4 py-2">{income.attributes.serial}</td>
      <td className="border px-4 py-2">{income.attributes.date}</td>
      <td className="border px-4 py-2">{income.attributes.departmentName}</td>
      <td className="border px-4 py-2">{income.attributes.bookNum}</td>
      <td className="border px-4 py-2">{income.attributes.bookDate}</td>
      <td className="border px-4 py-2">{income.attributes.subject}</td>
    </tr>
  ))}
</tbody>
      </table>
    </div>
  );
}
export default OutcomeTable;

