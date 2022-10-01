import { useNavigate } from 'react-router-dom'


const CollectorCard = ({ collector }) => {
    const navigate = useNavigate()

    return (
        <div>
            <div className="card" onClick={() => navigate(`/collectors/${collector.id}`)} >
                <div className='image-container'>
                </div>    
                <div className="container">
                    <h3>{collector.name}</h3>
                </div>
            </div>
        </div>
    )
}

export default CollectorCard
