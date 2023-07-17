// src/App.js
import React from 'react';
import useXmlData from '../hooks/useDataXml';
import Card from './Card';

const DataHeader = () => {
  const { metadata, entryCount } = useXmlData();

  return (
    <div className="container mx-auto p-4">
      <Card title="Details">
        <p>Title: {metadata?.title}</p>
        <p>Author: {metadata?.author?.name} ({metadata?.author?.email})</p>
        <p>Description: {metadata?.description}</p>
        <p>Created At: {metadata?.created_at}</p>
        <p>Version: {metadata?.version}</p>
        <p>License: {metadata?.license}</p>
      </Card>

      <Card title="Data Entries in Manifest">
        <p>Total Entries: {entryCount}</p>
      </Card>
    </div>
  );
};

export default DataHeader;
