import { Route, Routes } from 'react-router-dom'
import './App.css'
import Setting from './app/pages/Settings/Setting'
import SideBar from './app/components/Sidebar/Sidebar'

function App() {
  return (
    <div>
      <SideBar />

      <Routes>
        <Route path="/settings" element={<Setting />} />
      </Routes>
    </div>
  )
}

export default App
