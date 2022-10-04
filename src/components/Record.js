

const Record = ({ record, handleDeleteRecord }) => {

    const deleteRecord = () => {
        handleDeleteRecord()
    }

    return (
        <div className="card">
            <div className="image-container" >
                <img className="card-img" src={record.image} alt="album cover" />
            </div>
            <div>
                <h4>{record.artist} - {record.title}</h4>
                <h6>Media Condition: {record.media_condition}</h6>
                <h6>Sleeve Condition: {record.sleeve_condition}</h6>
                <h6>Label: {record.label} - Format: {record.format}</h6>
                <h6>Year: {record.year}</h6>
            </div>
            <button className="record-bttn">Edit</button>
            <button onClick={deleteRecord} className="record-bttn">Delete</button>
        </div>
    )
}

export default Record