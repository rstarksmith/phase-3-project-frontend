// import { useState } from 'react'
import Record from "./Record"

const CollectorPage = ({ collector }) => {
    // const[records, setRecords] = useState([])

    // const displayRecords = collectors.map(collector => {
    //     return(records.map(record => <Record key={record.id} record={record} />)
    //     )})
    

    return (
        <div>
            <h2>{collector}</h2>
            <button>add record</button>
            {/* <div>{displayRecords}</div> */}
            <button>Delete Collection</button>
        </div>
    )
}

export default CollectorPage