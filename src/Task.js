import React, { useEffect, useState } from 'react';
import PerTask from './PerTask';

const Task = () => {
    const [tasks, setTasks] = useState([])
  const [render, setRender] = useState(false);
  const [remove, setRemove] = useState(false);
  useEffect(() => {
    fetch('https://pure-temple-53670.herokuapp.com/tasks')
      .then(res => res.json())
      .then(data => setTasks(data))
  }, [render, remove])
  const handleSubmit = (e) => {
    e.preventDefault();
    const taskName = e.target.title.value;
    const description = e.target.description.value;
    const data = { taskName, description }
    fetch('https://pure-temple-53670.herokuapp.com/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        setRender(!render)
      })
      e.target.reset();
  }
  const handleDelete = (id) => {
    fetch(`https://pure-temple-53670.herokuapp.com/tasks/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    })
      .then(response => response.json())
      .then(data => {
        setRemove(!remove)
        console.log('Success:', data);
      })
    console.log('deleted', id)
  }
  const taskComplete = (data) => {
    console.log(data)
    alert(`${data.taskTitle} Task Completed!`)
  }
    
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="font-bold text-2xl">To-Do App</h1>
                            <form onSubmit={handleSubmit}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Task name</span>
                                    </label>
                                    <input required name='title' type="text" placeholder="Task title" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Description</span>
                                    </label>
                                    <textarea required name="description" id="" cols="30" rows="10" className="input input-bordered"></textarea>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Add task</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid lg:grid-cols-4 grid-cols-2 gap-5'>
                {
                    tasks.map(task => <PerTask key={task._id} task={task} func={() => handleDelete(task._id)} complete={() => taskComplete(task)}></PerTask>)
                }
            </div>
        </div>
    );
};

export default Task;