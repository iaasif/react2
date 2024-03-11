import './App.css'
import Counter from './count'
import Users from './users'
import Friends from './Friends'

function App() {
  function handleButton() {
    alert("clickeddddddddd")
  }
  return (
    <>
      <h3 >React 2 yoo</h3>
      <Users></Users>
      <Counter></Counter>
      <button onClick={handleButton}>click me bro </button>
      <Friends></Friends>

    </>
  )
}

export default App
