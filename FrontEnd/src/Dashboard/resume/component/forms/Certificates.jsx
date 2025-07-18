import { Input } from "@/components/ui/input";
import { LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setResumeInfo } from "@/store/slices/resumeInfo/resumeInfo";

function Certificates({ handleSave, loading }) {
  const dispatch = useDispatch();
  const resumeInfo = useSelector((state) => state.resumeInfo.value);

  const [certificate, setCertificate] = useState([
    {
      name: "",
      year: 0,
    },
  ]);

  useEffect(() => {
    if (resumeInfo && resumeInfo.certifications) {
      setCertificate(resumeInfo.certifications);
    }
  }, []);

  const handleFormChange = (index, name, value) => {
    const newCertificates = certificate.slice();
    newCertificates[index][name] = value;
    setCertificate(newCertificates);
    dispatch(
      setResumeInfo((prevInfo) => ({
        ...prevInfo,
        certifications: newCertificates,
      }))
    );
  };

  const addCertificates = () => {
    setCertificate([
      ...certificate,
      {
        name: "",
        year: 0,
      },
    ]);
  };

  const removeCertificates = (index) => {
    const newCertificates = certificate.filter((_, i) => i !== index);
    setCertificate(newCertificates);
    dispatch(
      setResumeInfo((prevInfo) => ({
        ...prevInfo,
        certifications: newCertificates,
      }))
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
          {certificate.map((item, index) => (
            <div
              className="grid grid-cols-2 gap-3 border-2 rounded-md p-3 mb-3"
              key={index}
            >
              <div>
                <label className="ms-2 text-sm">Certificate Name</label>
                <Input
                  value={item.name}
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
                  value={item.year}
                  type="number"
                  min="1900"
                  max={new Date().getFullYear()} // Prevents future years
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
