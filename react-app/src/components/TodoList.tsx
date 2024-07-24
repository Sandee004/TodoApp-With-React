
interface Todo{
    id: number;
    todo: string;
    isDone: boolean;
}
interface Props {
    todos: Todo[]
}
const ListOfTodos = ({todos}:Props) => {
    return (
        <div>
            {todos.map((todo:Todo) => {
                return <p>{todo.todo}</p>
        })}
        </div>
    )
}

export default ListOfTodos

