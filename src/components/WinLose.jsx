import React from "react";
import Modal from "./UI/modal/Modal";
import MyButton from "./UI/myButton/MyButton";

export default function WinLose({ winLoseModal, setWinLoseModal, txt }) {

  return (
    <Modal active={winLoseModal} setActive={setWinLoseModal}>
      <h2 style={{color:"red"}}>{txt}</h2>
      <MyButton onClick={() => setWinLoseModal(false)}>Ok</MyButton>
    </Modal>
  );
}
