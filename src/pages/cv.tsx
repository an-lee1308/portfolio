import { useEffect } from "react";

const CVRedirect = () => {
  useEffect(() => {
    window.location.href = "/assets/AnLe-resume.pdf";
  }, []);

  return null;
};

export default CVRedirect;
