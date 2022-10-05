

const Record = ({ record, handleDeleteRecord }) => {
    const { artist, title, media_condition, sleeve_condition, label, format, year, id, image } = record

    const deleteRecord = () => {
        // I have the the correct record id/returned record
        // backend working, need to filter and change state
        // console.log('before fetch id:', id)
        fetch(`http://localhost:9292/records/${id}`, {
            method: 'DELETE'
        })
        .then(resp => resp.json())
        .then(data => handleDeleteRecord(data.id))
    }
    

    return (
        <div className="card">
            <div className="image-container" >
                <img className="card-img" src={image} alt="album cover" />
            </div>
            <div>
                <h4>{artist} - {title}</h4>
                <h6>Media Condition: {media_condition}</h6>
                <h6>Sleeve Condition: {sleeve_condition}</h6>
                <h6>Label: {label} - Format: {format}</h6>
                <h6>Year: {year}</h6>
            </div>
            <button className="record-bttn">Edit</button>
            <button onClick={deleteRecord} className="record-bttn">Delete</button>
        </div>
    )
}

export default Record