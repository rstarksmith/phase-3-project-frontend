import { useState } from 'react'
// import { useNavigation } from 'react-router-dom'

const CollectorForm = ({ handleAddCollector }) => {
    const[name, setName] = useState('')
    // const navigation = useNavigation()

    const addCollector = (e) => {
        e.preventDefault()
        const newCollector = {
            name
        }
        fetch('http://localhost:9292/collectors', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newCollector),
        })
        .then(resp => resp.json())
        .then(newCollector => {
            handleAddCollector(newCollector)
            setName('')
        })
    }

    return (
        <div>
            <h3>Personal Collections</h3>
            <div>
                <form onSubmit={addCollector}>
                    <input
                        className='form-input'
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        placeholder='Name...'
                    />
                    <button type='submit'>Create new account</button>
                </form>
                <p>Once you create your account click on your name to add records</p>
            </div>

        
        </div>
    )
}

export default CollectorForm