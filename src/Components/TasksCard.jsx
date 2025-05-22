import React from 'react';

const TasksCard = ({task}) => {
    const {name}=task
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default TasksCard;