import { useState, useEffect } from 'react';
import { useTaskState } from '../apis/Context';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Task from './Task';

const TaskList = ({history}) => {
  const tasks = useTaskState();

  console.log('TaskList() tasks -->', tasks);
console.log('TaskList() history:',history);
  // const [tasks, setTasks] = useState([]);

  return (
    <div>
      <h1>----------- TASK list PAGE ----------- </h1>
      <Router>
        {/* map으로 구현  */}
        {tasks.map((task, i) => (
          <li>
             {/* <Link key={task + i} to={`/task/${task.id}`}>
              Task
            </Link>
            <Route key={i}  path={`/task/${task.id}`} component={Task} />  */}
            <Task
              key={task + i + 1}
              id={task.id}
              text={task.text}
              reminder={task.reminder}
              history={history}
            />
          </li>
        ))}
      </Router>
    </div>
  );
};

export default TaskList;
