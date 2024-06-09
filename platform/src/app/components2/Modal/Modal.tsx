import React, { useState } from "react";
import styles from "./styles.module.css";

const Modal = ({ isOpen, onClose, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className={`${styles.modal} ${isOpen ? styles.open : ""}`}>
      <div className={styles["modal-content"]}>
        <span className={styles.close} onClick={closeModal}>
          &times;
        </span>

        <center>
          <div className="justify-center mt-8  items-center w-full ">
            <img
              src="https://via.placeholder.com/300"
              className="rounded-lg w-40 ml-4"
            />
            <button className="bg-primary  items-center w-40 text-white font-bold py-2 px-4 rounded mt-4">
              Mint
            </button>
          </div>
        </center>
      </div>
    </div>
  );
};

export default Modal;
