import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './component/Sidebar';
import IncomeTable from './pages/Tables/IncomeTable';
import OutcomeTable from './pages/Tables/OutcomeTable';
import OutcomeInsert from './InsertData/OutcomeInsert';
import IncomeInsert from './InsertData/IncomeInsert';
const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={""} />
          <Route path="/IncomeTable" element={<IncomeTable />} />
          <Route path="/OutcomeTable" element={<OutcomeTable />} />
          <Route path="/OutcomeInsert" element={<OutcomeInsert />} />
          <Route path="/IncomeInsert" element={<IncomeInsert />} />         
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;