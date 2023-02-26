import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Editor = () => {
  const [value, setValue] = useState(
    "This is app is <i><b>not </b></i>connected to a database"
  );

  const handleChange = (html) => {
    setValue(html);
  };
  return (
    <ReactQuill
      theme="snow"
      style={{
        backgroundColor: "#fff",
        height: "100%",
      }}
      value={value}
      onChange={handleChange}
    />
  );
};

export default Editor;
