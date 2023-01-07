import React, { useRef } from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

// const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
//   const inputRef = useRef<HTMLInputElement>(null);

//   return (
//     <form action="" className="input" onSubmit={(e)=> {handleAdd(e)
//       inputRef.current?.blur();
//     }}>
//       <input
//         ref={inputRef}
//         type="input"
//         value={todo}
//         placeholder="Enter a task"
//         className="input__box"
//         onChange={(e) => setTodo(e.target.value)}
//       />
//       <button type="submit" className="input__submit">
//         Go
//       </button>
//     </form>
//   );
// };

// export default InputField;

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <form
        className="input"
        onSubmit={(e) => {
          handleAdd(e);
          inputRef.current?.blur();
        }}
      >
        <input
          type="input"
          className="input__box"
          placeholder="Enter A Task"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit" className="input__submit">
          Go
        </button>
      </form>
    </>
  );
};

export default InputField;
