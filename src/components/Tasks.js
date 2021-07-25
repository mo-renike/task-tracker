const tasks = [
    {
        id: 1,
        Text: 'Doctors Apointment',
        day: 'Jul 12th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        Text: 'Tailors Apointment',
        day: 'Jul 12th at 5:30pm',
        reminder: true,
    },
    {
        id: 1,
        Text: 'Band rehearsals',
        day: 'Mar 22th at 12:30am',
        reminder: false,
    },
]


const Tasks = () => {
    return (
        <>
            {tasks.map((task) => (<h3>{task.text}</h3>))}
        </>
    )
}

export default Tasks
