import React, { useState } from "react";

const UploadForm = ({ onUpload }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (e) => {
    setSelectedFiles(e.target.files);
  };

  const handleUpload = () => {
    onUpload(selectedFiles);
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-lg font-medium mb-4">Upload CSV</h2>

      <div className="flex space-x-4">
        <input
          className="border border-gray-400 p-2 rounded flex-1"
          type="file" multiple 
          onChange={handleFileChange} />
        <button className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-500"
        onClick={handleUpload}
        >
          Upload
        </button>
      </div>
    </div>
  );
};

export default UploadForm;
