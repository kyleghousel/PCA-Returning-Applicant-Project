import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Landing from './components/landing'
import Bio from './components/bio'
import Portfolio from './components/portfolio'
import Reading from './components/reading'
import Music from './components/music'
import Learning from './components/learning'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/reading" element={<Reading />} />
        <Route path="/music" element={<Music />} />
        <Route path="/learning" element={<Learning />} />
      </Routes>
    </Router>
  )
}

export default App
