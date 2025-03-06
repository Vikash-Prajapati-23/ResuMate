import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function EditResume() {
  const params = useParams();

  useEffect(() => {
    console.log(params.resumeID);
  }, []);

  return (
    <div>
      <h3>EditResume</h3>
    </div>
  );
}

export default EditResume;
