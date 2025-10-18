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
    "#1E40AF",
    "#3B82F6",
    "#059669",
    "#10B981",
    "#6D28D9",
    "#8B5CF6",
    "#D97706",
    "#F59E0B",
    "#334155",
    "#64748B",
    "#0D9488",
    "#14B8A6",
    "#BE123C",
    "#0284C7",
    "#DB2777",
  ];

  const dispatch = useDispatch();
  const resumeInfo = useSelector((state) => state.resumeInfo.value);
  const { resumeId } = useParams();

  const saveThemeColor = async (updatedPersonalInfo) => {
    try {
      const response = await fetch(`${baseUrl}/api/create-resume/${resumeId}`, {
        method: "PATCH",
        credentials: "include",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ personalInfo: updatedPersonalInfo }),
      });
      const data = await response.json();

      if (response.ok) {
        toast.success(data.message);
        // Verify the response structure matches your API
        dispatch(
          setResumeInfo({
            ...resumeInfo,
            personalInfo: data.data.personalInfo, // ⚠️ Adjust based on your API response
          })
        );
      } else {
        toast.error(data.message || "Failed to update theme");
      }
    } catch (error) {
      toast.error("Something went wrong!");
      console.error("Internal server error:", error);
    }
  };

  const handleColorClick = (color) => {
    const updatedPersonalInfo = {
      ...(resumeInfo.personalInfo || {}),
      theme_color: color,
    };

    // Update local state immediately
    dispatch(
      updateResumeInfoField({
        field: "personalInfo",
        data: updatedPersonalInfo,
      })
    );

    // Save to backend
    saveThemeColor(updatedPersonalInfo);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="flex justify-center items-center md:gap-2 gap-1 h-9 bg-purple-500 text-white cursor-pointer lg:px-3 md:px-2 px-2 py-2 font-bold rounded-md lg:text-base md:text-sm text-xs hover:bg-purple-600 transition-colors">
          <LayoutGridIcon className="h-5 w-5" /> <span>Theme</span>
        </button>
      </PopoverTrigger>
      <PopoverContent className="p-4">
        <h4 className="cursor-default mb-3 mt-0 text-slate-600 md:text-base text-sm font-semibold">
          Pick a color for your resume
        </h4>
        <div className="grid grid-cols-5 gap-3">
          {colors.map((color, idx) => (
            <div
              key={idx}
              style={{ backgroundColor: color }}
              className={`h-6 w-6 rounded-full cursor-pointer border-2 hover:scale-110 transition-all duration-150 ${
                resumeInfo.personalInfo?.theme_color === color
                  ? "border-black ring-2 ring-offset-2 ring-black"
                  : "border-gray-300 hover:border-gray-400"
              }`}
              onClick={() => handleColorClick(color)}
              role="button"
              aria-label={`Select ${color} theme`}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleColorClick(color);
                }
              }}
            />
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default Theme;
