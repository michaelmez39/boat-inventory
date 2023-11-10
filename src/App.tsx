import './App.css'
import { create } from 'zustand'

const exampleTodos: Todo[] = [
  {
    task: "Cypress Presentation",
    active: false,
    key: 0
  },
  {
    task: "Relaxation",
    active: true,
    key: 1
  }
]

type Todo = {
  task: string
  active: boolean
  key: number
}

const TodoItem = ({ todo }: { todo: Todo }) => {
  const { removeTodo, toggleActive } = useTodoStore()

  const activeClass = todo.active ? '' : 'text-slate-500 line-through'
  return (
    <li key={todo.key} className='flex card items-center content-center p-2'>
      <button className='p-2' onClick={() => toggleActive(todo.key)}>{todo.active ? '☐ ' : '🗹 '}</button>
      <span className={activeClass}>{todo.task}</span>
      <div className='grow text-right'>
        <button className='cursor-pointer' onClick={() => removeTodo(todo.key)}>🞩</button>
      </div>
    </li>
  )
}

const TodoContainer = () => {
  const { todos, showState } = useTodoStore()
  let filteredTodos = todos
  if (showState === 'ACTIVE') filteredTodos = todos.filter(todo => todo.active)
  if (showState === 'COMPLETED') filteredTodos = todos.filter(todo => !todo.active)
  return (
    <div className='flex flex-col gap-y-2'>
      <TodoMaker />
      {filteredTodos.length === 0 ?
        <p>Add a todo to get started!</p>
        : filteredTodos.map(todo => <TodoItem todo={todo} />)
      }
    </div>
  )
}

const Controls = () => {
  const { setShowing, clearCompleted, showState } = useTodoStore()
  const activeShowState = (showing: ShowState) => showing === showState ? 'font-bold' : 'underline'
  return (
    <>
      <div className='flex flex-row justify-between text-sm my-2'>
        <button className={activeShowState('ALL')} onClick={() => setShowing('ALL')}>Show All</button>
        <button className={activeShowState('ACTIVE')} onClick={() => setShowing('ACTIVE')}>Show Incomplete</button>
        <button className={activeShowState('COMPLETED')} onClick={() => setShowing('COMPLETED')}>Show Finished</button>
      </div>
      <button onClick={clearCompleted}>Clear Completed</button>
    </>
  )

}

const TodoMaker = () => {
  const { addTodo, showState, setShowing } = useTodoStore()
  const addTodoOnEnter = (e: any) => {
    if (e.key === 'Enter') {
      addTodo(e.target.value)
      if (showState === 'COMPLETED') setShowing('ALL')
      e.target.value = ''
    }
  }

  return <input type='text' className='bg-blue-950' placeholder='Add a todo item...' onKeyDown={addTodoOnEnter} />
}

type ShowState = 'ACTIVE' | 'COMPLETED' | 'ALL'

interface TodoState {
  todos: Todo[]
  key: number
  showState: ShowState
  addTodo: (todo: string) => void
  removeTodo: (idx: number) => void
  clearCompleted: () => void
  toggleActive: (idx: number) => void
  setShowing: (showing: ShowState) => void
}

const useTodoStore = create<TodoState>()(set => ({
  todos: exampleTodos,
  key: exampleTodos.length,
  showState: 'ALL',
  addTodo: task => set(state => ({
    todos: [{ task, active: true, key: state.key }, ...state.todos,],
    key: state.key + 1
  })),
  removeTodo: key => set(state => ({
    todos: state.todos.filter(todo => todo.key !== key)
  })),
  clearCompleted: () => set(state => ({
    todos: state.todos.filter(todo => todo.active)
  })),
  toggleActive: key => set(state => ({
    todos: state.todos.map(todo => {
      if (todo.key === key) {
        return { ...todo, active: !todo.active }
      } else {
        return todo
      }
    })
  })),
  setShowing: showing => set({ showState: showing })
}))

function App() {
  return (
    <>
      <h2 className='text-3xl text-center'>Todos</h2>
      <TodoContainer />
      <Controls />
    </>
  )
}

export default App
