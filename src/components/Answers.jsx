import React, { useRef } from "react";

export default function Answers({
  answers,
  selectedAnswer,
  onSelect,
  answerState,
}) {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }
  return (
    <div>
      <ul id="answers">
        {shuffledAnswers.current.map((answer) => {
          let cssClass = "";
          const isSelected = selectedAnswer === answer;
          if (answerState === "answered" && isSelected) {
            cssClass = "selected";
          }

          if (
            (answerState === "correct" || answerState === "wrong") &&
            isSelected
          ) {
            cssClass = answerState;
          }
          return (
            <li className="answer" key={answer}>
              <button
                onClick={() => onSelect(answer)}
                className={cssClass}
                disabled={answerState !== ""}
              >
                {answer}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
