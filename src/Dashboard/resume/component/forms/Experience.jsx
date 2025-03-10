import React from 'react'
import { Button } from "@/components/ui/button";
import {  LoaderCircle } from 'lucide-react';
import { Input } from "@/components/ui/input";

function Experience({ handleSave, handleFormChange, loading}) {

  // {
  //   job_title: "Software Engineer",
  //   company: "Tech Solutions Inc.",
  //   location: "San Francisco, CA",
  //   start_date: "June 2020",
  //   end_date: "Present",
  //   responsibilities: [
  //     "Developed and maintained full-stack web applications using React, Node.js, and MongoDB.",
  //     "Implemented RESTful APIs to improve data access and performance.",
  //     "Collaborated with cross-functional teams to enhance user experience.",
  //   ],
  // },

  return (
    <div className="bg-white shadow-md rounded-lg p-4 border-t-4 border-purple-500 my-5">
      <div className="ms-2">
        <h2 className="font-bold" >Experience</h2>
        <p className="text-sm" >Share your working experience to showcase you work and capabilities.</p>
      </div>

      <div className="flex justify-end mt-3">
          <Button disabled={loading} type="submit" className="bg-purple-500">
            {loading? <LoaderCircle className="animate-spin" /> : "Save" }
          </Button>
        </div>
      
    </div>
  )
}

export default Experience
