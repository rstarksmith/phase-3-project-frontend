

const Record = ({ record }) => {

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
            <button className="record-bttn">Delete Record</button>
        </div>
    )
}

export default Record