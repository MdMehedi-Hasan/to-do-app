import React from 'react';

const PerTask = ({ task, func,complete }) => {
    const {taskTitle,description,_id} =task
    return (
        <div className="card w-50 bg-base-100 shadow-xl">
            <div className="card-body ">
                <h2 className="card-title justify-center">{taskTitle}</h2>
                <p>{description}</p>
                <div className="card-actions justify-center">
                    <button onClick={() => func(_id)} className="btn btn-primary">Delete Task</button>
                    <button onClick={()=>complete(task)} className="btn btn-primary">Task Completed</button>
                    
                </div>
            </div>
        </div>
    );
};

export default PerTask;