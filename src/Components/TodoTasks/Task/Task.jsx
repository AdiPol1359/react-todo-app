import React from 'react';
import './Task.css';

const Task = ({ id, name, time, important, completeClick, deleteClick }) => (
    <div className='task'>
        <span className={important ? 'name important' : 'name'}>{name}</span>-
        <span> do {time} </span>
        <button onClick={() => completeClick(id)}>Zostało zrobione</button>
        <button onClick={() => deleteClick(id)}>X</button>
    </div>
);

export default Task;