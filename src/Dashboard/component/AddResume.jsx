import React, { useState } from "react";
import { Loader2, PlusSquare } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import uuid4 from "uuid4"; // This package generates unique id's 
import { useNavigate } from "react-router-dom";  // This is used to nevigate to other components as it's name suggests.

function AddResume() {
  const [openDialog, setOpenDialog] = useState(false);
  const [resumeTitle, setResumeTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onCreate = () => { 
    setLoading(true);  
    setTimeout(() => {
      setLoading(false);  
      setOpenDialog(false);  
      const uuid = uuid4();
      console.log({ resumeTitle, uuid });
      navigate(`/dashboard/resume/${uuid}/edit`);
    }, 2000);
  };
  

  return (
    <div>
      <div
        className="my-4 p-14 h-[250px] cursor-pointer bg-secondary w-60 flex justify-center items-center border-2 border-dashed border-gray-300 rounded-lg hover:scale-110 transition-transform duration-300 ease-in-out shadow-md"
        onClick={() => setOpenDialog(true)}
      >
        <PlusSquare />
      </div>

      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create new Resume</DialogTitle>
            <DialogDescription className="py-2">
              Add a title for your resume. You can edit this later.
              <Input
                className="mt-3"
                placeholder="Ex. Full Stack Developer..."
                onChange={(e) => setResumeTitle(e.target.value)} // To save the user input
              />
            </DialogDescription>
            <div className="flex justify-end gap-2">
              <Button onClick={() => setOpenDialog(false)} variant="ghost">
                Cancel
              </Button>
              <Button disabled={!resumeTitle || loading} onClick={onCreate}>
                {loading ? <Loader2 className="animate-spin" /> : "Create"}
              </Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddResume;
