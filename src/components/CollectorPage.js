import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Record from "./Record"
import RecordForm from './RecordForm'
import RecordEditForm from './RecordEditForm'

const CollectorPage = ({ handleDelete }) => {
    const[recordForm, setRecordForm] = useState(false)
    const[editForm, setEditForm] = useState(false)
    const[collector, setCollector] = useState({})
    const[recordID, setRecordID] = useState(false)
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:9292/collectors/${id}`)
        .then(resp => resp.json())
        .then(data => setCollector(data))
    }, [id])

    const removeCollection = () => {
        fetch(`http://localhost:9292/collectors/${id}`, {
            method: 'DELETE'
        })
        .then(resp => resp.json())
        .then(data => handleDelete(data.id))
        navigate('/collectors')     
    }

    const handleDeleteRecord = (deletedRecord) => {
        const updatedRecords = collector.records.filter(record => record.id !== deletedRecord)
        setCollector((prevState) => ({...prevState, records: updatedRecords }))
    }
    
    const handleAddRecord = (newRecord) => {
        const addNewRecord = [ ...collector.records, newRecord ]
        setCollector((prevState) => ({...prevState, records: addNewRecord }))
        setRecordForm(false)
    }

    const handleUpdateRecord = (updatedRecord) => {
        const editedRecords = collector.records.map(record => {
            if(record.id === updatedRecord.id) {
                return updatedRecord
            } else {
                return record
            }  
        })
        setCollector((prevState) => ({...prevState, records: editedRecords}))
        setEditForm(false)
    }

    // captured edit record id
    const showEditForm = (editedRecordID) => {
        setEditForm(true)
        setRecordID(editedRecordID)
    }
    

    const showRecordForm = () => {
        setRecordForm(true)
    }
    
    if (!collector.name) { 
        return <h2>Loading...</h2>
    }

    const records = collector.records.map(record => <Record record={record} key={record.id} handleDeleteRecord={handleDeleteRecord} showEditForm={showEditForm}/>)
    
    return (
        
        <div className='collection-container'>
            <div>
                {editForm ? <RecordEditForm recordID={recordID} handleUpdateRecord={handleUpdateRecord} /> : <img src=' ' alt='records'/>}
            </div>
            <h2>{collector.name}</h2>
            <div>
                {recordForm ? <RecordForm collector={collector} handleAddRecord={handleAddRecord} /> : <button onClick={showRecordForm} className="bttn">Add Record</button>}
            </div>
            <div className='card-container'>
                {records}
            </div>
            <div> 
                <button className='bttn' onClick={removeCollection}>Delete Collection</button>  
            </div>
        </div>
    )
}

export default CollectorPage

