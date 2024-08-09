import Dropdown from "../components/Dropdown"
import { useState } from "react"
const DropdownPage = () => {
    const [selection, setSelection] = useState(null);

    const handleSelect = (option) => {
        setSelection(option)
    }

    const options = [
        { label: 'Red', value: 'red' }, 
        { label: 'Green', value: 'green' },
        { label: 'Yellow', value: 'yellow' },
    ]
  return (
    <div className="flex">
        <Dropdown options={options} value={selection} onChange={handleSelect}/>
    </div>
  )
}

export default DropdownPage