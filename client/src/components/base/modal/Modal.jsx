import React from "react";
import "./modal.css";

export default function Modal({ onCancel, title, onOk }) {
  return (
    <>
      <div className="q-modal-container">
        <div className="q-modal-item">
          <div className="q-modal-header">
            <span>Xác nhận</span>
            <i onClick={onCancel} className="fa-solid fa-xmark"></i>
          </div>
          <div className="q-modal-body">
            <i className="fa-solid fa-triangle-exclamation"></i>
            <div>{title}</div>
          </div>
          <div className="q-modal-footer">
            <button onClick={onCancel} className="btn btn-secondary">
              Hủy
            </button>
            <button onClick={onOk} className="btn btn-danger">
              Xóa
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
