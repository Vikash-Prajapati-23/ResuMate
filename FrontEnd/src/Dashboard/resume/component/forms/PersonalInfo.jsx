import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { LoaderCircle, BrainCircuitIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { AIChatSession } from "./../../../../../service/GoogleApiModel";
import { useDispatch, useSelector } from "react-redux";
import { setResumeInfo } from "@/store/slices/resumeInfo/resumeInfo"; 

const prompt =
  "Generate a compelling and professional summary for a resume based on the job title: {job_title}. The response should be in JSON format with the following structure: 'experience_level' (containing 'fresher' and 'mid_level_experienced') and 'summary' (containing a concise, impactful, and achievement-driven statement). The summary should highlight key strengths, industry relevance, and career potential. Keep it within 2-3 lines, making it engaging and results-oriented.";

function PersonalInfo({ handleSave, loading, setLoading }) {
  const [aiGeneratedSummary, setAiGeneratedSummary] = useState([]);
  const dispatch = useDispatch();

  const resumeInfo = useSelector((state) => state.resumeInfo.value);

  useEffect(() => {
    if (resumeInfo && resumeInfo.summary) {
      setAiGeneratedSummary([{ summary: resumeInfo.summary }]);
    }
  }, [resumeInfo]);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    dispatch(
      setResumeInfo({
        ...resumeInfo,
        personal_info: {
          ...resumeInfo?.personal_info,
          [name]: value,
        },
        summary: name === "summary" ? value : resumeInfo?.summary,
      })
    );
  };

  const generateSummaryByAI = async () => {
    setLoading(true);
    const jobTitle = resumeInfo?.personal_info?.job_title || "undefined";
    const PROMPT = prompt.replace("{job_title}", jobTitle);
    console.log(PROMPT);

    try {
      const result = await AIChatSession.sendMessage(PROMPT);
      const textResponse = await result.response.text();
      const parsedResponse = JSON.parse(textResponse);
      console.log(parsedResponse);

      setAiGeneratedSummary(parsedResponse);

      dispatch(
        setResumeInfo({
          ...resumeInfo,
          summary: parsedResponse.map((item) => item.summary).join("\n"),
        })
      );
    } catch (error) {
      console.error("Error generating AI summary:", error);
    }
    setLoading(false);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 border-t-4 border-purple-500 my-5">
      <div className="ms-2">
        <h2 className="font-bold">Personal Details</h2>
        <p className="text-sm">Get started with filling up some personal details.</p>
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
              value={resumeInfo?.personal_info?.first_name || ""}
            />
          </div>
          <div>
            <label className="ms-2 text-sm">Last name</label>
            <Input
              name="last_name"
              type="text"
              required
              onChange={handleFormChange}
              value={resumeInfo?.personal_info?.last_name || ""}
            />
          </div>

          <div className="col-span-2">
            <label className="ms-2 text-sm">Job title</label>
            <Input
              name="job_title"
              type="text"
              required
              onChange={handleFormChange}
              value={resumeInfo?.personal_info?.job_title || ""}
            />
          </div>

          <div className="col-span-2">
            <label className="ms-2 text-sm">Address</label>
            <Input
              name="address"
              type="text"
              required
              onChange={handleFormChange}
              value={resumeInfo?.personal_info?.address || ""}
            />
          </div>

          <div>
            <label className="ms-2 text-sm">Phone</label>
            <Input
              name="phone"
              type="number"
              required
              onChange={handleFormChange}
              value={resumeInfo?.personal_info?.phone || ""}
            />
          </div>
          <div>
            <label className="ms-2 text-sm">Email</label>
            <Input
              name="email"
              type="email"
              required
              onChange={handleFormChange}
              value={resumeInfo?.personal_info?.email || ""}
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
                  <BrainCircuitIcon className="animate-spin" />
                ) : (
                  "Generate with AI"
                )}
              </Button>
            </div>
          </div>
          <Textarea
            placeholder="Type your message here..."
            required
            name="summary"
            onChange={handleFormChange}
            value={resumeInfo?.summary || ""}
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
