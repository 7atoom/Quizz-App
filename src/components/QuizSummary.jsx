import React from "react";
import QUESTIONS from "../questions.js";

import summaryLogo from "../assets/quiz-complete.png";

export default function QuizSummary({ answers }) {
  const skippedAnswers = answers.filter((answer) => answer === null);
  const correctAnswers = answers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  );

  const skippedAnswersShare = Math.round(
    (skippedAnswers.length / answers.length) * 100
  );
  const correctAnswersShare = Math.round(
    (correctAnswers.length / answers.length) * 100
  );
  const wrongAnswersShare = 100 - skippedAnswersShare - correctAnswersShare;
  return (
    <div id="summary">
      <img src={summaryLogo} alt="" />
      <h2>Quiz Summary</h2>
      <div id="summary-stats">
        <p>
          <div className="number">{correctAnswersShare}%</div>
          <div className="text">Correct</div>
        </p>
        <p>
          <div className="number">{wrongAnswersShare}%</div>
          <div className="text">Wrong</div>
        </p>
        <p>
          <div className="number">{skippedAnswersShare}%</div>
          <div className="text">Skipped</div>
        </p>
      </div>
      <ol>
        {answers.map((answer, index) => {
          let cssClasses = "user-answer";
          if (answer === null) {
            cssClasses += " skipped";
          } else if (answer === QUESTIONS[index].answers[0]) {
            cssClasses += " correct";
          } else {
            cssClasses += " wrong";
          }
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <div className="question">{QUESTIONS[index].text}</div>
              <div className={cssClasses}>{answer ?? "Skipped"}</div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
