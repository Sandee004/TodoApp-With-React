interface Props {
    todo: Todo
    todos: Todo[]
}
const SingleTodo = ({todo, todos}:Props) => {
    return (
        <div>
            <p>List of Tasks</p>
            <p>{todos}</p>
        </div>
    )
}

export default SingleTodo