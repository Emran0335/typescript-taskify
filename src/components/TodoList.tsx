import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { Todo } from "../models/model";
import SingleTodo from "./SingleTodo";
import "./styles.css";

interface Props {
  todoArr: Todo[];
  completedTodos: Todo[];
  setTodoArr: React.Dispatch<React.SetStateAction<Todo[]>>;
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({
  todoArr,
  setTodoArr,
  completedTodos,
  setCompletedTodos,
}) => {
  return (
    <div className="container">
      <Droppable droppableId="todoListDrop">
        {(provided, snapshot) => (
          <div
            className={`todoArr ${snapshot.isDraggingOver ? "dragactive" : ""}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todoArr__heading">Active Tasks</span>
            {todoArr?.map((eachArr, index) => (
              <SingleTodo
                index={index}
                key={eachArr.id}
                todoValue={eachArr}
                setTodoArr={setTodoArr} // setTodoArr
                todoArr={todoArr} // todoArr
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="todosRemove">
        {(provided, snapshot) => (
          <div
            className={`todoArr remove ${
              snapshot.isDraggingOver ? "dragcomplete" : ""
            }`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todoArr__heading">Completed Tasks</span>
            {completedTodos?.map((eachArr, index) => (
              <SingleTodo
                index={index}
                key={eachArr.id}
                todoValue={eachArr}
                setTodoArr={setCompletedTodos} // setTodoArr
                todoArr={completedTodos} // todoArr
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TodoList;
