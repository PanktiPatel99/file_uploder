import React, { useState } from "react";

const EnhancedFileUpload = (FileUpload) => {
  const Uploader = () => {
    const [file, setFile] = useState("");

    const handleUpload = (e) => {
      // console.log(e);
      setFile(e.target.files[0]);
    };

    return <FileUpload handleUpload={handleUpload} file={file} />;
  };

  return Uploader;
};

export default EnhancedFileUpload;
