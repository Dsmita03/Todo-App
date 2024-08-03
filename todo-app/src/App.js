import React from 'react'
import { useState } from 'react'
import { IoMdAdd } from 'react-icons/io'
import { MdOutlineClose } from 'react-icons/md'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './styles.css'
import './global.css'

function App() {
  const [task, setTask] = useState('')  
  const [tasks, setTasks] = useState([])  

  function handleCreateTask() {
    if (task === '') {
       
      toast.error('Adding a task')
    } else {
      
      const idRandom = num => Math.floor(Math.random() * num)
      const newTask = { id: idRandom(9000000), title: task, isComplete: false }

      setTasks([...tasks, newTask])
      setTask('')
    }
  }

   

  function handleToggleTaskCompletion(id) {
    const taskComplete = tasks.map(task => {
      if (task.id === id) {
        return { ...task, isComplete: !task.isComplete }
      }
      return task
    })
    setTasks(taskComplete)
  }
   
  function handleDeleteTask(id) {
    setTasks(tasks.filter(remove => remove.id !== id))
  }

  return (
    <div className="app">
      <ToastContainer />

      <div className="todo">
        {/* Here is the input*/}

        <header>
          <input
            type="text"
            placeholder="Add a task "
            value={task}
            onChange={ev => setTask(ev.target.value)}
          />
          <button onClick={handleCreateTask}>
            <IoMdAdd />
          </button>
        </header>

        
        {tasks.map(task => (
          <div
            key={task.id}
            className={
              task.isComplete ? 'task-container completed' : 'task-container'
            }
          >
          
            <div className="check-and-title">
              <label className="checkbox-container">
                <input
                  type="checkbox"
                  onClick={() => handleToggleTaskCompletion(task.id)}
                />
                <span className="checkmark"></span>
              </label>
              <p>{task.title}</p>
            </div>
            <div>
              <MdOutlineClose onClick={() => handleDeleteTask(task.id)} />
            </div>
          </div>
        ))}
        
      </div>
    </div>
  )
}

export default App