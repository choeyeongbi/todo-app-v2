import { useContext } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { TaskProvider ,TaskContext } from './apis/Context';
import Header from './components/Header';
import Footer from './components/Footer';
import Index from './components/Index';
import TaskList from './components/TaskList';
import NotFound from './page/NotFound';


function App() {
const test = useContext(TaskContext)

  console.log('====================================');
  console.log(test);
  console.log('====================================');
  return (
    <TaskProvider>
      <BrowserRouter>
        <div className='App'>
          <Header />

          <Switch>
            <Route exact path='/' component={Index} />
            <Route
              exact
              path='/tasklist'
              render={(props) => <TaskList {...props} />}
            />
            <br />
            <br />
            <br />
            <br />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </TaskProvider>
  );
}

export default App;
