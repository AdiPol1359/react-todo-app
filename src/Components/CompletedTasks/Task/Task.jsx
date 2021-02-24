const Task = ({ id, name, time, completedDate, completedTime, click }) => (
    <div style={{
        marginBottom: 10
    }}>
        <div>
            <span className="name">{name}</span>
            <span className="time"> (zrobić do {time})</span>
        </div>
        <div>
            <span className="confirm">- potwierdzenie wykonania {completedDate}, {completedTime} </span>
            <button onClick={() => click(id)}>X</button>
        </div>
    </div>
)

export default Task;