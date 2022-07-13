import { useState, useEffect } from 'react';
import axios from "axios";
import CourseList from './CourseList';
import CourseForm from './CourseForm';
import { Button, Modal } from 'react-bootstrap';


const Courses = () => {
const [courses, setCourses] = useState([])


useEffect( () => {
axios.get('/api/course')
.then( res => {
  setCourses(res.data)

})
.catch( err => console.log(err))
}, [])
 
const addCourse = (course) => {
  axios.post('/api/courses', { course })
  .then(res => {
   setCourses([...courses, res.data])
  })
    .catch( err => console.log(err))
 
}

const updateCourse = (id, course) => {
  axios.put(`/api/course/${id}`, {course})
  .then(res => {
    let newUpdatedCourses = courses.map(c => {
      if (c.id === id) {
      return res.data 
    }
    return c
  })
  .catch( err => console.log(err))
}


const deleteCourse = (id) => {
  axios.delete(`/api/course/${id}`)
  .then(res => {
    setCourses(course.filter( c => c.id !== id))
  }
    )
  .catch( err => console.log(err))
}
  return (
    <>
    <Button onClick={() => setAdd(true)}>
+
    </Button>
    <Modal show={adding} on Hide={() => setAdd(false)}>
    <Modal.Header closeButton>
      <Modal.Body>
        <CourseForm addCourse={addCourse} />
      </Modal.Body>
    </Modal.Header>
    </Modal>

    <CourseForm addCourse={addCourse} />
    <CourseList
    courses={courses}
     />

    </>
  )

}

export default Courses;