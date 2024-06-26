
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
                <p>{todos.todo}</p>
            }}
        </div>
    )
}

export default ListOfTodos