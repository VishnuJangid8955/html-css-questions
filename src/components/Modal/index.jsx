import { useState } from "react";
import "./style.css";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);


  const handleOpenModal = () => {
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  }

  return (
    <>
      <div className="open-modal">
        <button onClick={handleOpenModal} className="btn-open-modal">Open Modal</button>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Modal Header</h3>
            </div>
            <div className="modal-body">
              <input as="text" />
              <input />
              <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Corporis voluptatibus consequuntur officia mollitia ab commodi
                maxime vero similique iusto deserunt itaque dolores est at neque
                non velit ducimus, natus illum.
              </div>
              <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Corporis voluptatibus consequuntur officia mollitia ab commodi
                maxime vero similique iusto deserunt itaque dolores est at neque
                non velit ducimus, natus illum.
              </div>
              <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Corporis voluptatibus consequuntur officia mollitia ab commodi
                maxime vero similique iusto deserunt itaque dolores est at neque
                non velit ducimus, natus illum.
              </div>
              <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Corporis voluptatibus consequuntur officia mollitia ab commodi
                maxime vero similique iusto deserunt itaque dolores est at neque
                non velit ducimus, natus illum.
              </div>
              <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Corporis voluptatibus consequuntur officia mollitia ab commodi
                maxime vero similique iusto deserunt itaque dolores est at neque
                non velit ducimus, natus illum.
              </div>
              <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Corporis voluptatibus consequuntur officia mollitia ab commodi
                maxime vero similique iusto deserunt itaque dolores est at neque
                non velit ducimus, natus illum.
              </div>
              <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Corporis voluptatibus consequuntur officia mollitia ab commodi
                maxime vero similique iusto deserunt itaque dolores est at neque
                non velit ducimus, natus illum.
              </div>
            </div>
            <div className="modal-footer">
              <button onClick={handleCloseModal}>Cancel</button>
              <button onClick={handleCloseModal}>Submit</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
