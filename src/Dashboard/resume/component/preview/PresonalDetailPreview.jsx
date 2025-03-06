import React from 'react'

const PresonalDetailPreview = ({resumeInfo}) => {
  return (
    <div>
      <h3>{resumeInfo?.first_name} {resumeInfo?.last_name}</h3>
    </div>
  )
}

export default PresonalDetailPreview
