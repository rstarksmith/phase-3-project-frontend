

const Record = ({ record }) => {

    return (
        <div>
            <img src={record.image} />
            <div>
                <h4>{record.name} - {record.title}</h4>
                <h6>Media Condition: {record.label}</h6>
                <h6>Sleeve Condition: {record.label}</h6>
                <h6>Label: {record.label} - Format: {record.format}</h6>
                <h6>Year: {record.year}</h6>
            </div>
            <button>Delete Record</button>
        </div>
    )
}

export default Record