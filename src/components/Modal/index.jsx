const Modal = () => {
  return (
    <div className="modal">
      <div className="modal-header">
        Modal Header
      </div>
      <div className="modal-body">
        <input as="text" />
        <input />
      </div>
      <div className="modal-footer">
        <button>Cancel</button>
        <button>Submit</button>
      </div>
    </div>
  );
};

export default Modal;
