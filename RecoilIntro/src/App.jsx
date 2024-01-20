import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import './App.css'
import { countAtom } from './store/atoms/count';

function App() {
  
  
  // Recoil
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  )
}

function Count() {
  return <div>
    <CountRenderer />
    <Buttons />
  </div>
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);

  return <div>
    {count}
    <EvenCountRenderer />
  </div>
}

function EvenCountRenderer() {
  
}

function Buttons() {
  
  const [count, setCount] = useRecoilState(countAtom);

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