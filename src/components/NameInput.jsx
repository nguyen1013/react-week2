import Greeting from "./Greeting"

function NameInput({name, handleChange}) {

  return (
    <>
      <input 
        type="text" 
        placeholder="Input name..."
        value={name}
        onChange={handleChange}
      />
    </>
  )
}
export default NameInput