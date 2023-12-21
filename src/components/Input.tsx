

type Input={
  inputValue:string;
  setInputvalues:React.Dispatch<React.SetStateAction<string>> 
}

const Input = ({inputValue,setInputvalues}) => {
  return (
    <input
    value={inputValue}
    onChange={(event) => setInputvalues(event.target.value)}
    type="text"
    className="border "
  />
  )
}

export default Input
