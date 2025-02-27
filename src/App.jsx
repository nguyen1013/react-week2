import { useState } from 'react'
import NameInput from './components/NameInput.JSX'  
import Greeting from './components/Greeting'
import Weekday from './components/Weekday'

function App() {
  const [name, setName] = useState("")

  const handleChange = (e) => {
    setName(e.target.value)
  }

  return (
    <>
      <Greeting name={name} />
      <NameInput name={name} handleChange={handleChange} />
      <hr></hr>
      <Weekday />
    </>
  )
}

export default App
