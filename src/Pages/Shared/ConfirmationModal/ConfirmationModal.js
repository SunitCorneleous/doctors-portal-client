import React from "react";

const ConfirmationModal = ({
  title,
  message,
  setDeletingDoctor,
  successAction,
  modalData,
}) => {
  return (
    <div>
      <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{message}</p>
          <div className="modal-action">
            <button
              className="btn btn-error"
              onClick={() => successAction(modalData)}
            >
              Confirm
            </button>
            <label
              htmlFor="confirmation-modal"
              className="btn btn-outline btn-primary"
              onClick={() => setDeletingDoctor(null)}
            >
              cancle
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
