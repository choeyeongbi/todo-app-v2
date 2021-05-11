import { createContext, useState, useReducer ,useContext} from 'react';

const initialState = [
  {
    id: 1,
    text: 'what is todays dinner?',
    date: '2021-05-11',
    reminder: true,
  },
  {
    id: 2,
    text: 'watching youtube',
    date: '2021-05-12',
    reminder: false,
  },
  {
    id: 3,
    text: 'meeting gambi!!',
    date: '2021-07-11',
    reminder: true,
  },
];

const taskReducer = (state, action) => {


  console.log('taskReducer>',state, action)
  // switch(action.type) {
  //   case 'CREATE': return state.concat(action.)
  // }

};

const TaskContext = createContext();
const TaskDispatchContext = createContext();

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <TaskContext.Provider value={state}>
      <TaskDispatchContext.Provider value={dispatch}>
        {children}
      </TaskDispatchContext.Provider>
    </TaskContext.Provider>
  );
};

export const useTaskState=()=>{
 return useContext(TaskContext);
}

export const useTaskDispatch=()=>{
  return useContext(TaskDispatchContext);
}