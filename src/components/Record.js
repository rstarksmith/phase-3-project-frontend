const Record = ({ record, handleDeleteRecord, showEditForm }) => {
  const {
    artist,
    title,
    media_condition,
    sleeve_condition,
    label,
    format,
    year,
    id,
    image,
  } = record;

  const deleteRecord = () => {
    fetch(`http://localhost:9292/records/${id}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then((data) => handleDeleteRecord(data.id));
  };

  const editRecordInfo = () => {
    showEditForm(id);
    window.scrollTo(0, 0);
  };

  return (
    <div className="card">
      <div className="image-container">
        <img className="card-img" src={image} alt="album cover" />
      </div>
      <div className="card-text">
        <h4>
          {artist} - {title}
        </h4>
        <h6>Media Condition: {media_condition}</h6>
        <h6>Sleeve Condition: {sleeve_condition}</h6>
        <h6>
          Label: {label} - Format: {format}
        </h6>
        <h6>Year: {year}</h6>
      </div>
      <button onClick={editRecordInfo} className="record-bttn">
        Edit
      </button>
      <button onClick={deleteRecord} className="record-bttn">
        Delete
      </button>
    </div>
  );
};

export default Record;
