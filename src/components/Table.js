import { Fragment } from "react";
const Table = ({ data, config, keyFn }) => {
    const renderedHeader = config.map((col) => {
        if (col.header) {
            return <Fragment key={col.label}>{col.header()}</Fragment>;
        }
        return (
            <th key={col.label}>{col.label}</th>
        )
    })


    const renderedRows = data.map((rowData) => {
        const renderedCell = config.map((col) => {
            return (
                <td className="p-2" key={col.label} >{col.render(rowData)}</td>
            )
        })
        return (
            <tr className="border-b" key={keyFn(rowData)} >
                {renderedCell}
            </tr>
        )
    })

    return (
        <table className="table-auto border-spacing-2" >
            <thead>
                <tr className="border-b-2">
                   {renderedHeader}
                </tr>
            </thead>
            <tbody>
                {renderedRows}
            </tbody>
        </table>
    )
}

export default Table