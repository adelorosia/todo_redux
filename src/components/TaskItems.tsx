import { AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { ITodo } from "../reducer/AppSlice";
import { useSelector } from "react-redux";

const TaskItems = () => {
  const todos = useSelector(
    (state: { todo: { todo: ITodo[] } }) => state.todo.todo
  );

  return (
    <ul className="flex flex-col gap-4">
      {todos.map((todo) => (
        <div key={todo.id}>
          <li className="flex justify-between odd:bg-slate-400 even:bg-slate-500 py-2 px-5 rounded-lg text-BACKGROUND">
            {todo.title}
            <span className="flex gap-4 items-center">
              <AiFillEdit className="text-ORANGE text-xl" />
              <BsFillTrashFill className="text-RED text-xl" />
            </span>
          </li>
        </div>
      ))}
    </ul>
  );
};

export default TaskItems;
