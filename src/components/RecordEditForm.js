import { useEffect, useState } from 'react'

const RecordEditForm = ({ recordID, handleUpdateRecord  }) => {
    // can I leave out the collector id because it wont change?
    const[editFormData, setEditFormData] = useState({
        artist: '',
        title: '',
        format: '',
        media_condition: '',
        sleeve_condition: '',
        label: '',
        year: 0,
        collector_id: 0,
        image: ''
    })
    
    useEffect(() => {
        fetch(`http://localhost:9292/records/${recordID}`)
        .then(resp => resp.json())
        .then(data => setEditFormData(data))
    }, [recordID])
    
    // should I be using the previous state here?
    const handleEditChange = (e) => {
        const { name, value } = e.target
        setEditFormData({ ...editFormData, [name]: value})
    }
    
    const editRecord = (e) => {
        e.preventDefault()
        fetch(`http://localhost:9292/records/${recordID}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(editFormData)
        })
        .then(resp => resp.json())
        .then(data => handleUpdateRecord(data))
    }
    
    return (
        <div>
            <h3>Update record: </h3>
            <form onSubmit={editRecord}>
                <input 
                    className="input" 
                    name="artist" 
                    type="text" 
                    onChange={handleEditChange} 
                    value={editFormData.artist}
                    placeholder="Artist..." 
                /><br />
                <input 
                    className="input" 
                    name="title" 
                    type="text" 
                    onChange={handleEditChange} 
                    value={editFormData.title}
                    placeholder="Title..." 
                /><br />
                <input 
                    className="input" 
                    name="image" 
                    type="text" 
                    onChange={handleEditChange} 
                    value={editFormData.image}
                    placeholder="Image URL..."
                /><br />
                <input 
                    className="input" 
                    name="label" 
                    type="text" 
                    onChange={handleEditChange} 
                    value={editFormData.label}
                    placeholder="Label..." 
                /><br />
                <input 
                    className="input" 
                    pattern="[0-9]{4}" 
                    title="4 digit number: e.g. 1234" required
                    name="year" 
                    type="text" 
                    onChange={handleEditChange} 
                    value={editFormData.year}
                    placeholder="Year..." 
                /><br />
                <label>Media Condition: </label>
                <select className="input" name="media_condition" onChange={handleEditChange} value={editFormData.media_condition}>
                    <option value="Mint (M)">Mint (M)</option>
                    <option value="Near Mint (NM)">Near Mint (NM)</option>
                    <option value="Excellent (E)">Excellent (E)</option>
                    <option value="Very Good Plus (VG+)">Very Good Plus (VG+)</option>
                    <option value="Very Good (VG)">Very Good (VG)</option>
                    <option value="Good (G)">Good (G)</option>
                    <option value="Fair (F)">Fair (F)</option>
                </select>
                <br />
                <label>Sleeve Condition: </label>
                <select className="input" name="sleeve_condition" onChange={handleEditChange} value={editFormData.sleeve_condition}>
                    <option value="Mint (M)">Mint (M)</option>
                    <option value="Near Mint (NM)">Near Mint (NM)</option>
                    <option value="Excellent (E)">Excellent (E)</option>
                    <option value="Very Good Plus (VG+)">Very Good Plus (VG+)</option>
                    <option value="Very Good (VG)">Very Good (VG)</option>
                    <option value="Good (G)">Good (G)</option>
                    <option value="Fair (F)">Fair (F)</option>
                </select>
                <br />
                <label>Format: </label>
                <select className="input" name="format" onChange={handleEditChange} value={editFormData.format}>
                    <option value="LP">LP</option>
                    <option value="7 inch">7 inch</option>
                    <option value="10 inch">10 inch</option>
                    <option value="12 inch">12 inch</option>
                </select>
                <br /><br />
                <button className='bttn' type="submit">Update Record</button>
            </form>
        </div>
        )
    }
    
    export default RecordEditForm