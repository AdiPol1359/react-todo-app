import './TodoTasks.css';
import Task from './Task/Task';

const TodoTasks = ({ tasks, completeClick, deleteClick }) => {

    const todoTasks = tasks.map(task => (
        <Task key={task.id} id={task.id} name={task.name} time={task.time} important={task.important} completeClick={completeClick} deleteClick={deleteClick}/>
    ))

    return (
        <div className="todo_tasks">
            <h1>Zadania do zrobienia</h1>

            {todoTasks}
        </div>
    )
}

export default TodoTasks;