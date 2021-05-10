import { createContext, useState } from 'react';
const TaskContext = createContext({
  state: {
    id: '',
    text: '',
    date: '',
    reminder: false,
  },
  actions: {
      setId:()=>{},
      setText:()=>{},
      setDate:()=>{},
      setReminder:()=>{}
},
});

const TaskProvider = ({ children }) => {
  const [id, setId] = useState('1');
  const [text, setText] = useState('test');
  const [date, setDate] = useState('2021-05-10');
  const [reminder, setReminder] = useState(false);

  console.log('TaskProvider()')
  console.log('id>',id);
  console.log('text>',text);
  console.log('date>',date);
  console.log('reminder>',reminder);
  console.log("children > ",children)

const value = {id, text, date ,reminder};

const actions = {setId ,setText ,setDate ,setReminder};

  return <TaskContext.Provider value={{value}} actions={actions}>{children}</TaskContext.Provider>
};

export { TaskProvider, TaskContext };
