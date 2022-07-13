import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const CourseForm = ({ addCourse}) => {
  const [course, setCourse] = ueState({title: '', desc: '', ctype: ''})

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <>
    <h1>Create Course</h1>
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Title:</Form.Label>
        <Form.Control
        name='title'
        value={course.title}
        onChange={(e) => setCourse({ ...course, title: e.target.value})}
        placeholder="Title"
        required
        />
        <Form.Label>Descrition:</Form.Label>
        <Form.Control
        name='description'
        value={course.description}
        onChange={(e) => setCourse({ ...course, title: e.target.value})}
        placeholder="Description"
        required
        />
      </Form.Group>
    </Form>
    </>
  )
}
export default CourseForm;