import { useState, useEffect } from "react"
import CollectorCard from "./CollectorCard"
import CollectorForm from "./CollectorForm"

const CollectorsList = ({ collectors, handleAddCollector }) => {
    const [showForm, setShowForm] = useState(false)
    // const [theCollector, setTheCollector] = useState({})


    const handleCollectorView = () => {
        fetch()
    }

    const collections = collectors.map(c => <CollectorCard key={c.id} collector={c} />)

    const showCollectorForm = () =>
        setShowForm(true)

    return (
        <div>
            <div>
                <p>an image will go here</p>
            </div>
            <div>
                {showForm ? <CollectorForm handleAddCollector={handleAddCollector}/> : <button onClick={showCollectorForm} className="list-bttn">New Collector</button>}
            </div>
            <div>
                {collections}
            </div>
        </div>
    )
}

export default CollectorsList