import { useState } from "react"


const RecordForm = ({ collector, handleAddRecord }) => {
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

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value})

    }
    
    const addRecord = (e) => {
        e.preventDefault()
        fetch('http://localhost:9292/records', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(resp => resp.json())
        .then(data => {
            handleAddRecord(data)
        })
    }

    
    return (
        <div>
            <p>Add a record to your collection: </p>
            <form onSubmit={addRecord}>
                <input 
                    className="input" 
                    name="artist"
                    type="text" 
                    onChange={handleChange} 
                    value={formData.artist} 
                    placeholder="Artist..." 
                /><br/>
                <input 
                    className="input"  
                    name="title"
                    type="text" 
                    onChange={handleChange} 
                    value={formData.title} 
                    placeholder="Title..." 
                /><br/>
                <input 
                    className="input"  
                    name="image"
                    type="text" 
                    onChange={handleChange} 
                    value={formData.image} 
                    placeholder="Image URL..." 
                /><br/>
                <input 
                    className="input"  
                    name="label"
                    type="text" 
                    onChange={handleChange} 
                    value={formData.label}
                    placeholder="Label..." 
                /><br/>
                <input 
                    className="input"  
                    name="year"
                    type="text" 
                    onChange={handleChange} 
                    value={formData.year}
                    placeholder="Year..." 
                /><br/>
                <label>Media Condition: </label>
                <select 
                    className="input" 
                    name="media_condition"  
                    onChange={handleChange}
                    value={formData.media_condition}
                >
                    <option value="Mint (M)">Mint (M)</option>
                    <option value="Near Mint (NM)">Near Mint (NM)</option>
                    <option value="Excellent (E)">Excellent (E)</option>
                    <option value="Very Good Plus (VG+)">Very Good Plus (VG+)</option>
                    <option value="Very Good (VG)">Very Good (VG)</option>
                    <option value="Good (G)">Good (G)</option>
                    <option value="Fair (F)">Fair (F)</option>
                </select>
                <br/><br/> 
                <label>Sleeve Condition: </label>
                <select 
                    className="input" 
                    name="sleeve_condition"
                    onChange={handleChange}
                    value={formData.sleeve_condition}
                >
                    <option value="Mint (M)">Mint (M)</option>
                    <option value="Near Mint (NM)">Near Mint (NM)</option>
                    <option value="Excellent (E)">Excellent (E)</option>
                    <option value="Very Good Plus (VG+)">Very Good Plus (VG+)</option>
                    <option value="Very Good (VG)">Very Good (VG)</option>
                    <option value="Good (G)">Good (G)</option>
                    <option value="Fair (F)">Fair (F)</option>
                </select>
                <br/><br/> 
                <label>Format: </label>
                <select
                    className="input"  
                    name="format"
                    onChange={handleChange}
                    value={formData.format}
                >
                    <option value="LP">LP</option>
                    <option value="7 inch">7 inch</option>
                    <option value="10 inch">10 inch</option>
                    <option value="12 inch">12 inch</option>
                </select>
                <br/><br/> 
                <button className='bttn' type="submit">Add Record</button>
            </form>
        </div>
    )
}

export default RecordForm