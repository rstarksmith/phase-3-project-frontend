import { useNavigate } from 'react-router-dom'


const CollectorCard = ({ collector }) => {
    const navigate = useNavigate()

    return (
        <div>
            <div className="card">
                <div className='image-container'>
                </div>    
                <div className="container">
                    <button collector={collector} onClick={() => navigate(`/collectors/${collector.id}`)} >{collector.name}</button>
                </div>
            </div>
        </div>
    )
}

export default CollectorCard
