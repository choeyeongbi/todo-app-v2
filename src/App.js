import { useContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { useTaskState, useTaskDispatch, TaskProvider } from './apis/Context';
import Header from './components/Header';
import Footer from './components/Footer';
import Index from './components/Index';
import TaskList from './components/TaskList';
import NotFound from './page/NotFound';

function App() {
  const state = useTaskState();
  const dispatch = useTaskDispatch();

  console.log('====================================');
  console.log('App() state, dispatch : ', state, dispatch);
  console.log('====================================');
  return (
    <TaskProvider>
      <Router>
        <div className='App'>
          <Header />

          <hr />
          <br />
          <br />
          <br />
          <br />
          <Switch>
            <Route exact path='/' component={Index} />
            <Route
              exact path='/tasklist'
              component={TaskList}
            />
          
            <Route component={NotFound} />
          </Switch>
          <br />
          <br />
          <br />
          <br />
          <hr />
          <Footer />
        </div>
      </Router>
    </TaskProvider>
  );
}

export default App;
