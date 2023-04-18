import { useState, useEffect } from "react";
const useDropDownHook = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return { isOpen, setIsOpen, toggleOpen };
};

export default useDropDownHook;
