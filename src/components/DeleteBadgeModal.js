import React from "react";

import Modal from "../components/Modal";

function DeleteBadgeModal(props) {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <div className='DeleteBadgeModal'>
        <h1>Are you Sure?</h1>
        <p>You are about to delete this badge.</p>

        <div>
          <button onClick={props.onDeleteBadge} className='btn btn-danger'>
            Delete
          </button>
          <button onClick={props.onClose} className='btn btn-primary '>
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default DeleteBadgeModal;
