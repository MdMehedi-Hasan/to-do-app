import './App.css';
import Login from './Login';
import PerTask from './PerTask';

function App() {
  // dev
  // vGbRLmLifGeMrwT8
  const handleSubmit = (e) => {
    e.preventDefault();
    const taskName = e.target.title.value;
    const description = e.target.description.value;
    const data = { taskName, description }
    fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
  }
  return (
    <div className="App">
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
                  <input name='title' type="text" placeholder="Task title" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Description</span>
                  </label>
                  <textarea name="description" id="" cols="30" rows="10" className="input input-bordered"></textarea>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Add task</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-4 gap-5'>
        <PerTask></PerTask>
      </div>
      {/* <Login></Login> */}
    </div>
  );
}

export default App;
