import React, { useEffect, useRef, useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { Todo } from "../models/model";
import "./styles.css";

type Props = {
  index: number;
  todoValue: Todo;
  todoArr: Todo[];
  setTodoArr: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo: React.FC<Props> = ({
  todoValue,
  todoArr,
  setTodoArr,
  index,
}) => {
  //todoValue is an object generated from the array of todoArr;
  //todoArr is an array of object;
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todoValue.todo);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodoArr(
      todoArr.map((eachTodo) =>
        eachTodo.id === id ? { ...eachTodo, todo: editTodo } : eachTodo
      )
    );
    setEdit(false);
  };

  const handleDelte = (id: number) => {
    setTodoArr(todoArr.filter((eachObj) => eachObj.id !== id));
  };

  const handleDone = (id: number) => {
    setTodoArr(
      todoArr.map((obj) =>
        obj.id === id
          ? {
              ...obj,
              isDone: !obj.isDone, //true
            }
          : obj
      )
    );
  };

  return (
    <Draggable draggableId={todoValue.id.toString()} index={index}>
      {(provided, snapshot) => (
        <form
          className="single__todo"
          onSubmit={(e) => handleEdit(e, todoValue.id)}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div className={`single__each ${snapshot.isDragging ? "drag" : ""}`}>
            {edit ? (
              <input
                value={editTodo}
                className="single__each--text"
                onChange={(e) => setEditTodo(e.target.value)}
              />
            ) : todoValue.isDone ? (
              <s className="single__each--text">{todoValue.todo}</s>
            ) : (
              <span className="single__each--text">{todoValue.todo}</span>
            )}
            <div className="icon__container">
              <span
                className="icon"
                onClick={() => {
                  if (!edit && !todoValue.isDone) {
                    setEdit(!edit);
                  }
                }}
              >
                <AiFillEdit />
              </span>
              <span className="icon" onClick={() => handleDelte(todoValue.id)}>
                <AiFillDelete />
              </span>
              <span className="icon" onClick={() => handleDone(todoValue.id)}>
                <MdDone />
              </span>
              <button type="submit" className="btn__submit">
                Add
              </button>
            </div>
          </div>
        </form>
      )}
    </Draggable>
  );
};

export default SingleTodo;
