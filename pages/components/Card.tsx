export default function Card(props: {className: string, answer: string,}){
    return (
        <div 
            className={`flex w-full h-full shadow-md justify-center items-center transition-colors ease-linear  min-h-60 rounded-md text-lg ${props.className}`}
        >
            <p>{props.answer}</p>
        </div>
    )
}