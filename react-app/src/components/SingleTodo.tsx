

interface Todo {
    title: string;
    completed: boolean;
}
interface Props {
    todo: Todo
    todos: Todo[]
}
const SingleTodo = ({todos}:Props) => {
    return (
        <div>
            <p>List of Tasks</p>
            {todos.map((todo, index) => (
                <p key={index}>{todo.title}</p>
            ))}
        </div>
    )
}

export default SingleTodo