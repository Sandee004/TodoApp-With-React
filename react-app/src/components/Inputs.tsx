import React, { useState } from 'react'
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone, MdSave } from "react-icons/md";
interface Todo {
    id: number;
    todo: string;
    isDone: boolean;
}

const InputFields = ({id, todo, isDone}:Todo) => {
    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useState<Todo[]>([]);
    const [nextId, setNextId] = useState(1);
    const [editingTodo, seteditingTodo] = useState<Todo | null>(null);
    const [editingText, seteditingText] = useState('');
    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault()

        const newTodo: Todo = {
            id: nextId,
            todo: inputValue,
            isDone: false,
        }
        setTodos([...todos, newTodo])
        setNextId(nextId + 1)
        setInputValue('')
    }
    const handleMarkDone = (id:number) => {
        console.log("Completed")
        setTodos(prevTodos => prevTodos.map(todo =>
            todo.id === id ? {...todo, isDone: !todo.isDone} : todo
        ));
    }
    const handleDelete = (id:number) => {
        console.log("Deleted")
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    }
    const handleEditStart = (todo: Todo) => {
        seteditingTodo(todo);
        seteditingText(todo.todo);
    };
    const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        seteditingText(e.target.value);
    };
    const handleEditSave = () => {
        if (editingTodo) {
            const updatedTodos = todos.map(t =>
                t.id === editingTodo.id ? {...t, todo: editingText} : t
            );
            setTodos(updatedTodos);
            seteditingTodo(null);
            seteditingText('');
        }
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    required
                    className="border-black w-[80%] border-2 rounded-md p-2"
                    type="text"
                    placeholder="Enter a task"/>
                <button
                    className="bg-green-300 font-bold p-2 rounded-sm mx-2 hover:bg-green-400"
                    type="submit">Go</button>
            </form>
            <div className="Todo-list mt-5">
                {todos.length === 0 && <p>No tasks to show</p>}
                {todos.map((todo:Todo) => {
                    return (
                        <div className="bg-green-400 mb-4 w-[88%] flex justify-between rounded-md mx-auto text-left px-8 py-4">
                            {editingTodo && editingTodo.id === todo.id ? ( 
                            <input
                                    type="text"
                                    value={editingText}
                                    onChange={handleEditChange}
                                    className="border-black w-[80%] border-2 rounded-md p-2"
                                />
                            ) : (
                                // Normal display
                                <p 
                                    className="text-xl"
                                    style={{ textDecoration: todo.isDone ? 'line-through' : 'none' }} 
                                    onClick={() => handleMarkDone(todo.id)}
                                >
                                    {todo.todo}
                                </p>
                            )}
                            
                            <div className="icons flex flex-row gap-3 text-2xl">
                                <span onClick={() => handleEditStart(todo)}>
                                    <AiFillEdit />
                                </span>
                                <span onClick={() => handleDelete(todo.id)}>
                                    <AiFillDelete />
                                </span>
                                <span onClick={() => handleMarkDone(todo.id)}>
                                    <MdDone />
                                </span>
                                {editingTodo && editingTodo.id === todo.id && (
                                    <span onClick={handleEditSave}>
                                        <MdSave />
                                    </span>
                                )}
                            </div>
                        </div>
                        )
                })}
            </div>
        </>
    )
}

export default InputFields