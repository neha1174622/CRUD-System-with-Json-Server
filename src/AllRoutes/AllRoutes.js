import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../components/feature/Home'
import Student from '../components/feature/Student'
import AddStudent from '../components/feature/AddStudent'
const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='' element={<Home />} />
            <Route path='student' element={<Student />} />
            <Route path='student/add' element={<AddStudent />} />
            <Route path='student/edit/:id' element={<AddStudent />} />
        </Routes>
    </>
  )
}

export default AllRoutes