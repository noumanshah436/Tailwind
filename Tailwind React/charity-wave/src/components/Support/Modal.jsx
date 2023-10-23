import React, { useEffect } from "react";

const Modal = ({ response, closeModal }) => {
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 3000);
  });
  return (
    <div className="modal">
      <div
        className={`flex rounded-lg p-4 mb-4 text-sm ${
          response.isError
            ? "bg-red-100 text-red-700"
            : "bg-green-100 text-green-700"
        }`}
        role="alert"
      >
        <div>
          <span className="font-medium">Danger alert!</span>
          {" " + response.message}
        </div>
      </div>
    </div>
  );
};

export default Modal;
