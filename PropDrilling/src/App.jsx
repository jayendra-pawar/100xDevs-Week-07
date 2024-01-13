import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Count count={count} setCount={setCount} />
      {/* <Buttons count={count} setCount={setCount} /> */}
      // Prop Drilling 
      // Solution Prop Drilling
          0
        /  \
      *     0
              \
                * (prop required here)
    </div>
  )
}

function Count({count, setCount}) {
  return <div>
    {count}
    <Buttons count={count} setCount={setCount} />
  </div>
}

function Buttons({count, setCount}) {
  return <div>
    <button onClick={() => {
      setCount(count+1)
    }}>Increase</button>
    <button onClick={() => {
      setCount(count-1)
    }}>Decrease</button>
  </div>
}
export default App
