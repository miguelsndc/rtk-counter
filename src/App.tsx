import { ChangeEvent, useState } from 'react'
import {
  decrement,
  increment,
  incrementByValue,
  useAppDispatch,
  useAppSelector,
} from './store'

function App() {
  const counter = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()

  const [value, setValue] = useState(2)

  function handleValueChange(e: ChangeEvent<HTMLInputElement>) {
    const value = +e.target.value

    if (!isNaN(value)) {
      setValue(value)
    } else {
      alert('Type a valid number')
    }
  }

  return (
    <div className='w-full max-w-screen h-screen flex flex-col items-center justify-center p-2'>
      <h1 className='text-gray-900 text-8xl'>{counter}</h1>
      <footer className='flex flex-col gap-4 mt-8  w-full max-w-lg'>
        <div className='flex flex-col gap-4 xs:flex-row'>
          <button
            onClick={() => dispatch(decrement())}
            className='w-full max-w-32 py-3 bg-indigo-600 rounded text-white'
          >
            Decrement
          </button>
          <button
            onClick={() => dispatch(increment())}
            className='w-full max-w-32 py-3 bg-indigo-600 rounded text-white'
          >
            Increment
          </button>
          <button
            onClick={() => dispatch(incrementByValue(value))}
            className='w-full max-w-32 py-3 bg-indigo-600 rounded text-white'
          >
            Increment by {value}
          </button>
        </div>
        <input
          className='border border-indigo-400 rounded p-2'
          type='text'
          value={value}
          onChange={handleValueChange}
        />
      </footer>
    </div>
  )
}

export default App
