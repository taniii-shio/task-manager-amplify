import { API } from "aws-amplify";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { createColumn, deleteColumn } from "../graphql/mutations";
import { getColumn } from "../graphql/queries";

const Card = (props) => {
  const handleDeleteTask = async (e) => {
    try {
      if (!e.target.id) return;
      const ids = e.target.id.split("/");
      const columnId = ids[0];
      const taskId = ids[1];
      const columnName = ids[2];
      // カラムを更新 直で無理そうだから、カラムのタスク取得してきて、対象のタスクを削除してから上書きがよさそう
      const targetColumn = await API.graphql({
        query: getColumn,
        variables: {
          id: columnId,
        },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });
      const tasksArr = targetColumn.data.getColumn.tasks;
      console.log(tasksArr);
      const newArr = tasksArr.filter((item) => item.id !== taskId);
      console.log(newArr);
      // カラム削除
      await API.graphql({
        query: deleteColumn,
        variables: {
          input: {
            id: columnId,
            _version: targetColumn.data.getColumn._version,
          },
        },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });
      // カラム作成
      await API.graphql({
        query: createColumn,
        variables: {
          input: {
            title: columnName,
            tasks: newArr,
          },
        },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });
      props.fetchDataFunc();
      // await API.graphql({
      //   query: updateColumn,
      //   variables: {
      //     input: {
      //       id: columnId,
      //       tasks: newArr,
      //     },
      //   },
      //   authMode: "AMAZON_COGNITO_USER_POOLS",
      // });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="card">
        <p>{props.task.title}</p>
        <AiOutlineDelete
          className="task-delete-button"
          id={`${props.columnId}/${props.task.id}/${props.columnName}`}
          onClick={(e) => handleDeleteTask(e)}
        />
      </div>
    </>
  );
};

export default Card;
