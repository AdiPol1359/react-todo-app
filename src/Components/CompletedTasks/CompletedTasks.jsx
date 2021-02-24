import './CompletedTasks.css';
import Task from './Task/Task';

const CompletedTasks = ({ tasks, click}) => {

    const completedTasks = tasks.map(task => (
        <Task key={task.id} id={task.id} name={task.name} time={task.time} completedDate={task.completedDate} completedTime={task.completedTime} click={click}/>
    ));

    return(
        <div className="completed_tasks">
            <h2>Zadania zrobione ({tasks.length})</h2>

            {completedTasks}
        </div>
    )
}

export default CompletedTasks;