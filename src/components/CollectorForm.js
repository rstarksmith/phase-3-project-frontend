import { useState } from 'react'

const CollectorForm = ({ handleAddCollector, hideForm }) => {
    const[name, setName] = useState('')

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
            hideForm()
        })
    }

    return (
        <div>
            <h3>Personal Collections</h3>
            <div>
                <form onSubmit={addCollector}>
                    <input
                        className='input'
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        placeholder='Name...'
                    />
                    <button className='bttn' type='submit'>Create new account</button>
                </form>
                <p>Once you create your account, click on your name below to add records.</p>
            </div>

        
        </div>
    )
}

export default CollectorForm