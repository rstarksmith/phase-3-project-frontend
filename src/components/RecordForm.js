import { useState } from "react"


const RecordForm = ({ collector }) => {
    const[formData, setFormData] = useState({
        artist: '',
        title: '',
        format: '',
        media_condition: '',
        sleeve_condition: '',
        label: '',
        year: 0,
        collector_id: collector.id,
        image: ''
    })

    
    const addRecord = (e) => {
        e.preventDefault()
    }

    
    return (
        <div>
            <p>Add a record to your collection: </p>
            <form onSubmit={addRecord}>
                <input 
                    className='input' 
                    name="artist"
                    type="text" 
                    onChange={(e) => setFormData(e.target.value)} 
                    value={formData.artist} 
                    placeholder="Artist..." 
                /><br/><br/>
                <input 
                    className='input' 
                    type="text" 
                    onChange={(e) => setFormData(e.target.value)} 
                    value={formData.title} 
                    placeholder="Title..." 
                /><br/><br/>
                <input 
                    className='input' 
                    type="text" 
                    onChange={(e) => setFormData(e.target.value)} 
                    value={formData.image} 
                    placeholder="Image URL..." 
                /><br/><br/>
                <input 
                    className='input' 
                    type="text" 
                    onChange={(e) => setFormData(e.target.value)} 
                    value={formData.label}
                    placeholder="Label..." 
                /><br/><br/>
                <input 
                    className='input' 
                    type="text" 
                    onChange={(e) => setFormData(e.target.value)} 
                    value={formData.year}
                    placeholder="Year..." 
                /><br/><br/> 
                <label>Media Condition: </label>
                <select className='input' onChange={(e) => setFormData(e.target.value)}>
                    <option>Mint (M)</option>
                    <option>Near Mint (NM)</option>
                    <option>Excellent (E)</option>
                    <option>Very Good Plus (VG+)</option>
                    <option>Very Good (VG)</option>
                    <option>Good (G)</option>
                    <option>Fair (F)</option>
                </select>
                <br/><br/> 
                <label>Sleeve Condition: </label>
                <select className='input' onChange={(e) => setFormData(e.target.value)}>
                    <option>Mint (M)</option>
                    <option>Near Mint (NM)</option>
                    <option>Excellent (E)</option>
                    <option>Very Good Plus (VG+)</option>
                    <option>Very Good (VG)</option>
                    <option>Good (G)</option>
                    <option>Fair (F)</option>
                </select>
                <br/><br/> 
                <label>Format: </label>
                <select className='input' onChange={(e) => setFormData(e.target.value)}>
                    <option>Mint (M)</option>
                    <option>Near Mint (NM)</option>
                    <option>Excellent (E)</option>
                    <option>Very Good Plus (VG+)</option>
                </select>
                <br/><br/> 
                <button className='bttn' type="submit">Add Record</button>
            </form>
        </div>
    )
}

export default RecordForm