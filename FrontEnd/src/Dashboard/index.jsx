import React, { useEffect, useState } from "react";
import AddResume from "./component/AddResume";
import SavedResume from "./component/SavedResume";
import { toast } from "sonner";

const baseUrl = import.meta.env.VITE_BASE_URL;

function Dashboard() {
  const [savedResumes, setSavedResumes] = useState([]);

  useEffect(() => {
    const fetchSavedresumes = async () => {
      try {
        const response = await fetch(
          `${baseUrl}/api/create-resume/saved-resumes/`,
          {
            method: "GET",
            credentials: "include",
          }
        );
        const data = await response.json();
        if (response.ok) {
          setSavedResumes(data.data || []);
        }
      } catch (error) {
        toast.error("Failed to load saved resumes, please try again.");
      }
    };
    fetchSavedresumes();
  }, []);

  return (
    <div className="h-screen p-10 mt-16">
      <h2>Create your Resume</h2>
      <p>Make your resume ATS free with the help of AI</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 ">
        <AddResume />

        {/* All the saved resumes will be shown if any. */}
        {savedResumes.length > 0 &&
          savedResumes.map((resume, index) => (
            <SavedResume key={resume.resumeId || index} resume={resume} />
          ))}
      </div>
    </div>
  );
}

export default Dashboard;
