import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Record from "./Record"
import RecordForm from './RecordForm'

const CollectorPage = ({ handleDelete }) => {
    const[recordForm, setRecordForm] = useState(false)
    const[collector, setCollector] = useState({})
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:9292/collectors/${id}`)
        .then(resp => resp.json())
        .then(data => setCollector(data))
    }, [])

    const removeCollection = () => {
        fetch(`http://localhost:9292/collectors/${id}`, {
            method: 'DELETE'
        })
        handleDelete(id)
        navigate('/collectors')     
    }
    
    const showRecordForm = () => {
        setRecordForm(true)
    }
    
    if (!collector.name) { 
        return <h2>Loading...</h2>
    }

    const records = collector.records.map(record => <Record record={record} />)

    return (
        
        <div className='collection-container'>
            <h2>{collector.name}</h2>
            <div>
                {recordForm ? <RecordForm /> : <button onClick={showRecordForm} className="bttn">Add Record</button>}
            </div>
            <div className='card-container'>
                {records}
            </div>
            <button className='bttn' onClick={removeCollection}>Delete Collection</button>
        </div>
    )
}

export default CollectorPage

