import { Input } from "@/components/ui/input";
import { LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import {
  setResumeInfo,
  updateResumeInfoField,
} from "@/store/slices/resumeInfo/resumeInfo";
import { toast } from "sonner";
import { useParams } from "react-router-dom";

const baseUrl = import.meta.env.VITE_BASE_URL;

function Certificates({ loading }) {
  const dispatch = useDispatch();
  const resumeInfo = useSelector((state) => state.resumeInfo.value);
  const { resumeId } = useParams();

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${baseUrl}/api/create-resume/${resumeId}`, {
        method: "PATCH",
        credentials: "include",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ certifications: resumeInfo.certifications }),
      });
      const data = await res.json();
      if (res.ok) {
        toast.success(data.message);
        dispatch(
          setResumeInfo({
            ...resumeInfo,
            certifications: data.data.certifications,
          })
        );
      }
    } catch (error) {
      toast.error("Something went wrong, please try again later.");
      console.error("Internal error.", error);
    }
  };

  const handleFormChange = (index, name, value) => {
    const newCertificates = [...(resumeInfo.certifications || [])];

    // Create new object to avoid mutating read-only Redux state
    newCertificates[index] = {
      ...newCertificates[index],
      [name]: value,
    };

    dispatch(
      updateResumeInfoField({
        field: "certifications",
        data: newCertificates,
      })
    );
  };

  const addCertificates = () => {
    const newCertificate = {
      name: "",
      year: "",
    };

    const updatedCertificates = [
      ...(resumeInfo.certifications || []),
      newCertificate,
    ];

    dispatch(
      updateResumeInfoField({
        field: "certifications",
        data: updatedCertificates,
      })
    );
  };

  const removeCertificates = (index) => {
    // Added null check to prevent errors if certifications is undefined
    const updatedCertificates = (resumeInfo.certifications || []).filter(
      (_, i) => i !== index
    );

    dispatch(
      updateResumeInfoField({
        field: "certifications",
        data: updatedCertificates,
      })
    );
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 border-t-4 border-purple-500 my-5">
      <div className="ms-2">
        <h2 className="font-bold">Certificates</h2>
        <p className="text-sm">
          Show your certificates if any. It increases the chances of selection.
        </p>
      </div>

      <form onSubmit={handleSave}>
        <div className="mt-3">
          {resumeInfo.certifications?.map((item, index) => (
            <div
              className="grid grid-cols-2 gap-3 border-2 rounded-md p-3 mb-3"
              key={index}
            >
              <div>
                <label className="ms-2 text-sm">Certificate Name</label>
                <Input
                  value={item.name || ""}
                  type="text"
                  required
                  onChange={(e) =>
                    handleFormChange(index, "name", e.target.value)
                  }
                />
              </div>
              <div>
                <label className="ms-2 text-sm">Year</label>
                <Input
                  value={item.year || ""}
                  type="number"
                  min="1900"
                  max={new Date().getFullYear()}
                  required
                  onChange={(e) =>
                    handleFormChange(index, "year", e.target.value)
                  }
                />
              </div>

              <Button
                type="button"
                onClick={() => removeCertificates(index)}
                className="bg-red-500 w-[50%]"
              >
                Remove Certificate
              </Button>
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-3">
          <div>
            <Button
              type="button"
              onClick={addCertificates}
              className="bg-purple-500"
            >
              Add Certificate
            </Button>
          </div>

          <div>
            <Button disabled={loading} type="submit" className="bg-purple-500">
              {loading ? <LoaderCircle className="animate-spin" /> : "Save"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Certificates;
