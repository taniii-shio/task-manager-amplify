import React, { useEffect, useState } from "react";
import { API } from "aws-amplify";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { AiOutlineDelete } from "react-icons/ai";

import { getColumn, listColumns } from "../graphql/queries";
import Card from "./Card";
import AddColumnModal from "./AddColumnModal";
import AddTaskModal from "./AddTaskModal";
import { deleteColumn } from "../graphql/mutations";

const Main = () => {
  const [data, setData] = useState([]);
  const [showAddColumnModal, setShowAddColumnModal] = useState(false);
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);

  const [targetColumnId, setTargetColumnId] = useState("");

  useEffect(() => {
    fetchData();
  }, [showAddColumnModal, showAddTaskModal]);

  const fetchData = async () => {
    try {
      const listData = await API.graphql({
        query: listColumns,
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });
      setData(listData.data.listColumns.items);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteColumnHandler = async (e) => {
    try {
      if (!e.target.id) return;
      console.log(e.target.id);
      const targetColumn = await API.graphql({
        query: getColumn,
        variables: {
          id: e.target.id,
        },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });
      console.log(targetColumn.data.getColumn._version);
      await API.graphql({
        query: deleteColumn,
        variables: {
          input: {
            id: e.target.id,
            _version: targetColumn.data.getColumn._version,
          },
        },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });
      fetchData();
    } catch (err) {
      console.log(err);
    }
  };

  const handleShowAddColumnModal = () => {
    setShowAddColumnModal(true);
  };
  const handleShowAddTaskModal = (e) => {
    setShowAddTaskModal(true);
    setTargetColumnId(e.target.id);
  };

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      // ????????????????????????????????????????????????
      const sourceColIndex = data.findIndex((e) => e.id === source.droppableId);
      const destinationColIndex = data.findIndex(
        (e) => e.id === destination.droppableId
      );
      const sourceCol = data[sourceColIndex];
      const destinationCol = data[destinationColIndex];

      const sourceTask = [...sourceCol.tasks];
      const destinationTask = [...destinationCol.tasks];
      // ????????????????????????????????????
      const [removed] = sourceTask.splice(source.index, 1);
      // ????????????????????????????????????????????????
      destinationTask.splice(destination.index, 0, removed);

      data[sourceColIndex].tasks = sourceTask;
      data[destinationColIndex].tasks = destinationTask;
      setData(data);
    } else {
      // ????????????????????????????????????????????????
      const sourceColIndex = data.findIndex((e) => e.id === source.droppableId);
      console.log(sourceColIndex);
      const sourceCol = data[sourceColIndex];
      console.log(sourceCol);

      const sourceTask = [...sourceCol.tasks];
      // ??????????????????
      const [removed] = sourceTask.splice(source.index, 1);
      // ??????????????????
      sourceTask.splice(destination.index, 0, removed);

      data[sourceColIndex].tasks = sourceTask;
      setData(data);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="trello">
        {data.map((section) =>
          section._deleted ? (
            <div key={section.id}></div>
          ) : (
            <Droppable key={section.id} droppableId={section.id}>
              {(provided) => (
                <div
                  className="trello-section"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <div className="trello-section-title-wrapper">
                    <div className="trello-section-title">{section.title}</div>
                    <AiOutlineDelete
                      className="trello-section-delete-button"
                      id={section.id}
                      onClick={(e) => deleteColumnHandler(e)}
                    />
                  </div>
                  <div className="trello-section-content">
                    {section.tasks.map((task, index) => (
                      <Draggable
                        draggableId={task.id}
                        index={index}
                        key={task.id}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={{
                              ...provided.draggableProps.style,
                              opacity: snapshot.isDragging ? "0.5" : "1",
                            }}
                          >
                            <Card
                              task={task}
                              columnId={section.id}
                              columnName={section.title}
                              fetchDataFunc={fetchData}
                            />
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                    <div
                      className="add-task-card"
                      id={section.id}
                      onClick={(e) => handleShowAddTaskModal(e)}
                    >
                      <p id={section.id}>+ Add task</p>
                    </div>
                  </div>
                </div>
              )}
            </Droppable>
          )
        )}
        <div className="add-column-section" onClick={handleShowAddColumnModal}>
          <p>+ Add column</p>
        </div>
        <AddColumnModal
          showFlag={showAddColumnModal}
          setShowModal={setShowAddColumnModal}
        />
        <AddTaskModal
          showFlag={showAddTaskModal}
          setShowModal={setShowAddTaskModal}
          targetColumnId={targetColumnId}
        />
      </div>
    </DragDropContext>
  );
};

export default Main;
