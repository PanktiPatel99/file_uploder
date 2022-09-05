import React, { useState } from "react";
import "./FileUpload.css";

const FileUpload = () => {
  const [file, setFile] = useState("");

  const handleUpload = (e) => {
    // console.log(e);
    setFile(e.target.files[0]);
  };

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

export default FileUpload;
