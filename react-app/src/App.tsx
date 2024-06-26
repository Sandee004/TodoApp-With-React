import { useState } from 'react'
import  InputFields  from './components/Inputs'
import SingleTodo from './components/SingleTodo'

interface Todo{
  id: number;
  todo: string;
  isDone: boolean;
}
function App({id, todo, isDone}:Todo) {
  //const [count, setCount] = useState(0)

  return (
    <div className="text-center">
      <p className="text-xl mb-9 py-3 bg-green-400 font-bold ">Taskifi</p>
      <InputFields id={id} todo={todo} isDone={isDone} />
      
    </div>
  )
}

export default App
