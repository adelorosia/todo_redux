import { createSlice, nanoid } from "@reduxjs/toolkit";

export interface ITodo {
  id: string;
  title: string;
  done: boolean;
}

export interface IAppState {
  todo: ITodo[];
  filter: string;
}

const initialState: IAppState = {
  filter: "",
  todo: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },

    todoAdded:(state,action)=>{
        const {title,done}=action.payload
        state.todo.push({
          id: nanoid(),
          title,
          done,
        });
    }
  },
});

export const { setFilter, todoAdded } = todoSlice.actions;
export default todoSlice.reducer;
