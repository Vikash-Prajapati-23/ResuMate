import React from 'react'
import AddResume from './component/AddResume'
import SavedResume from './component/SavedResume'

function dashboard() {
  return (
    <div className='m-10 '>
      <h2>Create your Resume</h2>
      <p>Make your resume ATS free with the help of AI</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 ">
      <AddResume />
      <SavedResume />
      </div>
    </div>
  )
}

export default dashboard
