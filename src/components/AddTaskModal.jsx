import { API } from "aws-amplify";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { updateColumn } from "../graphql/mutations";

const AddTaskModal = (props) => {
  const [taskTitle, setTaskTitle] = useState("");
  // カラムのIDと現在のtasksが必要
  console.log(props.targetColumnId);

  const closeModal = () => {
    props.setShowModal(false);
  };

  const addTask = async () => {
    try {
      if (!taskTitle) return;
      const taskId = uuidv4();
      await API.graphql({
        query: updateColumn,
        variables: {
          input: {
            id: props.targetColumnId,
            tasks: [
              {
                id: taskId,
                title: taskTitle,
              },
            ],
          },
        },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });
      setTaskTitle("");
      closeModal();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      {props.showFlag ? ( // showFlagがtrueだったらModalを表示する
        <div id="overlay" style={overlay}>
          <div id="modalContent" style={modalContent}>
            <h3 style={inputTitle}>Task name</h3>
            <div style={inputWrapper}>
              <input
                style={input}
                placeholder="add task name!"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
              />
              <button style={submitButton} className="button" onClick={addTask}>
                Submit
              </button>
            </div>
            <button style={closeButton} onClick={closeModal} className="button">
              ×
            </button>
          </div>
        </div>
      ) : (
        <></> // showFlagがfalseの場合はModalは表示しない
      )}
    </>
  );
};

const modalContent = {
  background: "#E2E8F0",
  padding: "40px",
  width: "480px",
  height: "220px",
  borderRadius: "8px",
};

const overlay = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.5)",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const inputTitle = {
  color: "#30363d",
};

const inputWrapper = {
  display: "flex",
  marginTop: "12px",
};

const input = {
  width: "100%",
  height: "40px",
  paddingLeft: "12px",
  borderRadius: "8px",
  border: ".8px solid #718096",
  outline: "none",
  background: "#EDF2F7",
};

const submitButton = {
  marginLeft: "12px",
  cursor: "pointer",
  padding: "0 12px",
  borderRadius: "8px",
  border: ".4px solid #4A5568",
  background: "#718096",
  color: "#EDF2F7",
  transition: "opacity 0.2s",
};

const closeButton = {
  margin: "0 auto",
  display: "block",
  marginTop: "40px",
  cursor: "pointer",
  height: "40px",
  padding: "0 16px",
  borderRadius: "8px",
  border: ".4px solid #CBD5E0",
  background: "#fff",
  color: "#4A5568",
  transition: "opacity 0.2s",
};

export default AddTaskModal;
