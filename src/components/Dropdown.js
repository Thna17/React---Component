
import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";
const Dropdown = ({ options, value, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const divEl = useRef();
    useEffect(() => {
        const handler = (event) => {console.log(divEl)} ;
        document.addEventListener('click', handler, true);
        return () => {
            document.removeEventListener('click', handler);
        }
    },[]);
    const handleClick = () => {
        setIsOpen(!isOpen);
    }
    const handleOptionClick = (option) => { 
        // Close the dropdown
        setIsOpen(false);

        // What option did the user click?
        onChange(option);
    };
    const renderedOptions = options.map((option) => {
        return <div className="hover:bg-sky-100" onClick={() => handleOptionClick(option)} key={option.value}>{option.label}</div>
    });

 

    return (
        <div ref={divEl} className="w-48 relative">
            <Panel 
            className="flex justify-between items-center cursor-pointer" 
            onClick={handleClick}>{value?.label || 'Select...'}
            <GoChevronDown className="text-lg"/>
            </Panel>
            {isOpen && <Panel className="absolute top-full ">{renderedOptions}</Panel>}
        </div>
    )
}

export default Dropdown;