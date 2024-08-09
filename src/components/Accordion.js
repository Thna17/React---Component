import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

const Accordion = ({ items }) => {
    const [expandedIndex, setExpandedIndex] = useState(-1);

    const handleClick = (index) => {
        if (expandedIndex === index) {
            setExpandedIndex(-1);
        } else {
            setExpandedIndex(index);
        }
    };
    const renderedItems = items.map((items, index) => {
        const isExpanded = index === expandedIndex;

        const icon = <span className='text-xl'>
            {isExpanded ? <GoChevronDown /> : <GoChevronLeft/>}
        </span>
      
        return (
            <div key={items.id}>
                <div className='flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer' onClick={() => handleClick(index)}>
                    {items.label}
                    {icon}
                    </div>
                {isExpanded && <div className='border-b p-5'>{items.content}</div>}
            </div>
        )
    } )
    return (
        <div className='border-x border-t rounded'>{renderedItems}</div>
    )
}


export default Accordion;