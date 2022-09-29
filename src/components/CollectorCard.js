

const CollectorCard = ({ collector }) => {
    
    return (
        <div>
            <div className="card">
            <div className='image-container'>
            </div>    
            <div className="container">
                <h2 className='set-name'>{collector.name}</h2>
            </div>
            </div>
        </div>
    )
}

export default CollectorCard
