import React, { useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { Todo } from "./models/model";

const App = () => {
  const [todo, setTodo] = useState<string>("");
  const [todoArr, setTodoArr] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodoArr([...todoArr, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };
  const onDragEnd = (result: DropResult) => {
    //console.log(result); if I log result will find two properties of destination and source. Destination has the index where it is placed and source has the index where it has come from.
    const { source, destination } = result;
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;
    let add;
    let active = todoArr;
    let complete = completedTodos;

    if (source.droppableId === "todoListDrop") {
      // from TodoList
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }
    if (destination.droppableId === "todoListDrop") {
      // from TodoList
      // if(source.droppabled === 'todosRemove') also works

      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }

    setCompletedTodos(complete);
    setTodoArr(active);
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="app">
        <span className="heading">Taskyfy</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList
          todoArr={todoArr}
          setTodoArr={setTodoArr}
          completedTodos={completedTodos}
          setCompletedTodos={setCompletedTodos}
        />
      </div>
    </DragDropContext>
  );
};

export default App;
