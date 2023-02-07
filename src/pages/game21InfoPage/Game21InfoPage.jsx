import React from "react";
import { useNavigate } from "react-router-dom";
import MyButton from "../../components/UI/myButton/MyButton";
import "./Game21InfoPage.scss";

export default function Game21InfoPage() {
  const navigate = useNavigate();

  return (
    <div className="gameInfoPage">
      <p>
        At the beginning of the game you see the number 0 and you make the first
        move or you can change it and I will start. At each step you can add 1,
        2 or 3 to the number, then I add 1, 2 or 3 to what you added. Whoever
        reaches or exceeds 21 first loses
      </p>
      <MyButton onClick={() => navigate("/game21")}>Start</MyButton>
    </div>
  );
}
