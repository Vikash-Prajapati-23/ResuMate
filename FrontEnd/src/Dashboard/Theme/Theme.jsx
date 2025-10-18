import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  setResumeInfo,
  updateResumeInfoField,
} from "@/store/slices/resumeInfo/resumeInfo";
import { LayoutGridIcon } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

const baseUrl = import.meta.env.VITE_BASE_URL;

const Theme = () => {
  const colors = [
    "#1E40AF", // Classic Blue
    "#3B82F6", // Bright Blue
    "#059669", // Emerald Green
    "#10B981", // Mint Green
    "#6D28D9", // Royal Purple
    "#8B5CF6", // Soft Purple
    "#D97706", // Amber Gold
    "#F59E0B", // Bright Amber
    "#334155", // Slate Gray
    "#64748B", // Cool Gray
    "#0D9488", // Teal Blue
    "#14B8A6", // Aqua Teal
    "#BE123C", // Rose Red
    "#0284C7", // Sky Blue
    "#DB2777", // Soft Pink
  ];

  const dispatch = useDispatch();
  const resumeInfo = useSelector((state) => state.resumeInfo.value);
  const { resumeId } = useParams();

  const themeColor = async (color) => {
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
            personalInfo: data.data.resumeId,
          })
        );
      }
    } catch (error) {
      toast.error("Something went wrong.!");
      console.error("Internal server error.", error);
    }
  };

  const handleColorChange = (e) => {
    const { name, value } = e.target;
    dispatch(
      updateResumeInfoField({
        field: "personalInfo",
        data: { ...(resumeInfo.personalInfo || {}), [name]: value },
      })
    );
  };

  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <button className="flex justify-center items-center md:gap-2 gap-1 h-9 bg-purple-500 text-white cursor-pointer lg:px-3 md:px-2 px-2 py-2 font-bold rounded-md lg:text-base md:text-sm text-xs ">
            <LayoutGridIcon className="h-5 w-5 " /> <span>Theme</span>
          </button>
        </PopoverTrigger>
        <PopoverContent className="p-4 pe-0 pt-2">
          <h4 className="cursor-default mb-2 mt-0 text-slate-600 md:text-base text-xs font-semibold ">
            Pic a color for your resume.
          </h4>
          <div className="grid grid-cols-6 gap-2 rounded-md">
            {colors.map((item, idx) => (
              <Input
                key={idx}
                style={{ background: item }}
                className={`h-5 w-2 rounded-full cursor-pointer border-0 border-black hover:border duration-100 ease-in-out `}
                onClick={() => themeColor(item)}
                name="theme_color"
                type="color"
                onChange={handleColorChange}
                value={resumeInfo.personalInfo?.theme_color || "#1e40af"}
              ></Input>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default Theme;
