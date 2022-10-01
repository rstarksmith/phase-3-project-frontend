import { useState } from "react"


const RecordForm = () => {
    const[artist, setArtist] = useState('')

    
    return (
        <div>
            this is the Record form
            {/* <form onSubmit={handleNewSet}>
                <input 
                    className='input' 
                    type="text" 
                    onChange={(e) => setArtist(e.target.value)} 
                    value={artist} 
                    placeholder="Artist..." 
                /><br/><br/>
                <input 
                    className='input' 
                    type="text" 
                    onChange={(e) => setTitle(e.target.value)} 
                    value={title} 
                    placeholder="Title..." 
                /><br/><br/>
                <input 
                    className='input' 
                    type="text" 
                    onChange={(e) => setImage(e.target.value)} 
                    value={image} 
                    placeholder="Image URL..." 
                /><br/><br/>
                <input 
                    className='input' 
                    type="text" 
                    onChange={(e) => setLabel(e.target.value)} 
                    value={label}
                    placeholder="Label..." 
                /><br/><br/>
                <input 
                    className='input' 
                    type="text" 
                    // onChange={(e) => setYear(e.target.value)} 
                    // value={year}
                    placeholder="Year..." 
                /><br/><br/> */}
                {/* <select onChange={(e) => setMedia(e.target.value)}> */}
                    {/* <option>Mint (M)</option>
                    <option>Near Mine (NM)</option>
                    <option>Very Good Plus (VG+)</option>
                    <option>Very Good (VG)</option>
                    <option>Good (G)</option>
                    <option>Fair (F)</option>
                </select> */}
            {/* <button className='home-bttn' type="submit">Add Record</button>
            </form> */}
        </div>
    )
}

export default RecordForm