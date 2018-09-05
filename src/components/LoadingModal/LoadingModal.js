import React from "react";
import "./LoadingModal.css";

const LoadingModal = props => {
  // show is a boolean, returns null if !show
  // close is a function passed from the parent in charge of closing the modal
  // children is a collection of jsx elements, just props.children
  const { show, close, children } = props;
  return !show ? null : (
    <div className="modal">
      <div className="modal-container">
        <a className="modal-close" onClick={close}>
          ×
        </a>
        {children}
        <div className="lds-ring">
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    </div>
  );
};

export default LoadingModal;
