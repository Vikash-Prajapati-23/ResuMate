import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { LayoutGridIcon } from "lucide-react";

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

  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <button className="flex justify-center items-center md:gap-2 gap-1 h-9 bg-purple-500 text-white cursor-pointer lg:px-3 md:px-2 px-2 py-2 font-bold rounded-md lg:text-base md:text-sm text-xs ">
            <LayoutGridIcon className="h-5 w-5 " /> <span>Theme</span>
          </button>
        </PopoverTrigger>
        <PopoverContent className="p-4 pe-0 pt-2" >
          <h4 className="cursor-default mb-2 mt-0 text-slate-600 md:text-base text-xs font-semibold ">Pic a color for your resume.</h4>
          <div className="grid grid-cols-6 gap-2 rounded-md">
            {colors.map((item, idx) => (
            <div
              key={idx}
              style={{ background: item }}
              className={`h-5 w-5 rounded-full cursor-pointer border-black hover:border-2 duration-100 ease-in-out `}
            ></div>
          ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default Theme;
