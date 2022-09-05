import React from "react";
import "./FileUpload.css";
import EnhancedFileUpload from "./HOC";

const FileUpload = ({ handleUpload, file }) => {
  return (
    <div className="file_uploader">
      <div className="file_details">
        <input type="file" onChange={handleUpload} />
        <p>Filename: {file.name}</p>
        <p>File type: {file.type}</p>
        <p>File size: {file.size} bytes</p>
      </div>
    </div>
  );
};

export default EnhancedFileUpload(FileUpload);
