import './App.css';
import {useState} from 'react'
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

import LoadDocument from './components/LoadDocument';
import React from 'react';

function App() {
  const [columnDefs] = useState([
    {field: 'Date'},
    {field: 'Date'},
  ]);


  const [rowData] = useState([])
  return (
    <div>
      <LoadDocument
      rowData={rowData}
      columnDefs={columnDefs}
      ></LoadDocument>
    </div>
  );
}

export default App;
