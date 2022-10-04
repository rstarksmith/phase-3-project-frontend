import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Record from "./Record"
import RecordForm from './RecordForm'

const CollectorPage = () => {
    const[recordForm, setRecordForm] = useState(false)
    const[collector, setCollector] = useState({})
    const { id } = useParams()

    useEffect(() => {
        fetch(`http://localhost:9292/collectors/${id}`)
        .then(resp => resp.json())
        .then(data => setCollector(data))
    }, [])
    
    
    const showRecordForm = () => {
        setRecordForm(true)
    }
    
    if (!collector.name) { 
        return <p>loading...</p>
    }

    const records = collector.records.map(record => <Record record={record} />)

    return (
        
        <div>
            <h2>{collector.name}</h2>
            <div>
                {recordForm ? <RecordForm /> : <button onClick={showRecordForm} className="bttn">Add Record</button>}
            </div>
            <div>
                {records}
            </div>

            <button className='bttn'>Delete Collection</button>
        </div>
    )
}

export default CollectorPage


// const displayRecords = collectors.map(collector => {
    //     return(records.map(record => <Record key={record.id} record={record} />)
    //     )})