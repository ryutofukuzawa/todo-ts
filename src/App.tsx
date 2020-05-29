import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TaskList from './components/TaskList'
import TaskInput from './components/TaskInput';
import { Task } from './components/Types';

const initialState: Task[] = [
  {
    id: 2,
    title: '2nd',
    done:false
  },{
    id: 1,
    title: '1st',
    done:false
  }
]

const App: React.FC = () => {
  const [tasks,setTasks] = useState(initialState)

  return(
    <div>
      <TaskInput setTasks={setTasks} tasks={tasks} />
      <TaskList  setTasks={setTasks} tasks={tasks} />
    </div>
  )
}

export default App;
