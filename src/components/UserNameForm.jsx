import React, { useContext, useState } from "react";
import Modal from "./UI/modal/Modal";
import MyButton from "./UI/myButton/MyButton";
import MyInput from "./UI/myInput/MyInput";
import { toast } from "react-toastify";
import { ModalAndName } from "../context";

export default function UserNameForm() {
  const [inputValue, setInputValue] = useState("");
  const { active, setActive, setUserName } = useContext(ModalAndName);

  function changeName() {
    if (inputValue.trim().length === 0) {
      toast.info("Please write correct name");
    } else {
      setUserName(inputValue.trim());
      setActive(false);
      localStorage.setItem("userName", inputValue);
    }
  }

  return (
    <Modal active={active} setActive={setActive}>
      <h2 style={{ color: "darkBlue" }}>Change Name</h2>
      <MyInput
        placeholder="Name"
        maxLength="15"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <MyButton onClick={changeName}>Submit</MyButton>
    </Modal>
  );
}
