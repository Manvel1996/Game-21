import React, { useEffect, useState } from "react";
import MyButton from "../../components/UI/myButton/MyButton";
import MySelect from "../../components/UI/mySelect/Myselect";
import WinLose from "../../components/WinLose";
import game21Logic from "../../utils/game21Logic";
import "./Game21Page.scss";

export default function Game21Page() {
  const [game21Num, setGame21Num] = useState(0);
  const [game21Level, setGame21Level] = useState(1);
  const [disabled, setDisabled] = useState(false);
  const [thinkingSmile, setThinkingSmile] = useState(false);
  const [winLoseModal, setWinLoseModal] = useState(false);
  const [winLoseModalText, setWinLoseModalText] = useState("");
  const [startmeButton, setStartMebutton] = useState(false);

  const adderArr = [1, 2, 3];

  useEffect(() => {
    setDisabled(false);
    setThinkingSmile(false);
    setWinLoseModalText("");
    setStartMebutton(false);
  }, []);

  function game21AddNum(num) {
    setThinkingSmile(true);
    setDisabled(true);
    setStartMebutton(true);
    if (game21Num + num >= 21) {
      setWinLoseModalText("You Lose");
      setWinLoseModal(true);
      setGame21Num(0);
      setDisabled(false);
      setThinkingSmile(false);
      setStartMebutton(false);
    } else {
      setGame21Num(game21Num + num);
      setTimeout(() => {
        const returnedNum = game21Logic(game21Level, game21Num + num);
        if (returnedNum >= 21) {
          setWinLoseModalText("You Win");
          setWinLoseModal(true);
          setGame21Num(0);
          setDisabled(false);
          setThinkingSmile(false);
          setStartMebutton(false);
        } else {
          setGame21Num(returnedNum);
          setDisabled(false);
        }
        setThinkingSmile(false);
      }, 1000);
    }
  }

  function startMe() {
    const newNum = Math.ceil(Math.random() * 3);
    setStartMebutton(true);
    if (newNum === 0) setGame21Num(game21Num + 1);
    else setGame21Num(game21Num + newNum);
  }

  return (
    <div className="game21Page">
      <div className="gameContent">
        <h3>{game21Num}</h3>
        <div className="selectLevel">
          <h3>Level</h3>
          <MySelect
            value={game21Level}
            onChangeSelect={(val) => setGame21Level(+val)}
            defaultValue="Level"
            options={[
              { value: 1, name: "Easy" },
              { value: 2, name: "Medium" },
              { value: 3, name: "Hard" },
            ]}
          />
        </div>
        {thinkingSmile && (
          <img
            alt="thinking smile"
            className="thinkingSmile"
            src={
              game21Level === 1
                ? "../../public/thinking-easy.png"
                : game21Level === 2
                ? "../../../../public/thinking-medium.png"
                : "thinking-hard.png"
            }
          />
        )}
        {winLoseModal && (
          <WinLose
            winLoseModal={winLoseModal}
            setWinLoseModal={setWinLoseModal}
            txt={winLoseModalText}
          />
        )}
        <h3>Add number</h3>
        <div className="game21addNumbers">
          {adderArr.map((num) => (
            <MyButton
              key={num}
              disabled={disabled}
              onClick={() => game21AddNum(num)}>
              {num}
            </MyButton>
          ))}
          <MyButton
            id={startmeButton ? "startMeBtn" : ""}
            disabled={startmeButton}
            onClick={startMe}>
            Start to me
          </MyButton>
        </div>
      </div>
    </div>
  );
}
