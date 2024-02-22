import fetchQuestions, { Question } from "./api/fetchQuestions";
import Card from "./components/Card";
import { useState, useEffect,useRef } from "react";

export default function Home() {

  const [questions, setQuestions] = useState<Question[]>([])
  const [showAnswer, setShowAnswer] = useState(false)
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const initialized = useRef(false)
  
  useEffect(()=> {
    if(!initialized.current){
      fetchQuestions(setQuestions)
      initialized.current = true
    }
  }, [])

  const handleAnswerClick = (answer:string) => {
    if(answer === questions[currentQuestion].correct_answer) {
      setIsCorrectAnswer(true)
      setCorrectAnswers(correctAnswers + 1)
    } else {
      setIsCorrectAnswer(false)
    }
    setShowAnswer(true)
  }

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1)
    setShowAnswer(false)
  }

  return (
    <>
      {
        showAnswer ? 
        <div className="w-full h-screen bg-white flex flex-col justify-center items-center">
          <p className={`${isCorrectAnswer ? "text-green-400" : "text-red-400"} text-[120px] font-bold`}>{isCorrectAnswer ? "Correct" : "Incorrect"}</p>
          <p className="cursor-pointer hover:underline text-gray-600" onClick={handleNextQuestion}>Next question...</p>
        </div>
        :
        currentQuestion < questions.length ?
        <div className="max-w-screen-lg mx-auto mt-10">
          <h1 className="text-center text-2xl font-bold text-gray-400">Quiz APP</h1>
          <h2 className="text-center text-5xl my-10">
            {questions.length === 0 ? "loading..." : questions[currentQuestion].question}
          </h2>
          <div className="grid grid-cols-2 grid-rows-2 gap-5">
            <Card onClick={handleAnswerClick} className="bg-red-100 hover:bg-red-300" answer={questions.length === 0 ? "loading..." : questions[currentQuestion].allAnswers[0]}/>
            <Card onClick={handleAnswerClick} className="bg-blue-100 hover:bg-blue-300"answer={questions.length === 0 ? "loading..." : questions[currentQuestion].allAnswers[1]}/>
            <Card onClick={handleAnswerClick} className="bg-yellow-100 hover:bg-yellow-300" answer={questions.length === 0 ? "loading..." : questions[currentQuestion].allAnswers[2]}/>
            <Card onClick={handleAnswerClick} className="bg-green-100 hover:bg-green-300" answer={questions.length === 0 ? "loading..." : questions[currentQuestion].allAnswers[3]}/>
          </div>
        </div>
        :
        <div className="w-full h-screen bg-white flex flex-col justify-center items-center space-y-4">
          <h1 className="text-8xl font-bold text-red-400">Game Over</h1>
          <p className="text-4xl text-gray-800">Correct answers: {correctAnswers}/{questions.length}</p>
          <p onClick={()=>location.reload()} className="text-gray-400 hover:underline cursor-pointer">Play again</p>
        </div>
      }
    
    </>
  );
}
