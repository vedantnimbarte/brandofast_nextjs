import React, { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";
const Modal = ({children , className}) => {
    const gContext = useContext(GlobalContext);
    return (
      <a
        href="/#"
        className={`video-btn text-dodger-blue-2 ${className}`}
        onClick={(e) => {
          e.preventDefault();
          gContext.toggleVideoModal();
        }}
      >
        {children}
      </a>
    );
}

export default Modal;