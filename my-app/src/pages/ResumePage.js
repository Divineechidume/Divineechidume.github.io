import React from "react";
const resume = require("./../Chidume_Divinee_Resume_2023.pdf");


const ResumePage = () => {
  return (
    <div>
      <embed src={resume} width="100%" height="1000px" />
    </div>
  );
};

export default ResumePage;