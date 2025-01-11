import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import NewsPage from './pages/NewsPage.jsx'
import CategoryPage from './pages/CategoryPage.jsx'
import './App.css'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/news/:newsId" element={<NewsPage />} />
        <Route path="/:category" element={<CategoryPage />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </Router>
  )
}
