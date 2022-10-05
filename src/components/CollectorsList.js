import { useState } from "react"
import { useNavigate } from "react-router-dom"
import CollectorForm from "./CollectorForm"


const CollectorsList = ({ collectors, handleAddCollector }) => {
    const [showForm, setShowForm] = useState(false)
    const navigate = useNavigate()


    const collections = collectors.map(collector => {
        return(
            <div key={collector.id}>
                <button 
                    onClick={() => navigate(`/collectors/${collector.id}`)} className="collector-bttn">{collector.name}</button>
            </div>
            )
        })

    const showCollectorForm = () =>
        setShowForm(true)        
        
    const hideForm = () => {
        setShowForm(false)
    }

    return (
        <div>
            <div>
                <p>add image and title</p>
            </div>
            <div>
                {showForm ? <CollectorForm handleAddCollector={handleAddCollector} hideForm={hideForm} /> : <button onClick={showCollectorForm} className="bttn">New Collector</button>}
            </div>
            <div>
                {collections}
            </div>
        </div>
    )
}

export default CollectorsList