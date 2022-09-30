import { useState, useEffect } from "react"
import CollectorCard from "./CollectorCard"
import CollectorForm from "./CollectorForm"

const CollectorsList = () => {
    const [collectors, setCollectors] = useState([])
    const [showForm, setShowForm] = useState(false)
    const [theCollector, setTheCollector] = useState({})

    useEffect(() => {
        fetch('http://localhost:9292/collectors')
        .then(resp => resp.json())
        .then(data => setCollectors(data))
    }, [])

    const handleAddCollector = (newCollector) => {
        setCollectors([...collectors, newCollector])
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