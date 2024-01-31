import Card from "./components/Card";

const url = "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple"

interface QuestionData {
  correct_answer: string,
  incorrect_answers: Array<string>
}

interface Questions {
  results: Array<QuestionData>
}

export default function Home() {

  return (
    <div className="max-w-screen-lg mx-auto mt-10">
      <h1 className="text-center text-2xl font-bold text-gray-400">Quiz APP</h1>
      <h2 className="text-center text-5xl my-10">
        Question to answer
      </h2>
      <div className="grid grid-cols-2 grid-rows-2 gap-5">
        <Card className="bg-red-100 hover:bg-red-300" answer="Answer 1"/>
        <Card className="bg-blue-100 hover:bg-blue-300"answer="Answer 2"/>
        <Card className="bg-yellow-100 hover:bg-yellow-300" answer="Answer 3"/>
        <Card className="bg-green-100 hover:bg-green-300" answer="Answer 4"/>
      </div>
    </div>
  );
}
