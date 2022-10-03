import { useEffect, useState } from 'react'
import Record from "./Record"
import RecordForm from './RecordForm'

const CollectorPage = () => {
    const[recordForm, setRecordForm] = useState(false)


    // const displayRecords = collectors.map(collector => {
    //     return(records.map(record => <Record key={record.id} record={record} />)
    //     )})
    const showRecordForm = () => {
        setRecordForm(true)
    }

    return (
        <div>
            <h2>hello</h2>
            <div>
            {recordForm ? <RecordForm /> : <button onClick={showRecordForm} className="bttn">Add Record</button>}
            </div>
            <br/>
            <button className='bttn'>Delete Collection</button>
        </div>
    )
}

export default CollectorPage