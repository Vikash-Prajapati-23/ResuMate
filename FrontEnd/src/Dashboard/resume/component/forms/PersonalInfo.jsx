import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { LoaderCircle, BrainCircuitIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { AIChatSession } from "./../../../../../service/GoogleApiModel";
import { useDispatch, useSelector } from "react-redux";
import {
  setResumeInfo,
  updateResumeInfoField,
} from "@/store/slices/resumeInfo/resumeInfo";
import { toast } from "sonner";
import { useParams } from "react-router-dom";

const baseUrl = import.meta.env.VITE_BASE_URL;

const prompt =
  "Generate a compelling and professional summary for a resume based on the job title: {job_title}. The response should be in JSON format with the following structure: 'experience_level' (containing 'fresher' and 'mid_level_experienced') and 'summary' (containing a concise, impactful, and achievement-driven statement). The summary should highlight key strengths, industry relevance, and career potential. Keep it within 2-3 lines, making it engaging and results-oriented.";

function PersonalInfo({ loading, setLoading }) {
  const [aiGeneratedSummary, setAiGeneratedSummary] = useState([]);
  const dispatch = useDispatch();
  const resumeInfo = useSelector((state) => state.resumeInfo.value);
  const resumeId = useParams();

  useEffect(() => {
    if (resumeInfo.personalInfo?.summary) {
      setAiGeneratedSummary([{ summary: resumeInfo.personalInfo?.summary }]);
    }
  }, [resumeInfo.personalInfo?.summary]);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    // setFormData((prev) => ({
    //   ...prev,
    //   [name]: value,
    // }));
    dispatch(
      updateResumeInfoField({
        field: "personalInfo",
        data: { ...(resumeInfo.personalInfo || {}), [name]: value }, // Initially the personalInfo is undefined so using safeguard to prevent errors.
      })
    );
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${baseUrl}/api/create-resume/${resumeId}`, {
        method: "PATCH",
        credentials: "include",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ personalInfo: resumeInfo.personalInfo }),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success(data.message);
        dispatch(
          setResumeInfo({
            ...resumeInfo,
            personalInfo: data.data.personalInfo,
          })
        );
      }
    } catch (error) {
      toast.error("Something went wrong.!");
      console.error("Internal server error.", error);
    }
  };

  const generateSummaryByAI = async () => {
    setLoading(true);
    const jobTitle = resumeInfo?.personalInfo?.job_title || "undefined";
    const PROMPT = prompt.replace("{job_title}", jobTitle);
    // console.log(PROMPT);

    try {
      const result = await AIChatSession.sendMessage(PROMPT);
      const textResponse = result.response.text();
      const parsedResponse = JSON.parse(textResponse);
      // console.log(parsedResponse);

      setAiGeneratedSummary(parsedResponse);

    } catch (error) {
      console.error("Error generating AI summary:", error);
    }
    setLoading(false);
  };

  return (
    <div className="bg-white border rounded-lg md:p-4 p-3 border-t-4 border-purple-500 my-5">
      <div className="ms-2">
        <h2 className="font-bold">Personal Details</h2>
        <p className="text-sm">
          Get started with filling up some personal details.
        </p>
      </div>

      <form onSubmit={handleSave}>
        <div className="grid grid-cols-2 gap-3 mt-3">
          <div>
            <label className="ms-2 text-sm">First name</label>
            <Input
              name="first_name"
              type="text"
              required
              onChange={handleFormChange}
              value={resumeInfo.personalInfo?.first_name || ""}
            />
          </div>
          <div>
            <label className="ms-2 text-sm">Last name</label>
            <Input
              name="last_name"
              type="text"
              required
              onChange={handleFormChange}
              value={resumeInfo.personalInfo?.last_name || ""}
            />
          </div>

          <div className="col-span-2">
            <label className="ms-2 text-sm">Address</label>
            <Input
              name="address"
              type="text"
              required
              onChange={handleFormChange}
              value={resumeInfo.personalInfo?.address || ""}
            />
          </div>

          <div className="">
            <label className="ms-2 text-sm">Job title</label>
            <Input
              name="job_title"
              type="text"
              required
              onChange={handleFormChange}
              value={resumeInfo.personalInfo?.job_title || ""}
            />
          </div>
          <div>
            <label className="ms-2 text-sm">Phone</label>
            <Input
              name="phone"
              type="number"
              required
              onChange={handleFormChange}
              value={resumeInfo.personalInfo?.phone || ""}
            />
          </div>

          <div>
            <label className="ms-2 text-sm">Email</label>
            <Input
              name="email"
              type="email"
              required
              onChange={handleFormChange}
              value={resumeInfo.personalInfo?.email || ""}
            />
          </div>

          <div>
            <label className="ms-2 text-sm">LinkedIn</label>
            <Input
              name="linkedin"
              type="text"
              required
              onChange={handleFormChange}
              value={resumeInfo.personalInfo?.linkedin || ""}
            />
          </div>
        </div>

        <div className="mt-4 space-y-2">
          <div className="flex justify-between">
            <div>
              <h2 className="ms-2">Add Summary</h2>
              <p className="text-sm ms-2">Add a summary for your job role.</p>
            </div>
            <div>
              <Button
                variant="outline"
                onClick={generateSummaryByAI}
                disabled={loading}
                type="button"
                className="bg-purple-500"
              >
                {loading ? (
                  <BrainCircuitIcon className="" />
                ) : (
                  "Generate with AI"
                )}
              </Button>
            </div>
          </div>
          <Textarea
            placeholder="Write your own summary or generate with AI"
            type="text"
            required
            name="summary"
            onChange={handleFormChange}
            value={resumeInfo.personalInfo?.summary || ""}
          />
        </div>

        <div className="flex justify-end mt-3">
          <Button disabled={loading} type="submit" className="bg-purple-500">
            {loading ? <LoaderCircle className="animate-spin" /> : "Save"}
          </Button>
        </div>
      </form>

      {aiGeneratedSummary.length > 0 && (
        <div className="mt-4">
          <h2 className="font-bold text-xs">AI Generated Summary</h2>
          {aiGeneratedSummary.map((item, index) => (
            <div key={index}>
              <h3 className="font-bold text-xs">
                Experience Level: {item?.experience_level}
              </h3>
              <p className="text-sm">{item?.summary}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PersonalInfo;
