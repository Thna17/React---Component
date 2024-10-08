// import Table from "../components/Table"
import SortableTable from "../components/SortableTable";
const TablePage = () => {
    const data = [
        { name: 'Apple', color:'bg-red-500', score:3},
        { name: 'Orange', color: 'bg-orange-300', score:5},
        { name: 'Banana', color: 'bg-yellow-500', score: 4}
    ]
    const config = [
        {
            label: 'Name',
            render: (fruit) => fruit.name,
            sortValue: (fruit) => fruit.name
         },
        { 
            label: 'Color',
            render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>
            
        },
        { 
            label: 'Score',
            render: (fruit) => fruit.score,
            sortValue: (fruit) => fruit.score
           
        }, 
        {
            label: 'Score Squared',
            render: (fruit) => fruit.score ** 2,
            sortValue: (fruit) => fruit.score ** 2
        }
        
    ];

    const keyFn = (fruit) => {
        return fruit.name
    }
    return (
        <div>      
            <SortableTable data={data} config={config} keyFn={keyFn}/>
        </div>
    )
}

export default TablePage