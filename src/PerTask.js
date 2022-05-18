import React from 'react';

const PerTask = () => {
    return (
        <div class="card w-50 bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title">Task name</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Delete Task</button>
                </div>
            </div>
        </div>
    );
};

export default PerTask;