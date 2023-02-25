import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";

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
      }}
      value={value}
      onChange={handleChange}
    />
  );
};

export default Editor;
