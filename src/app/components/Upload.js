// frontend/components/Upload.js
import React, { useState } from "react";
import axios from "axios";

const Upload = ({ token }) => {
  const [file, setFile] = useState(null);

  const uploadFile = async () => {
    const formData = new FormData();
    formData.append("file", file);
    await axios.post(
      "https://hyperspace-back-end.onrender.com/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    alert("File uploaded");
  };

  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={uploadFile}>Upload</button>
    </div>
  );
};

export default Upload;
