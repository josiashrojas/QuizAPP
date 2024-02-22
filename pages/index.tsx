import fetchQuestions, { Question } from "./api/fetchQuestions";
import Card from "./components/Card";
import { useState, useEffect,useRef } from "react";



export default function Home() {

  const [questions, setQuestions] = useState<Question[]>([])
  const [showAnswer, setShowAnswer] = useState(false)
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false)
  const initialized = useRef(false)
  
  useEffect(()=> {
    if(!initialized.current){
      fetchQuestions(setQuestions)
      initialized.current = true
    }
  }, [])

  const handleClick = (answer:string) => {
    if(answer === questions[0].correct_answer) {
      setIsCorrectAnswer(true)
    } else {
      setIsCorrectAnswer(false)
    }
    setShowAnswer(true)
  }

  return (
    <>
      {
        showAnswer ? 
        <div className="w-full h-screen bg-white flex justify-center items-center">
          <p className={`${isCorrectAnswer ? "text-green-400" : "text-red-400"} text-[120px] font-bold`}>{isCorrectAnswer ? "Correct" : "Incorrect"}</p>
        </div>
        :
        <div className="max-w-screen-lg mx-auto mt-10">
          <h1 className="text-center text-2xl font-bold text-gray-400">Quiz APP</h1>
          <h2 className="text-center text-5xl my-10">
            {questions.length === 0 ? "loading..." : questions[0].question}
          </h2>
          <div className="grid grid-cols-2 grid-rows-2 gap-5">
            <Card onClick={handleClick} className="bg-red-100 hover:bg-red-300" answer={questions.length === 0 ? "loading..." : questions[0].allAnswers[0]}/>
            <Card onClick={handleClick} className="bg-blue-100 hover:bg-blue-300"answer={questions.length === 0 ? "loading..." : questions[0].allAnswers[1]}/>
            <Card onClick={handleClick} className="bg-yellow-100 hover:bg-yellow-300" answer={questions.length === 0 ? "loading..." : questions[0].allAnswers[2]}/>
            <Card onClick={handleClick} className="bg-green-100 hover:bg-green-300" answer={questions.length === 0 ? "loading..." : questions[0].allAnswers[3]}/>
          </div>
        </div>
      }
    
    </>
  );
}
