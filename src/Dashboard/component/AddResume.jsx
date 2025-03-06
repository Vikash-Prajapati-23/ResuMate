import { PlusSquare } from "lucide-react";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import uuid4 from "uuid4";

function addResume() {
  const [openDialog, setOpenDialog] = useState(false);
  const [resumeTittle, setResumeTittle] = useState();

  const onCreate = () => {
    const uuid = uuid4();
    console.log({ resumeTittle, uuid });
    setOpenDialog(false);
  };

  return (
    <div className="">
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
              Add a tittle for your resume. You can edit this later.
              <Input
                className="mt-2"
                placeholder="Ex. Full Stack Developer..."
                onChange={(e) => setResumeTittle(e.target.value)} // To save the user input
              />
            </DialogDescription>

            <div className="flex justify-end gap-2">
              <Button onClick={() => setOpenDialog(false)} variant="ghost">
                Cancle
              </Button>
              <Button disabled={!resumeTittle} onClick={() => onCreate()}>Create</Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default addResume;
