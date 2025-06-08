import React, { useCallback, useState } from "react";
import QUESTIONS from "../questions";
import Question from "./Question";
import QuizSummary from './QuizSummary'
// import QuestionTimer from "./QuestionTimer";

export default function Quiz() {
  const [userAnswers, setUserAnswer] = useState([]);

  const activeQuestionId = userAnswers.length;
  const IsComplete = activeQuestionId === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswer((prevAnsweres) => {
      return [...prevAnsweres, selectedAnswer];
    });
  },
  []);

  const handleSkipAnswer = useCallback(
    function handleSkipAnswer() {
      handleSelectAnswer(null);
    },
    [handleSelectAnswer]
  );

  if (IsComplete) {
    return <QuizSummary answers={userAnswers}/>;
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionId}
        index={activeQuestionId}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
