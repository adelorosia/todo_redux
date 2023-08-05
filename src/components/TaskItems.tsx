import { AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { ITodo, todoDeleted } from "../reducer/AppSlice";
import { useDispatch, useSelector } from "react-redux";

const TaskItems = () => {
  const dispatch = useDispatch();
  const todos = useSelector(
    (state: { todo: { todo: ITodo[] } }) => state.todo.todo
  );
  const handleDeleteItem = (id: string) => {
    if (todos) {
      dispatch(todoDeleted({ id: id }));
    } else return;
  };
  return (
    <ul className="flex flex-col gap-4">
      {todos.map((todo) => (
        <div
          className="odd:bg-slate-400 even:bg-slate-500 py-2 px-5 rounded-lg text-BACKGROUND"
          key={todo.id}
        >
          <li className="flex justify-between">
            {todo.title}
            <span className="flex gap-4 items-center">
              <AiFillEdit className="text-ORANGE text-xl cursor-pointer" />
              <BsFillTrashFill
                className="text-RED text-xl cursor-pointer"
                onClick={() => handleDeleteItem(todo.id)}
              />
            </span>
          </li>
        </div>
      ))}
    </ul>
  );
};

export default TaskItems;
