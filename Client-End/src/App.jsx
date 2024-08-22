
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import StudentLayout from './Components/StudentLayout'
function App() {
  return (
    <Routes>
      <Route path='/*' element={<Layout/>}/>
      <Route path='/dashboard/*' element={<StudentLayout/>}/>
    </Routes>
  )
}
export default App
