import { useState, useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import NavBar from "./components/Navbar"
import Home from "./components/Home"
import CollectorList from "./components/CollectorsList"
import CollectorPage from "./components/CollectorPage"
import VinylGrade from "./components/VinylGrade"

function App() {
  const [collectors, setCollectors] = useState([])
  

  useEffect(() => {
      fetch('http://localhost:9292/collectors')
      .then(resp => resp.json())
      .then(data => setCollectors(data))
  }, [])

  const handleAddCollector = (newCollector) => {
        setCollectors([...collectors, newCollector])
    }

  const handleDelete = (id) => {
    const updatedCollectors = collectors.filter(collector => collector.id !== id)
      setCollectors(updatedCollectors)
  }
  

  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/collectors" element={<CollectorList collectors={collectors} handleAddCollector={handleAddCollector} />} />
        <Route path="/collectors/:id" element={<CollectorPage handleDelete={handleDelete} />} />
        <Route path="/vinylgrade" element={<VinylGrade />} />
      </Routes>
    </>
  )
}

export default App
