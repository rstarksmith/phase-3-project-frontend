import { Route, Routes } from "react-router-dom"
import NavBar from "./components/Navbar"
import Home from "./components/Home"
import CollectorList from "./components/CollectorsList"
import CollectorPage from "./components/CollectorPage"
import VinylGrade from "./components/VinylGrade"

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/collectors" element={<CollectorList />} />
        <Route path="/collectors/:id" element={<CollectorPage />} />
        <Route exact path="/vinylgrade " element={<VinylGrade />} />
      </Routes>
    </>
  )
}

export default App
