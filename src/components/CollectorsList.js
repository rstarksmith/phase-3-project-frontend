import { useState, useEffect } from "react"
import CollectorCard from "./CollectorCard"
import CollectorForm from "./CollectorForm"

const CollectorsList = () => {
    const [collectors, setCollectors] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/collectors')
        .then(resp => resp.json())
        .then(data => setCollectors(data))
    }, [])

    const collections = collectors.map(collector => <CollectorCard key={collector.id} collector={collector} />)

    return (
        <div>
            <div>
                {collections}
            </div>
            <div>
                <button>add collector</button>
            </div>
        </div>
    )
}

export default CollectorsList