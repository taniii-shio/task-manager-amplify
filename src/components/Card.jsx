import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

const Card = ({ children }) => {
  const handleDeleteTask = () => {
    console.log("test");
  };
  return (
    <>
      <div className="card">
        <p>{children}</p>
        <div className="task-delete-button">
          <AiOutlineDelete onClick={handleDeleteTask} />
        </div>
      </div>
    </>
  );
};

export default Card;
