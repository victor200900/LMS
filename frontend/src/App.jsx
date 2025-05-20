import React from 'react'
import { Route , Routes , useMatch } from 'react-router-dom';
import Home from "./pages/students/Home"
import Player from './pages/students/Player'
import Loading from './components/students/Loading'
import CoursesList from './pages/students/CourseList'
import CourseDetails from './pages/students/CourseDetails'
import MyEnrollments from './pages/students/MyEnrollment'
import Dashboard from './pages/educator/Dashboard';
import Educator from './pages/educator/Educator';
import AddCourse from './pages/educator/AddCourse';
import StudentsEnrolled from './pages/educator/StudentEnrolled';
import MyCourses from './pages/educator/MyCourses';
import  Navbar from './components/students/Navbar';

const App = () => {

  const isEducatorRoute = useMatch('/educator/*');
  return (
    <div className='text-default min-h-screen bg-white'>
     {!isEducatorRoute && <Navbar />}
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/course-list' element={<CoursesList/>} />
      <Route path='/course-list/:input' element={<CoursesList/>} />
      <Route path='/course/:id' element={<CourseDetails/>} />
      <Route path='/my-enrollments' element={<MyEnrollments/>} />
      <Route path='/player/:courseId' element={<Player/>} />
     <Route path='/loading/:path' element={<Loading/>} />
     <Route path='/educator' element={<Educator />}>
  <Route path='educator' element={<Dashboard />} />
  <Route path='add-course' element={<AddCourse />} />
  <Route path='my-courses' element={<MyCourses />} />
  <Route path='student-enrolled' element={<StudentsEnrolled />} />
</Route>
    </Routes>
    </div>
  )
}

export default App;