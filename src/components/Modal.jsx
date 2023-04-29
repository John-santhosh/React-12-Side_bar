import { useGlobalContext } from "../context";

import { FaTimes } from "react-icons/fa";
const Modal = () => {
  const { isModelOpen, closeModal } = useGlobalContext();
  return (
    <div
      className={isModelOpen ? "modal_overlay show_modal" : "modal_overlay "}
    >
      <div className="modal">
        <button onClick={closeModal} className="close_modal">
          <FaTimes></FaTimes>
        </button>
        <h2>Modal Content</h2>
      </div>
    </div>
  );
};

export default Modal;
