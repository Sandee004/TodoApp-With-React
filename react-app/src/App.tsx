import  InputFields  from './components/Inputs'


interface Todo{
  id: number;
  todo: string;
  isDone: boolean;
}
const App = ({id, todo, isDone}:Todo) => {

  return (
    <div className="text-center">
      <p className="text-xl mb-9 py-3 bg-green-400 font-bold ">Taskifi</p>
      <InputFields id={id} todo={todo} isDone={isDone} />
    </div>
  )
}

export default App

