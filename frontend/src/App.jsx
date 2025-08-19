import React from 'react'
import { Routes, Route } from 'react-router'
import toast from 'react-hot-toast'
import Home from './pages/Home'
import CreatePage from './pages/CreatePage'
import NoteDetailPage from './pages/NoteDetailPage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/create' element={<CreatePage />}/>
        <Route path='/note/:id' element={<NoteDetailPage />}/>
      </Routes>
    </div>
  )
}

export default App