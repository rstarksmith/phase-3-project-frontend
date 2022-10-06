const VinylGrade = () => {
  return (
    <div>
      <img
        className="list-img"
        src="https://i.imgur.com/Pxcgez3.png"
        alt="vinyl grading fox vinyl"
      />
      <div>
        <h2 className="grade">Determine the condition of your record</h2>
      </div>
      <div className="grade-container">
        <p>
          <strong>Mint (M) |</strong> Absolutely perfect in every way. Never
          been played and usually sealed.
        </p>
        <p>
          <strong>Excellent (E) |</strong> The vinyl has only been played a few
          times. There are no marks on the vinyl and the whole package is
          complete. Small signs of use.
        </p>
        <p>
          <strong>Very Good Plus (VG+) |</strong> A few further faults are
          acceptable, but nothing that compromises the record visually or
          audibly. Light inaudible marks or background crackle.
        </p>
        <p>
          <strong>Very Good (VG) |</strong> Visually and audibly used. Light
          pops and clicks, an edge split, light visible scratches. You can still
          enjoy listening and the record looks good.
        </p>
        <p>
          <strong>Good (G) |</strong> Good mean bad condition. Usually only
          highly sought after records would sell in this condition.
        </p>
        <p>
          <strong>Fair (F) |</strong> Expect major noise issues, skipping or
          repeating. The record itself is cracked, badly warped and has deep
          scratches.
        </p>
      </div>
      <div>
        <img
          src="https://i.imgur.com/EzW2YJP.png?2"
          alt="half of a large record"
        />
      </div>
    </div>
  );
};

export default VinylGrade;
