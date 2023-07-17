import React from 'react';
import Table from './components/Table';
import DataHeader from './components/DataHeader';

function App() {
  return (
    <div className="container mx-auto p-4">
      <DataHeader />
      <h3 className="text-2xl font-bold mb-4">Assignment Table</h3>
      <Table />
    </div>
  );
}

export default App;
