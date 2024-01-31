import Card from "./components/Card";

export default function Home() {
  return (
    <div className="max-w-screen-lg mx-auto mt-10">
      <h1 className="text-center text-2xl font-bold text-gray-400">Quiz APP</h1>
      <h2 className="text-center text-5xl my-10">
        Question to answer
      </h2>
      <div className="grid grid-cols-2 grid-rows-2 gap-5">
        <Card color="red" answer="Answer 1"/>
        <Card color="blue" answer="Answer 2"/>
        <Card color="yellow" answer="Answer 3"/>
        <Card color="green" answer="Answer 4"/>
      </div>
    </div>
  );
}
