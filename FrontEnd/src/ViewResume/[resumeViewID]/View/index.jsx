import PreviewSection from '@/Dashboard/resume/component/PreviewSection'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ViewResume = () => {
  const diapatch = useDispatch();
  const resumeInfo = useSelector((state) => state.resumeInfo.value);

  return (
    <div>
      <PreviewSection />
    </div>
  )
}

export default ViewResume;
