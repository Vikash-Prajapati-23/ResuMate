import React from 'react'
import AddResume from './component/AddResume'

function dashboard() {
  return (
    <div className='m-10'>
      <h2>Create your Resume</h2>
      <p>Make your resume ATS free with the help of AI</p>
      <AddResume />
    </div>
  )
}

export default dashboard
