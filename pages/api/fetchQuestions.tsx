export default function fetchQuestions(setter: (x: Question[]) => void){
    const url = "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple"
    const response:Question[] = []
    fetch(url)
    .then(request => request.json())
    .then(data => {
        if (data.response_code != 0) throw console.error("API ERROR")
        for(let question of data.results){
            response.push(new Question(question.question, question.correct_answer, question.incorrect_answers))
        }
        setter(response)
    })
}

export class Question {
    public readonly question: string
    public readonly correct_answer: string
    public readonly incorrect_answers: string[]

    constructor(question:string, correct_answer:string, incorrect_answers:string[]){
        this.question = question
        this.correct_answer = correct_answer
        this.incorrect_answers = incorrect_answers
    }
}