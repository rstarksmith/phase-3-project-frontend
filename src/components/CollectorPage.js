import { useState } from 'react'
import Record from "./Record"
import RecordForm from './RecordForm'

const CollectorPage = ({ collector }) => {
    const[recordForm, setRecordForm] = useState(false)
    // const[records, setRecords] = useState([])

    // const displayRecords = collectors.map(collector => {
    //     return(records.map(record => <Record key={record.id} record={record} />)
    //     )})
    const showRecordForm = () => {
        setRecordForm(true)
    }

    return (
        <div>
            <h2>{collector}</h2>
            {recordForm ? <RecordForm /> : <button onClick={showRecordForm} className="bttn">Add Record</button>}
            {/* <div>{displayRecords}</div> */}
            <br/>
            <button className='bttn'>Delete Collection</button>
        </div>
    )
}

export default CollectorPage