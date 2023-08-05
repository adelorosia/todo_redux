import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter, todoAdded } from "../reducer/AppSlice";

const TopForm = () => {
  const [done, setDone] = useState(false);
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();
  const filter = useSelector(
    (state: { todo: { filter: string } }) => state.todo.filter
  );
  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter(event.target.value));
  };
  const addFilterToTheList = () => {
    if (filter !== "") {
      // setDone(false);
      // setTitle(filter);
      // console.log(title);
      const newList = { title, done };
      dispatch(todoAdded(newList));
      dispatch(setFilter(""));
    } else {
      return;
    }
  };

  useEffect(() => {
    setTitle(filter);
  }, [setTitle, filter]);

  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <h3 className="text-3xl font-bold text-RED mb-4">
        Welcome To my Todo App
      </h3>
      <div className="flex gap-4 bg-white w-full justify-between rounded-lg overflow-hidden">
        <input
          className="py-2 w-full outline-0 text-BACKGROUND px-2"
          type="text"
          value={filter}
          onChange={handleChangeInput}
        />
        <button
          className="text-BACKGROUND border-l bg-ORANGE px-3"
          onClick={addFilterToTheList}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default TopForm;
